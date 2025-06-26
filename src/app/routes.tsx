import type { RouteObject } from "react-router-dom";
import Layout from "../shared/components/layout/Layout";
import NotFoundPage from "../shared/pages/NotFoundPage";
import HomePage from "../shared/pages/HomePage";
import UsersPage from "../features/users/pages/UsersPage";
import { ErrorBoundary } from "../shared/components/error/ErrorBoundary";

export const ROUTE_PATHS = {
  HOME: "/",
  USERS: "/users",
  PROFILE: "/profile",
  TERMS: "/terms",
  CONTACT: "/contact",
  PRIVACY: "/privacy",
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
  // Add more routes as needed
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
