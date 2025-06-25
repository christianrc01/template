import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import apiMiddleware from "./middleware/apiMiddleware";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppMiddlewareAPI = {
  dispatch: AppDispatch;
  getState: () => RootState;
};
