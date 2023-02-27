import React, { useState } from 'react'
import EditSvg from './EditSvg'
import LoadSvgFiles from './LoadSvgFiles'

const startState = { svg: [null, null], fields: {} }

function Martian() {
  const [state, setState] = useState(startState)

  const handleFilesLoaded = (result) => {
    setState(result)
  }

  const handleRefresh = () => {
    setState(startState)
  }

  const steps = [
    <LoadSvgFiles handleFilesLoaded={handleFilesLoaded} key="LoadSvgFiles" />,
    <EditSvg
      svg={state.svg}
      startFields={state.fields}
      handleRefresh={handleRefresh}
      key="EditSvg"
    />,
  ]

  const content = state.svg[0] ? steps[1] : steps[0]

  return (
    <div className="container-sm main">
      {content}
      <div className="row">
        <p>
          <a href="/static/v2_front.svg" download="v2_front.svg">
            Фронт шаблон
          </a>
        </p>
        <p>
          <a href="/static/v2_rev.svg" download="v2_rev.svg">
            Обратн. шаблон
          </a>
        </p>
        <p>Шаблон, который ищется в файлах: __FIELD_tag__</p>
        <p>Например: __FIELD_NAME__, __FIELD_PHONE__ и тд</p>
      </div>
    </div>
  )
}

export default Martian
