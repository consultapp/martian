/*



*/
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

export const getFields = (fieldsArr) => {
  const filterMock = fieldEntities.filter((item) => {
    return fieldsArr.includes(patternField(item.tag));
  });

  const result = { ...state.fields };
  filterMock.forEach((item) => {
    result[item.tag] = item.mock;
  });

  return result;
};
