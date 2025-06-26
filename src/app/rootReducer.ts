import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "../features/users/slices/usersSlice";

const rootReducer = combineReducers({
  users: usersReducer,
  // Other reducers
});

export default rootReducer;
