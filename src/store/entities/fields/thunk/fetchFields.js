import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectFieldIds } from "../selectors";
import { LOADING_STATUS } from "@/constants/fixtures";

export const fetchFields = createAsyncThunk(
  "field/fetchFields",
  async (_, { getState, rejectWithValue }) => {
    if (selectFieldIds(getState()).length) {
      rejectWithValue(LOADING_STATUS.earlyAdded);
    }

    const response = await fetch("/api/fields");
    return await response.json();
  }
);
