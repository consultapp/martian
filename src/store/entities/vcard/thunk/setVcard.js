/*

setVcard

*/

import { getFields, getFieldsFromSvg } from "@/utils/functions";

export const setVcard =
  ({ file, index, fieldEntities }) =>
  (dispatch, getState) => {
    // const isUserLoaded = selectIsUserAlreadyLoaded(getState());
    // if (isUserLoaded) return;

    dispatch(vcardSlice.actions.startLoading(index));

    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function () {
      const svg = reader.result;

      const fieldsArr = getFieldsFromSvg(reader.result);
      // fieldsArr.filter((field) => {
      //   const str = field.replace('__FIELD_', '').replace('__', '')
      //   return Object.hasOwn(fields, str)
      // })

      if (fieldsArr) {
        const fieldsTmp = getFields(fieldsArr);
        if (fieldsTmp) {
          dispatch(vcardSlice.actions.finishLoading({ svg, index }));
        } else {
          dispatch(vcardSlice.actions.failLoading(index));
        }
      } else {
        dispatch(vcardSlice.actions.failLoading(index));
      }
    };

    reader.onerror = function () {
      dispatch(vcardSlice.actions.failLoading(index));
    };
  };
