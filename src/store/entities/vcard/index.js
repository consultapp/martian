import { LOADING_STATUS } from "@/constants/fixtures";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  svg: new Array(2),
  fields: [],
  loadingState: [LOADING_STATUS.idle, LOADING_STATUS.idle],
  goToEditVcard: false,
};

export const vcardSlice = createSlice({
  name: "vcard",
  initialState,
  reducers: {
    startLoading: (state, { payload }) => {
      state.loadingState[payload] = LOADING_STATUS.pending;
    },
    finishLoading: (state, { payload }) => {
      const { svg, index } = payload;

      state.svg[index] = svg;
      // state.fields= ???
      state.loadingState[index] = LOADING_STATUS.fulfilled;
    },
    failLoading: (state) => {
      state.isLoading = LOADING_STATUS.failed;
    },
    goToVcardEdit: (state) => {
      if (state.loadingState[0] === fulfilled) state.goToEditVcard = true;
    },
    clearVcards: (state) => {
      state = initialState;
    },
    switchVcards: (state) => {
      const tmpSvg = state.svg[0];
      const tmpFields = state.fields[0];
      state.svg[0] = state.svg[1];
      state.fields[0] = state.fields[1];
      state.svg[1] = tmpSvg;
      state.fields[1] = tmpFields;
    },
  },
});
