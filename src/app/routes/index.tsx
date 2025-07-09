import type { RouteObject } from "react-router-dom";
import NotFoundPage from "@/shared/views/pages/NotFoundPage";
import HomePage from "@/shared/views/pages/HomePage";
import UsersPage from "@/features/users/views/pages/UsersPage";
import Layout from "@/shared/views/layouts/Layout";
import { ErrorBoundary } from "@/shared/components/ErrorBoundary";
import UserProfilePage from "@/features/users/views/pages/UserProfilePage";
import IconPage from "@/shared/views/pages/IconPage";

export const ROUTE_PATHS = {
  HOME: "/",
  USERS: "/users",
  PROFILE: "/profile",
  TERMS: "/terms",
  CONTACT: "/contact",
  PRIVACY: "/privacy",
  USER: "/user/:id",
  ICON: "/icon",
  // Add more routes as needed
} as const;

export type RoutePaths = keyof typeof ROUTE_PATHS;

export const ROUTE_TITLES: Record<RoutePaths, string> = {
  HOME: "Home | Template app",
  USERS: "Users | Template app",
  PROFILE: "Profile | Template app",
  TERMS: "Terms and conditions | Template app",
  CONTACT: "Contact | Template app",
  PRIVACY: "Privacy Policy | Template app",
  USER: "User Profile | Template app",
  ICON: "Icon | Template app",
  // Add more titles as needed
} as const;

export const routes: RouteObject[] = [
  {
    path: ROUTE_PATHS.HOME,
    element: (
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTE_PATHS.USERS.substring(1),
        element: <UsersPage />,
      },
      {
        path: ROUTE_PATHS.USER.substring(1),
        element: <UserProfilePage />,
      },
      {
        path: ROUTE_PATHS.ICON.substring(1),
        element: <IconPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export const getRoutePath = (routeName: RoutePaths): string =>
  ROUTE_PATHS[routeName];

export const getTitleByPath = (path: string): string => {
  const routeKey = Object.entries(ROUTE_PATHS).find(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, routePath]) => routePath === path
  )?.[0] as RoutePaths | undefined;

  return routeKey ? ROUTE_TITLES[routeKey] : "Template app";
};
