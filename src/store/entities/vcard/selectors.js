import { LOADING_STATUS } from "@/constants/fixtures";
export const selectVcardModul = (state) => state.vcard;

export const selectVcardByIndex = (state, { vcardIndex }) =>
  selectVcardModul(state).svg[vcardIndex];

export const selectVcardSvgs = (state) => selectVcardModul(state).svg;

export const selectVcardFields = (state) => selectVcardModul(state).fields;

export const selectVcardLoadingStatus = (state) =>
  selectVcardModul(state).loadingStatus || [];

export const selectIsFirstVcardLoaded = (state) =>
  selectVcardLoadingStatus(state)[0] === LOADING_STATUS.fulfilled;

export const selectVcardEditMode = (state) =>
  selectIsFirstVcardLoaded(state) && selectVcardModul(state)?.editMode;

export const selectIsTwoSvgLoaded = (state) =>
  selectVcardLoadingStatus(state)[0] === LOADING_STATUS.fulfilled &&
  selectVcardLoadingStatus(state)[1] === LOADING_STATUS.fulfilled;

export const selectIsAnySvgLoaded = (state) =>
  selectVcardLoadingStatus(state)[0] === LOADING_STATUS.fulfilled ||
  selectVcardLoadingStatus(state)[1] === LOADING_STATUS.fulfilled;
