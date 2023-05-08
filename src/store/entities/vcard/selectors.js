import { LOADING_STATUS } from "@/constants/fixtures";

export const selectVcardModul = (state) => state.field;

export const selectVcardByIndex = (state, { vcardIndex }) =>
  selectVcardModul(state).svg[vcardIndex];

export const selectFieldLoadingStatus = (state) =>
  selectVcardModul(state).loadingStatus;

export const selectIsFirstVcardLoaded = (state) =>
  selectFieldLoadingStatus(state)[0] === LOADING_STATUS.fulfilled;
