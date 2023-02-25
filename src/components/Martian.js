import React, { useState } from 'react'
import EditSvg from './EditSvg'
import LoadSvgFiles from './LoadSvgFiles'

function Martian() {
  const [svgs, setSvgs] = useState([])

  const handleFilesLoaded = (array) => {
    setSvgs(array)
  }

  const steps = [
    <LoadSvgFiles handleFilesLoaded={handleFilesLoaded} />,
    <EditSvg svgs={svgs} />,
  ]

  const content = svgs.length ? steps[1] : steps[0]

  return <main className="container-xl main">{content}</main>
}

export default Martian
