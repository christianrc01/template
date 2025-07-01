import { apiClient } from "@/lib/api/apiClient";
import type { User } from "@/features/users/types/IUser";

class UserService {
  async getAll(): Promise<User[]> {
    const response = await apiClient.get<User[]>("/users");
    return response.data;
  }

  async getById(id: number): Promise<User> {
    const response = await apiClient.get<User>(`/users/${id}`);
    return response.data;
  }
}

export const userService = new UserService();

// Add more API calls as needed
