import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "@/features/users/models/slices/usersSlice";
import authReducer from "@/features/auth/models/slices/authSlice";

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
  // Other reducers
});

export default rootReducer;
