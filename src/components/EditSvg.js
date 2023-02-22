import React, { useEffect, useRef, useState } from 'react'
import mySvg from '/static/1.svg'
import axios from 'axios'

const FIELDS = {
  name: 'FIELD_NAME',
  surname: 'FIELD_SURNAME',
}

const EditSvg = () => {
  const [baseSvg, setBaseSvg] = useState()
  const [svg, setSvg] = useState()
  const [fields, setFields] = useState(FIELDS)
  const [download, setDownload] = useState('')

  const svgRef = useRef(null)
  const saveRef = useRef(null)

  function updateInput({ target }) {
    const tmpFields = { ...fields }
    tmpFields[target.name] = target.value
    setFields(tmpFields)
  }

  function updateSvg() {
    if (baseSvg) {
      setSvg(
        Object.entries(fields).reduce((accum, [key, value]) => {
          return accum.replace(`FIELD_${key.toUpperCase()}`, value)
        }, baseSvg)
      )
    }
  }

  const loadSvg = async ({ src }) => {
    const response = await fetch(src)
    setBaseSvg(await response.text())
  }

  async function makePdfFile() {
    axios
      .post('/api/image', svg, {
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

  useEffect(() => {
    console.log('loadSvg : useEffect')
    console.dir(mySvg)
    loadSvg(mySvg)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log('baseSvg : useEffect')
    updateSvg()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseSvg])

  useEffect(() => {
    console.log('loadSvg : useEffect')
    updateSvg()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields])
  useEffect(() => {
    if (download) saveRef.current.click()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [download])

  const makeSvgSrc = (svg) => {
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg)
  }

  return (
    <div className="container">
      <div>
        {svg ? (
          <img
            src={makeSvgSrc(svg)}
            ref={svgRef}
            width="500"
            // height="150"
            alt="vizitka svg"
          />
        ) : (
          <div className="placeholder">Загрузка</div>
        )}
      </div>
      <div>
        <label>Name: </label>
        <input value={fields?.name} name="name" onChange={updateInput} />
      </div>
      <div>
        <label>Surname: </label>
        <input value={fields?.surname} name="surname" onChange={updateInput} />
      </div>
      <div>
        <button
          onClick={() => {
            makePdfFile()
          }}
        >
          Make PDF
        </button>

        <div>{download}</div>
      </div>
    </div>
  )
}

export default EditSvg
