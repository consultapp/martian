import { LOADING_STATUS } from "@/constants/fixtures";

export const selectFieldModul = (state) => state.field;

export const selectFieldIds = (state) => selectFieldModul(state).ids;

export const selectFieldLoadingStatus = (state) =>
  selectFieldModul(state).loadingStatus;

export const selectIsFieldLoading = (state) =>
  selectFieldLoadingStatus(state) === LOADING_STATUS.inProgress;
