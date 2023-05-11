import { renderFieldsToSvg } from "@/utils/functions";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectVcardFields, selectVcardSvgs } from "../../vcard/selectors";
import { API_URL_PDF, LOADING_STATUS, SIDE } from "@/constants/fixtures";
import axios from "axios";

export const fetchPdf = createAsyncThunk(
  "pfd/fetchPdf",
  async (clearState = false, { getState, rejectWithValue }) => {
    const state = getState();

    if (clearState) return rejectWithValue([]);

    const svg = selectVcardSvgs(state);
    const fields = selectVcardFields(state);

    console.log("fetchPdf Start", svg);
    try {
      const promises = [];

      svg.forEach(
        (item, i) =>
          item &&
          promises.push(
            axios.post(
              `${API_URL_PDF}${SIDE[i]}`,
              renderFieldsToSvg(item, fields),
              {
                headers: {
                  "Content-Type": "image/svg+xml",
                },
              }
            )
          )
      );
      const result = await Promise.all(promises);
      return result.map((item) => {
        if (item.status !== 200)
          return rejectWithValue(`pfd/fetchPdf: ${item.status}`);
        return item?.data?.resultName;
      });
    } catch (event) {
      return rejectWithValue(`pfd/fetchPdf: ${event.message}`);
    }
  }
);
