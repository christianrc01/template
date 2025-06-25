import type { Action } from "@reduxjs/toolkit";

export interface ApiCallPayload {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  data?: Record<string, unknown>;
  onSuccess: string;
  onError: string;
}

export interface ApiCallAction extends Action {
  type: "API_CALL";
  payload: ApiCallPayload;
}

export type AppAction = ApiCallAction | Action;
