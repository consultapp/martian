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
    <LoadSvgFiles handleFilesLoaded={handleFilesLoaded} />,
    <EditSvg
      svg={state.svg}
      startFields={state.fields}
      handleRefresh={handleRefresh}
    />,
  ]

  const content = state.svg[0] ? steps[1] : steps[0]

  return <main className="container-xl main">{content}</main>
}

export default Martian
