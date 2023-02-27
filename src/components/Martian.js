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

  return <main className="container-sm main">{content}</main>
}

export default Martian
