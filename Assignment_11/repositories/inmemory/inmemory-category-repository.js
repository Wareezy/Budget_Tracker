import { CategoryRepository } from "../category-repository.js";

export class InMemoryCategoryRepository extends CategoryRepository {
  constructor() {
    super();
    this.storage = new Map();
  }

  save(category) {
    this.storage.set(category.categoryInfo.categoryId, category);
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