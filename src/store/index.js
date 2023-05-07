import { combineReducers } from "redux";
import { fieldSlice } from "./entities/fields";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  field: fieldSlice.reducer,
});

export const store = configureStore({ reducer: rootReducer });
