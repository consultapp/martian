import { mockFields } from '@/mockFields'
import patternField from '@/utils/patternField'
import React, { useRef, useState } from 'react'
import RenderSvg from './RenderSvg'

export default function LoadSvgFiles({ handleFilesLoaded }) {
  const [state, setState] = useState({ svg: [null, null], fields: {} })

  const v1 = useRef()
  const v2 = useRef()

  const handleFileChange = (event) => {
    const { target } = event
    const { svg, fields } = state

    if (target.files) {
      let reader = new FileReader()
      reader.readAsText(target.files[0])

      reader.onload = function () {
        const svgArr = [...svg]
        svgArr[target.id.at(-1)] = reader.result

        const fieldsArr = getFieldsFromSvg(reader.result)
        // fieldsArr.filter((field) => {
        //   const str = field.replace('__FIELD_', '').replace('__', '')
        //   return Object.hasOwn(fields, str)
        // })

        if (fieldsArr) {
          const fieldsTmp = getFields(fieldsArr)
          if (fieldsTmp) {
            setState({ svg: svgArr, fields: fieldsTmp })
          } else {
            alert('Ошибка. Поля не совпадают с заданными полями.')
            target.value = ''
          }
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

  function getFields(fieldsArr) {
    const filterMock = mockFields.filter((item) => {
      return fieldsArr.includes(patternField(item.tag))
    })

    const result = { ...state.fields }
    filterMock.forEach((item) => {
      result[item.tag] = item.mock
    })

    return result
  }

  const editHandle = (event) => {
    event.preventDefault()
    if (state.svg[0]) {
      handleFilesLoaded(state)
    }
  }
  const changeHandle = (event) => {
    event.preventDefault()
    const newSvg = [state.svg[1], state.svg[0]]
    const tmp = v1.value
    v1.value = v2.value
    v2.value = tmp
    setState({ ...state, svg: newSvg })
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
                ref={v1}
                accept=".svg"
                className="form-control"
                id="inputFile0"
                onChange={handleFileChange}
              />
              <div className="load-files-render">
                <RenderSvg svg={state.svg[0]} fields={state.fields} />
              </div>
            </div>
            <div className="col mb-3">
              <label htmlFor="inputFile1" className="form-label">
                Обратная сторона
              </label>
              <input
                type="file"
                ref={v2}
                accept=".svg"
                className="form-control"
                id="inputFile1"
                onChange={handleFileChange}
              />
              <div className="load-files-render">
                <RenderSvg svg={state.svg[1]} fields={state.fields} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="load-form-buttons">
              <button className="btn btn-primary m-3" onClick={editHandle}>
                Редактировать визитки
              </button>
              <button className="btn btn-primary m-3" onClick={changeHandle}>
                Поменять местами
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
