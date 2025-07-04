import type { EndpointConfig } from "../../shared/types/IShared";

export const API_ENDPOINTS: Record<string, EndpointConfig> = {
  //#region
  getUsers: {
    path: "/api/users",
    target: "/users",
  },
  getUserById: {
    path: "/api/users/:id",
    target: "/users/:id",
  },
  //#endregion

  // Add more endpoints as needed
};
