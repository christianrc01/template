import type { ProxyOptions } from "vite";
import { API_ENDPOINTS } from "../../lib/api/endpoints";

function getProxyRules(baseURL: string): Record<string, ProxyOptions> {
  return Object.values(API_ENDPOINTS).reduce((acc, endpoint) => {
    acc[endpoint.path] = {
      target: baseURL,
      changeOrigin: true,
      rewrite: (path: string) =>
        path.replace(new RegExp(`^${endpoint.path}`), endpoint.target),
      configure: (proxy) => {
        proxy.on("proxyReq", (req) => {
          console.log(`Proxying: ${req.path} -> ${baseURL}${endpoint.target}`);
        });
      },
    };
    return acc;
  }, {} as Record<string, ProxyOptions>);
}

export default getProxyRules;
