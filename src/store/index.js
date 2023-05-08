import { combineReducers } from "redux";
import { fieldSlice } from "./entities/fields";
import { configureStore } from "@reduxjs/toolkit";
import { vcardSlice } from "./entities/vcard";

const rootReducer = combineReducers({
  field: fieldSlice.reducer,
  vcard: vcardSlice.reducer,
});

export const store = configureStore({ reducer: rootReducer });
