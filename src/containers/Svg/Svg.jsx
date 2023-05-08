/*

Render SVG

*/

import SvgComponent from "@/components/Svg/Svg";
import { renderFieldsToSvg } from "@/utils/functions";
import { useMemo } from "react";

export default function SvgContainer({ svg, fields, alt = "vizitka svg" }) {
  const render = useMemo(() => {
    return (
      "data:image/svg+xml;charset=utf-8," +
      encodeURIComponent(renderFieldsToSvg(svg, fields))
    );
  }, [svg, fields]);

  return <SvgComponent svg={render} />;
}
