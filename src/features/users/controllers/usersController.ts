import type { User } from "@/features/users/types/IUser";
import { userService } from "@/features/users/models/services/userService";

class UsersController {
  private users: User[] = [];
  private currentUser: User | null = null;
  private loading = false;
  private error: Error | null = null;
  private subscribers: Array<() => void> = [];

  constructor() {}

  subscribe(callback: () => void) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter((sub) => sub !== callback);
    };
  }

  private notify() {
    this.subscribers.forEach((callback) => callback());
  }

  getState() {
    return {
      users: this.users,
      currentUser: this.currentUser,
      loading: this.loading,
      error: this.error,
    };
  }

  async loadUsers() {
    this.loading = true;
    this.error = null;
    this.notify();

    try {
      this.users = await userService.getAll();
    } catch (err) {
      this.error =
        err instanceof Error ? err : new Error("Failed to load users");
    } finally {
      this.loading = false;
      this.notify();
    }
  }

  async loadCurrentUser(id: number) {
    this.loading = true;
    this.error = null;
    this.notify();

    try {
      const user = await userService.getById(id);
      this.currentUser = user;

      const index = this.users.findIndex((u) => u.id === id);
      if (index === -1) {
        this.users.push(user);
      } else {
        this.users[index] = user;
      }
    } catch (err) {
      this.error =
        err instanceof Error ? err : new Error("Failed to load user");
      this.currentUser = null;
    } finally {
      this.loading = false;
      this.notify();
    }
  }

  clearCurrentUser() {
    this.currentUser = null;
    this.notify();
  }

  async refresh() {
    await this.loadUsers();
  }
}

export const usersController = new UsersController();
