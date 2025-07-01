import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/app/store/rootReducer";

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppMiddlewareAPI = {
  dispatch: AppDispatch;
  getState: () => RootState;
};
