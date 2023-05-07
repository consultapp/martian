import { LOADING_STATUS } from "@/constants/fixtures";
import { fetchFields } from "./thunk/fetchFields";

const { createEntityAdapter, createSlice } = require("@reduxjs/toolkit");

const fieldEntityAdapter = createEntityAdapter();

export const fieldSlice = createSlice({
  name: "field",
  initialState: fieldEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUS.idle,
  }),
  extraReducers: {
    [fetchFields.pending]: (state) => {
      state.loadingStatus = LOADING_STATUS.pending;
    },
    [fetchFields.fulfilled]: (state, { payload }) => {
      state.loadingStatus = LOADING_STATUS.fulfilled;
      fieldEntityAdapter.setAll(state, payload);
    },

    [fetchFields.rejected]: (state, { payload }) => {
      state.loadingStatus =
        payload === LOADING_STATUS.earlyAdded
          ? LOADING_STATUS.finished
          : LOADING_STATUS.failed;
    },
  },
});
