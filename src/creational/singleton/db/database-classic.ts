class DatabaseClassic {
  private static _instance?: DatabaseClassic;

  private constructor() {}

  static getInstance() {
    if (!DatabaseClassic._instance) {
      DatabaseClassic._instance = new DatabaseClassic();
    }

    return DatabaseClassic._instance;
  }
}

export { DatabaseClassic };
