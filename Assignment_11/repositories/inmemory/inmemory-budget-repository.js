import { BudgetRepository } from "../budget-repository.js";

export class InMemoryBudgetRepository extends BudgetRepository {
  constructor() {
    super();
    this.storage = new Map();
  }

  save(budget) {
    this.storage.set(budget.budgetInfo.budgetId, budget);
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