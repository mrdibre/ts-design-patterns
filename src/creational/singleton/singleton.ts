import { User } from "./interfaces";

class DatabaseSingleton {
  private static _instance?: DatabaseSingleton;
  private users: User[] = [];

  private constructor() {}

  static get instance() {
    if (!DatabaseSingleton._instance) {
      DatabaseSingleton._instance = new DatabaseSingleton();
    }

    return DatabaseSingleton._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

export { DatabaseSingleton };
