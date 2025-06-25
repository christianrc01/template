import type { ProxyOptions } from "vite";
import { USERS_ENDPOINTS } from "../../features/users/services/usersService";

const userProxyRules = Object.entries(USERS_ENDPOINTS).reduce(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (acc, [_, { path, target }]) => {
    acc[path] = {
      target,
      changeOrigin: true,
      rewrite: (path: string) => path.replace(new RegExp(`^${path}`), ""),
    } satisfies ProxyOptions;
    return acc;
  },
  {} as Record<string, ProxyOptions>
);

// Other proxies (explicit typing)
const OTHER_PROXIES: Record<string, ProxyOptions> = {
  "/postSentryLogs": {
    target: "https://sentry.io",
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^\/postSentryLogs/, ""),
    configure: (proxy) => {
      proxy.on("proxyReq", (proxyReq) => {
        proxyReq.setHeader("Content-Type", "application/x-sentry-envelope");
      });
    },
  },
};

export default {
  ...userProxyRules,
  ...OTHER_PROXIES,
} satisfies Record<string, ProxyOptions>;
