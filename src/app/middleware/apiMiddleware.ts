import type { Middleware } from "@reduxjs/toolkit";
import type { ApiCallAction, AppAction } from "../../shared/types/IMiddleware";

const apiMiddleware: Middleware =
  (store) => (next) => async (action: unknown) => {
    if (typeof action !== "object" || action === null || !("type" in action)) {
      return next(action);
    }

    const appAction = action as AppAction;
    if (appAction.type !== "API_CALL") {
      return next(appAction);
    }

    const apiAction = action as ApiCallAction;
    const { url, method, data, onSuccess, onError } = apiAction.payload;

    try {
      const response = await fetch(url, {
        method,
        body: data ? JSON.stringify(data) : undefined,
      });
      const responseData = await response.json();

      store.dispatch({
        type: onSuccess,
        payload: responseData,
      });
    } catch (error) {
      let errorMessage = "Unknown error";

      if (typeof error === "string") {
        errorMessage = error;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      } else if (error && typeof error === "object" && "message" in error) {
        errorMessage = String(error.message);
      }

      store.dispatch({
        type: onError,
        payload: errorMessage,
      });
    }
  };

export default apiMiddleware;
