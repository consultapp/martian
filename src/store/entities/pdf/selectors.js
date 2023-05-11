import { LOADING_STATUS } from "@/constants/fixtures";

export const selectPdfModul = (state) => state.pdf;

export const selectPdfLinkByIndex = (state, { index }) =>
  selectPdfModul(state).links[index];

export const selectPdfLinks = (state) => selectPdfModul(state).links;

export const selectPdfLoadingStatus = (state) =>
  selectPdfModul(state).loadingStatus;

export const selectIsPdfLoading = (state) =>
  selectPdfLoadingStatus(state) === LOADING_STATUS.pending;
