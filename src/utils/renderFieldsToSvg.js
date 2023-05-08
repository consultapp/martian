import patternField from "@/utils/functions";

export default function renderFieldsToSvg(svg, fields) {
  let result = svg;
  if (svg && fields) {
    result = Object.entries(fields).reduce((accum, [key, value]) => {
      return accum.replace(patternField(key.toUpperCase()), value);
    }, svg);
  }
  return result;
}
