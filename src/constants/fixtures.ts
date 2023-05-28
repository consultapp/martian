export const API_URL_PDF: string = "/api/getPdf/";
export const SIDE: string[] = ["front", "reverse"];

export enum LOADING_STATUSES {
  pending = "pending",
  failed = "failed",
  fulfilled = "fulfilled",
  idle = "idle",
  earlyAdded = "earlyAdded",
}

export const LOADING_STATUS = {
  pending: LOADING_STATUSES.pending,
  failed: LOADING_STATUSES.failed,
  fulfilled: LOADING_STATUSES.fulfilled,
  idle: LOADING_STATUSES.idle,
  earlyAdded: LOADING_STATUSES.earlyAdded,
};
