import { UserRepository } from "../user-repository.js";

export class InMemoryUserRepository extends UserRepository {
  constructor() {
    super();
    this.storage = new Map();
  }

  save(user) {
    this.storage.set(user.userId, user);
  }

  findById(id) {
    return this.storage.has(id) ? this.storage.get(id) : null;
  }

  findAll() {
    return Array.from(this.storage.values());
  }

  delete(id) {
    this.storage.delete(id);
  }
}