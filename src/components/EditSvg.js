import React, { useEffect, useRef, useState } from 'react'
import mySvg from '/static/1.svg'
import axios from 'axios'
import RenderSvg from './RenderSvg'

const API_URL_PDF = '/api/getPdf'

const EditSvg = ({ svgs }) => {
  const [svg, setSvg] = useState()

  const [fields, setFields] = useState(null)

  const [download, setDownload] = useState('')

  const saveRef = useRef(null)

  function updateFields({ target }) {
    const tmpFields = { ...fields }
    tmpFields[target.name] = target.value
    setFields(tmpFields)
  }

  async function makePdfFile() {
    axios
      .post(API_URL_PDF, svg, {
        headers: {
          'Content-Type': 'image/svg+xml',
        },
      })
      .then(({ data }) => {
        setDownload(
          <a href="/static/1.pdf" ref={saveRef} download="vizitka.pdf">
            Скачать
          </a>
        )
      })
      .catch((error) => {
        console.error(error)
      })
  }

  function getFieldsFromSvg() {}

  useEffect(() => {
    console.log('loadSvg : useEffect')
    getFieldsFromSvg()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log('loadSvg : useEffect')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields])
  useEffect(() => {
    if (download) saveRef.current.click()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [download])

  const svgRenders = svgs.map((item, i) => {
    return item ? (
      <div className="col">
        <RenderSvg svg={item} fields={fields} alt={`Svg${i}`} />
      </div>
    ) : (
      <div className="col">Нет второго шаблона</div>
    )
  })

  return (
    <>
      <div className="row">
        <h1>Редактирование шаблонов</h1>
      </div>
      <div className="row">{svgRenders}</div>
      <div className="row">
        <div>
          <label>Name: </label>
          <input value={fields?.name} name="name" onChange={updateFields} />
        </div>
        <div>
          <label>Surname: </label>
          <input
            value={fields?.surname}
            name="surname"
            onChange={updateFields}
          />
        </div>
      </div>
      <div className="row">
        <div className="edit-form-buttons">
          <button
            className="btn btn-secondary outline m-2"
            onClick={() => {
              makePdfFile()
            }}
          >
            &lt; Выбрать шаблоны
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={() => {
              makePdfFile()
            }}
          >
            Make PDF
          </button>

          <div>{download}</div>
        </div>
      </div>
    </>
  )
}

export default EditSvg
