import getAccessToken from "@/features/auth/services/authService";
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
      const token = await getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      if (error.response) {
        return Promise.reject({
          message:
            (error.response.data as { message?: string })?.message ||
            "Error in the request",
          status: error.response.status,
          data: error.response.data,
        });
      }
      return Promise.reject(error);
    }
  );

  return instance;
}

export const apiClient = createApiClient();
