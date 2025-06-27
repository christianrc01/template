import type { Middleware } from "@reduxjs/toolkit";
import type {
  ApiCallAction,
  AppAction,
} from "../../shared/interfaces/IMiddleware";
import axios from "axios";
import getAccessToken from "../../shared/services/authService";

function apiMiddleware(): Middleware {
  return function (store) {
    return function (next) {
      return async function (action: unknown) {
        if (
          typeof action !== "object" ||
          action === null ||
          !("type" in action)
        ) {
          return next(action);
        }

        const appAction = action as AppAction;
        if (appAction.type !== "API_CALL") {
          return next(appAction);
        }

        const apiAction = action as ApiCallAction;
        const { url, method, data, onStart, onSuccess, onError } =
          apiAction.payload;
        const token = await getAccessToken();

        if (!token) {
          store.dispatch({
            type: onError,
            payload: "No authentication token available",
          });
          return;
        }

        if (onStart) {
          store.dispatch({ type: onStart });
        }

        try {
          const response = await axios({
            url,
            method,
            data,
            headers: {
              Authorization: `Bearer ${token}`,
            },
            // You can add additional axios config here if needed
          });

          store.dispatch({
            type: onSuccess,
            payload: response.data,
          });
        } catch (error) {
          let errorMessage = "Unknown error";

          if (axios.isAxiosError(error)) {
            // Handle Axios-specific error
            errorMessage = error.response?.data?.message || error.message;
          } else if (typeof error === "string") {
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
    };
  };
}

export default apiMiddleware;
