import { InMemoryRecurringTransactionRepository } from "../repositories/inmemory/inmemory-recurring-transaction-repository.js";
import { RecurringTransaction } from "../../Assignment_10/src/recurringTransaction.js";

test("CRUD operations for Recurring Transaction", () => {
  const repo = new InMemoryRecurringTransactionRepository();
  const recurring = new RecurringTransaction("r1", "u1", 100, "monthly", new Date(), "c1");

  // Create/Save
  repo.save(recurring);
  expect(repo.findById("r1")).toBe(recurring);

  // Read All
  expect(repo.findAll()).toContain(recurring);

  // Delete
  repo.delete("r1");
  expect(repo.findById("r1")).toBeNull();
});