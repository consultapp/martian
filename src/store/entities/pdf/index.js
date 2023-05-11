import { LOADING_STATUS } from "@/constants/fixtures";
import { createSlice } from "@reduxjs/toolkit";
import { fetchPdf } from "./thunk/fetchPdf";

const initialState = { links: Array(2), loadingStatus: LOADING_STATUS.idle };

export const pdfSlice = createSlice({
  name: "pdf",
  initialState,
  extraReducers: {
    [fetchPdf.pending]: (state) => {
      state.loadingStatus = LOADING_STATUS.pending;
    },
    [fetchPdf.fulfilled]: (state, { payload }) => {
      state.loadingStatus = LOADING_STATUS.fulfilled;
      state.links = payload;
    },

    [fetchPdf.rejected]: (state, { payload }) => {
      state.loadingStatus =
        payload === LOADING_STATUS.earlyAdded
          ? LOADING_STATUS.finished
          : LOADING_STATUS.failed;
    },
  },
});
