export class DatabaseConnection {
    constructor() {
      if (DatabaseConnection._instance) {
        return DatabaseConnection._instance;
      }
  
      this.connectionId = Math.random().toString(36).substring(2);
      DatabaseConnection._instance = this;
    }
  
    connect() {
      return `Connected to DB [Session ID: ${this.connectionId}]`;
    }
  }  