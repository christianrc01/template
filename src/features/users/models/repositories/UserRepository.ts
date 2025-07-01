import { userService } from "@/features/users/models/services/userService";
import type { User } from "@/features/users/types/IUser";

class UserRepository {
  async fetchAll(): Promise<User[]> {
    return userService.getAll();
  }

  async fetchById(id: number): Promise<User> {
    return userService.getById(id);
  }
}

export const userRepository = new UserRepository();
