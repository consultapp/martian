import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPdf = createAsyncThunk(
  "pfd/fetchPdf",
  async (_, { getState, rejectWithValue }) => {
    if (selectFieldIds(getState()).length) {
      rejectWithValue(LOADING_STATUS.earlyAdded);
    }

    const response = await fetch("/api/fields");
    return await response.json();
  }
);
