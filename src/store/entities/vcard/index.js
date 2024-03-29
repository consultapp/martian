import { LOADING_STATUS } from "@/constants/fixtures";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  svg: new Array(2),
  fields: {},
  loadingStatus: [LOADING_STATUS.idle, LOADING_STATUS.idle],
  editMode: false,
};

export const vcardSlice = createSlice({
  name: "vcard",
  initialState,
  reducers: {
    startLoading: (state, { payload }) => {
      state.loadingStatus[payload] = LOADING_STATUS.pending;
    },
    finishLoading: (state, { payload }) => {
      const { svg, fields, index } = payload;

      state.svg[index] = svg;
      Object.entries(fields).forEach(([key, value]) => {
        if (!state.fields[key]) state.fields[key] = value;
      });
      state.loadingStatus[index] = LOADING_STATUS.fulfilled;
    },
    failLoading: (state) => {
      state.isLoading = LOADING_STATUS.failed;
    },
    enableEditMode: (state) => {
      if (state.loadingStatus[0] === LOADING_STATUS.fulfilled)
        state.editMode = true;
    },
    clearVcards: (_) => {
      return initialState;
    },
    switchVcards: (state) => {
      state.svg.reverse();
      state.loadingStatus.reverse();
    },
    updateFields: (state, { payload }) => {
      state.fields[payload.name] = payload.value;
    },
  },
});
