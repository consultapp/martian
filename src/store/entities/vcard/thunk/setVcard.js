import { getFieldsFromSvg, patternField } from "@/utils/functions";
import { vcardSlice } from "..";
import { selectFields } from "../../fields/selectors";

export const setVcard =
  ({ file, index }) =>
  (dispatch, getState) => {
    if (file) {
      const fieldsMock = selectFields(getState());
      dispatch(vcardSlice.actions.startLoading(index));

      const reader = new FileReader();
      reader.readAsText(file);

      reader.onload = function () {
        const svg = reader.result;

        const fieldsFromSvg = getFieldsFromSvg(svg);

        if (fieldsFromSvg) {
          const filterMock = fieldsMock.filter((item) => {
            return fieldsFromSvg.includes(patternField(item.tag));
          });

          const fields = {};
          filterMock.forEach((item) => {
            fields[item.tag] = item.mock;
          });
          if (fields) {
            dispatch(vcardSlice.actions.finishLoading({ svg, fields, index }));
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
    }
  };
