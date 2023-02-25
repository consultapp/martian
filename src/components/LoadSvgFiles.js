import patternField from '@/patternField'
import React, { useEffect, useRef, useState } from 'react'
import RenderSvg from './RenderSvg'

export default function LoadSvgFiles({ handleFilesLoaded }) {
  const [svg, setSvg] = useState([null, null])
  const [fields, setFields] = useState([])

  const handleFileChange = (event) => {
    const { target } = event
    if (target.files) {
      console.log(target)

      let reader = new FileReader()
      reader.readAsText(target.files[0])

      reader.onload = function () {
        // console.log(reader.result)
        const svgArr = [...svg]
        svgArr[target.id.at(-1)] = reader.result

        const fieldsArr = getFieldsFromSvg(reader.result)
        if (fieldsArr) {
          setSvg(svgArr)
          setFields(unicFields([...fields, ...fieldsArr]))
        } else {
          alert('Ошибка. Поля для редактирования не найдены.')
          target.value = ''
        }
      }

      reader.onerror = function () {
        console.log(reader.error)
        alert('Ошибка. Файл загружен с ошибкой.')
        target.value = ''
      }
    }
  }

  function getFieldsFromSvg(str) {
    const regexp = new RegExp(patternField('\\w+'), 'gmi')
    return unicFields(str.match(regexp))
  }

  function unicFields(arr) {
    if (arr)
      return arr.reduce((accum, item) => {
        if (!accum.includes(item)) accum.push(item)
        return accum
      }, [])
  }

  const editHandle = (event) => {
    event.preventDefault()
    if (svg[0]) {
      handleFilesLoaded(svg, fields)
    }
  }

  console.log('LoadSvgFiles', fields)

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
                accept=".svg"
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
                accept=".svg"
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
