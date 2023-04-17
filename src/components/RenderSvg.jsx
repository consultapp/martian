/*

Render SVG

*/

import renderFieldsToSvg from '@/utils/renderFieldsToSvg'
import { useMemo } from 'react'

export default function RenderSvg({ svg, fields, alt = 'vizitka svg' }) {
  const render = useMemo(() => {
    return (
      'data:image/svg+xml;charset=utf-8,' +
      encodeURIComponent(renderFieldsToSvg(svg, fields))
    )
  }, [svg, fields])

  return (
    <div className="svg_render">
      {render ? (
        <img
          src={render}
          width="100%"
          // height="150"
          alt={alt}
        />
      ) : (
        <div className="placeholder place-hold">placeholder</div>
      )}
    </div>
  )
}
