import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import RenderSvg from './RenderSvg'
import renderFieldsToSvg from '@/utils/renderFieldsToSvg'
import Fields from './Fields/Fields'
import Form from './Form.jsx/Form'

const API_URL_PDF = '/api/getPdf/'

const EditSvg = ({ svg, startFields, handleRefresh }) => {
  const [fields, setFields] = useState(startFields)
  const [download, setDownload] = useState(['', ''])
  const [isLoading, setLoading] = useState(false)

  function updateFields({ target }) {
    const tmpFields = { ...fields }
    tmpFields[target.name] = target.value
    setFields(tmpFields)
  }

  async function makePdfFile() {
    const side = ['front', 'reverse']
    const arr = download
    try {
      const promises = []
      svg.forEach((item, i) => [
        promises.push(
          axios.post(
            `${API_URL_PDF}${side[i]}`,
            renderFieldsToSvg(item, fields),
            {
              headers: {
                'Content-Type': 'image/svg+xml',
              },
            }
          )
        ),
      ])
      const result = await Promise.all(promises)

      result.forEach(({ data }, i) => {
        const { resultName } = data
        arr[i] = (
          <a
            href={resultName}
            className="btn btn-primary m-2"
            download={`vizitka_${side[i]}.pdf`}
            key={resultName}
          >
            Скачать {side[i]}
          </a>
        )
      })
      console.log(result)
    } catch (event) {
      console.error(`Axios: ${event.message}`)
    }
    setLoading(false)
    setDownload(arr)
  }

  function handleMakePdf(event) {
    event.preventDefault()
    setDownload(['', ''])
    setLoading(true)
    makePdfFile()
  }

  console.log(download)
  return (
    <>
      <div className="row">
        <h1>Редактирование шаблонов</h1>
      </div>
      <div className="row">
        {svg.map((item, i) => {
          return item ? (
            <div className="col" key={i}>
              <RenderSvg svg={item} fields={fields} alt={`Svg${i}`} />
            </div>
          ) : (
            <div className="col">Нет второго шаблона</div>
          )
        })}
      </div>
      <Form
        fields={fields}
        setFields={setFields}
        handleMakePdf={handleMakePdf}
        download={download}
        isLoading={isLoading}
      />
    </>
  )
}

export default EditSvg

// axios
// .post(`${API_URL_PDF}${side[id]}`, renderFieldsToSvg(svg[id], fields), {
//   headers: {
//     'Content-Type': 'image/svg+xml',
//   },
// })
// .then(({ data }) => {
//   const { resultName } = data
//   const arr = download
//   arr[id] = (
//     <a
//       href={resultName}
//       className="btn btn-primary m-2"
//       ref={saveRef}
//       download={`vizitka_${side[id]}.pdf`}
//       key={resultName}
//     >
//       Скачать {side[id]}
//     </a>
//   )
//   setDownload(arr)
//   setLoading(false)
// })
// .catch((error) => {
//   console.error(error)
// })
