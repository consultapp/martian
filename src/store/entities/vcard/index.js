import { LOADING_STATUS } from "@/constants/fixtures";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  svg: new Array(2),
  fields: {},
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
      const { svg, fields, index } = payload;

      state.svg[index] = svg;
      Object.entries(fields).forEach(([key, value]) => {
        if (!state.fields[key]) state.fields[key] = value;
      });
      state.loadingState[index] = LOADING_STATUS.fulfilled;
    },
    failLoading: (state) => {
      state.isLoading = LOADING_STATUS.failed;
    },
    goToVcardEdit: (state) => {
      if (state.loadingState[0] === LOADING_STATUS.fulfilled)
        state.goToEditVcard = true;
    },
    clearVcards: (state) => {
      state = initialState;
    },
    switchVcards: (state) => {
      state.svg.reverse();
      state.loadingState.reverse();
    },
  },
});
