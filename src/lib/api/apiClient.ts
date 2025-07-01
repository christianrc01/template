import { authController } from "@/features/auth/controllers/authController";
import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

function createApiClient(): AxiosInstance {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_ROOT_BASE_URL,
    timeout: 10000,
  });

  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      const token = await authController.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      if (error.response) {
        const { status, data } = error.response;

        if (status === 401) {
          window.location.href = "/";
        }

        return Promise.reject({
          message:
            (data as { message?: string })?.message || "Error in the request",
          status,
          data,
        });
      }

      return Promise.reject(error);
    }
  );

  return instance;
}

export const apiClient = createApiClient();
