import { InMemoryBudgetRepository } from "../repositories/inmemory/inmemory-budget-repository.js";
import { Budget } from "../../Assignment_10/src/budget.js";

test("CRUD operations for Budget", () => {
  const repo = new InMemoryBudgetRepository();
  const budget = new Budget("b1", "u1", "c1", 1000);

  // Create/Save
  repo.save(budget);
  expect(repo.findById("b1")).toBe(budget);

  // Read All
  expect(repo.findAll()).toContain(budget);

  // Delete
  repo.delete("b1");
  expect(repo.findById("b1")).toBeNull();
});