export const patternField = (tag: string): string => {
  return `__FIELD_${tag}__`;
};

export const unicFields = (
  arr: RegExpMatchArray | null
): string[] | undefined => {
  if (arr) {
    return arr.reduce((accum: string[], item: string) => {
      if (!accum.includes(item)) accum.push(item);
      return accum;
    }, []);
  }
  return;
};

export const getFieldsFromSvg = (str: string): string[] | undefined => {
  const regexp = new RegExp(patternField("\\w+"), "gmi");
  const matches = str.match(regexp);
  return unicFields(matches);
};

export const renderFieldsToSvg = (svg: string, fields: object): string => {
  let result = svg;
  if (svg && fields) {
    result = Object.entries(fields).reduce((accum, [key, value]) => {
      return accum.replace(patternField(key.toUpperCase()), value);
    }, svg);
  }
  return result;
};
