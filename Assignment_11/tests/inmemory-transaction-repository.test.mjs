import { InMemoryTransactionRepository } from "../repositories/inmemory/inmemory-transaction-repository.js";
import { Transaction } from "../../Assignment_10/src/transaction.js";

test("CRUD operations for Transaction", () => {
  const repo = new InMemoryTransactionRepository();
  const transaction = new Transaction("t1", "u1", 500, "expense", new Date(), "Groceries", "c1");

  // Create/Save
  repo.save(transaction);
  expect(repo.findById("t1")).toBe(transaction);

  // Read All
  expect(repo.findAll()).toContain(transaction);

  // Delete
  repo.delete("t1");
  expect(repo.findById("t1")).toBeNull();
});