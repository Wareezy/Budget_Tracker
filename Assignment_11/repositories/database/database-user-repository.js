import { UserRepository } from "../user-repository.js";

export class DatabaseUserRepository extends UserRepository {
  constructor(dbConnection) {
    super();
    this.dbConnection = dbConnection; // Placeholder for a real database connection
  }

  save(user) {
    throw new Error("Database save() not implemented yet.");
  }

  findById(id) {
    throw new Error("Database findById() not implemented yet.");
  }

  findAll() {
    throw new Error("Database findAll() not implemented yet.");
  }

  delete(id) {
    throw new Error("Database delete() not implemented yet.");
  }
}