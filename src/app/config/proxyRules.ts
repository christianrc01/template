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

export default {
  ...userProxyRules,
} satisfies Record<string, ProxyOptions>;
