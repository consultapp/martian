export const patternField = (tag) => {
  return `__FIELD_${tag}__`;
};

export const unicFields = (arr) => {
  if (arr)
    return arr.reduce((accum, item) => {
      if (!accum.includes(item)) accum.push(item);
      return accum;
    }, []);
};

export const getFieldsFromSvg = (str) => {
  const regexp = new RegExp(patternField("\\w+"), "gmi");
  return unicFields(str.match(regexp));
};

export const renderFieldsToSvg = (svg, fields) => {
  let result = svg;
  if (svg && fields) {
    result = Object.entries(fields).reduce((accum, [key, value]) => {
      return accum.replace(patternField(key.toUpperCase()), value);
    }, svg);
  }
  return result;
};
