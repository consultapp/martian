import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import RenderSvg from './RenderSvg'
import renderFieldsToSvg from '@/utils/renderFieldsToSvg'

const API_URL_PDF = '/api/getPdf'

const EditSvg = ({ svg, startFields, handleRefresh }) => {
  const [fields, setFields] = useState(startFields)
  const [download, setDownload] = useState('')

  const saveRef = useRef(null)

  function updateFields({ target }) {
    const tmpFields = { ...fields }
    tmpFields[target.name] = target.value
    setFields(tmpFields)
  }

  async function makePdfFile(id) {
    setDownload(
      <div className="spinner-border text-primary m-2" role="status">
        &nbsp;
      </div>
    )

    axios
      .post(API_URL_PDF, renderFieldsToSvg(svg[id], fields), {
        headers: {
          'Content-Type': 'image/svg+xml',
        },
      })
      .then(({ data }) => {
        setDownload(
          <a
            href="/static/1.pdf"
            className="btn btn-primary"
            ref={saveRef}
            download="vizitka.pdf"
            key={data}
          >
            Скачать
          </a>
        )
      })
      .catch((error) => {
        console.error(error)
      })
  }

  // useEffect(() => {
  //   if (download) saveRef.current.click()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [download])

  const svgRenders = svg.map((item, i) => {
    return item ? (
      <div className="col" key={i}>
        <RenderSvg svg={item} fields={fields} alt={`Svg${i}`} />
      </div>
    ) : (
      <div className="col">Нет второго шаблона</div>
    )
  })

  const fieldsHTML = fields
    ? Object.entries(fields).map(([key, value]) => {
        return getFieldHTML(key, value)
      })
    : ''

  function getFieldHTML(key, value) {
    return (
      <div key={key}>
        <label className="form-lable">{key}: </label>
        <input
          className="form-control"
          value={value}
          name={key}
          id={key}
          onChange={updateFields}
        />
      </div>
    )
  }

  const buttons = (
    <div className="edit-form-buttons">
      <button
        className="btn btn-secondary outline m-2"
        onClick={(event) => {
          event.preventDefault()
          handleRefresh()
        }}
      >
        &lt; Выбрать шаблоны
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={(event) => {
          event.preventDefault()
          makePdfFile(0)
        }}
      >
        Make PDF
      </button>

      {download}
    </div>
  )

  return (
    <>
      <div className="row">
        <h1>Редактирование шаблонов</h1>
      </div>
      <div className="row">{svgRenders}</div>
      <form>
        <div className="row">{fieldsHTML}</div>
        <div className="row">{buttons}</div>
      </form>
    </>
  )
}

export default EditSvg
