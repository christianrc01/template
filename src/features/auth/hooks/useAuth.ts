import { useEffect, useState } from "react";
import { authController } from "@/features/auth/controllers/authController";

export function useAuth() {
  const [state, setState] = useState(authController.getState());

  useEffect(() => {
    const unsubscribe = authController.subscribe(() => {
      setState(authController.getState());
    });

    if (!state.account && !state.loading) {
      authController.initialize();
    }

    return unsubscribe;
  }, []);

  return {
    ...state,
    isAuthenticated: !!state.account,
    login: authController.login.bind(authController),
    logout: authController.logout.bind(authController),
    getToken: authController.getToken.bind(authController),
  };
}
