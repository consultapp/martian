/*

Render SVG

*/

import SvgComponent from "@/components/Svg/Svg";
import { selectVcardByIndex } from "@/store/entities/vcard/selectors";
import { selectVcardFields } from "@/store/entities/vcard/selectors";
import { renderFieldsToSvg } from "@/utils/functions";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export default function SvgContainer({ index }) {
  const svg = useSelector((state) =>
    selectVcardByIndex(state, { vcardIndex: index })
  );
  const fields = useSelector(selectVcardFields);

  const render = useMemo(() => {
    return (
      "data:image/svg+xml;charset=utf-8," +
      encodeURIComponent(renderFieldsToSvg(svg, fields))
    );
  }, [svg, fields]);

  if (!svg) {
    return <div className="col">Нет загруженного шаблона</div>;
  }

  return <SvgComponent svg={render} />;
}
