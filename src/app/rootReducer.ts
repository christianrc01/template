import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/slices/authSlice";
import usersReducer from "../features/users/slices/usersSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  // Other reducers
});

export default rootReducer;
