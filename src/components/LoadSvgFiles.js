import React, { useEffect, useRef, useState } from 'react'
import RenderSvg from './RenderSvg'

export default function LoadSvgFiles({ handleFilesLoaded }) {
  const [svg, setSvg] = useState([null, null])

  const handleFileChange = (event) => {
    if (event.target.files) {
      console.log(event.target)

      let reader = new FileReader()

      reader.readAsText(event.target.files[0])

      reader.onload = function () {
        console.log(reader.result)
        const svgArr = [...svg]
        svgArr[event.target.id.at(-1)] = reader.result
        setSvg(svgArr)
      }

      reader.onerror = function () {
        console.log(reader.error)
      }
    }
  }

  const editHandle = (event) => {
    event.preventDefault()
    if (svg[0]) {
      handleFilesLoaded(svg)
    }
  }

  return (
    <>
      <div className="row">
        <h1>Загрузка шаблонов</h1>
      </div>
      <div className="row load-form">
        <form>
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="inputFile0" className="form-label">
                Фронтальная сторона:
              </label>
              <input
                type="file"
                className="form-control"
                id="inputFile0"
                onChange={handleFileChange}
              />
              <div className="load-files-render">
                <RenderSvg svg={svg[0]} />
              </div>
            </div>
            <div className="col mb-3">
              <label htmlFor="inputFile1" className="form-label">
                Обратная сторона
              </label>
              <input
                type="file"
                className="form-control"
                id="inputFile1"
                onChange={handleFileChange}
              />
              <div className="load-files-render">
                <RenderSvg svg={svg[1]} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="load-form-buttons">
              <button className="btn btn-primary" onClick={editHandle}>
                Редактировать
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
