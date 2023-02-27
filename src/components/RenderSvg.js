/*

Render SVG

*/

import renderFieldsToSvg from '@/utils/renderFieldsToSvg'

export default function RenderSvg({ svg, fields, alt = 'vizitka svg' }) {
  function makeSvgSrc(svg) {
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg)
  }

  const render = renderFieldsToSvg(svg, fields)

  return (
    <div className="svg_render" key={Date.now()}>
      {render ? (
        <img
          src={makeSvgSrc(render)}
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
