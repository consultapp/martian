import { useEffect } from 'react'

/*

Render SVG

*/
export default function RenderSvg({ svg, fields = null, alt = 'vizitka svg' }) {
  function makeSvgSrc(svg) {
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg)
  }

  let render = svg
  if (svg && fields) {
    render = Object.entries(fields).reduce((accum, [key, value]) => {
      return accum.replace(`FIELD_${key.toUpperCase()}`, value)
    }, svg)
  }

  return (
    <div className="svg_render">
      {render ? (
        <img
          src={makeSvgSrc(render)}
          width="100%"
          // height="150"
          alt={alt}
        />
      ) : (
        <div
          className="placeholder"
          style={{ width: '100%', minHeight: '350px' }}
        >
          placeholder
        </div>
      )}
    </div>
  )
}
