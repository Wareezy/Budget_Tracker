import { TransactionFactory } from "../creational_patterns/simple-factory/transaction-factory.js";

test("creates an income transaction", () => {
  const tx = TransactionFactory.createTransaction("income", 1, 1000, "Salary", "cat123");
  expect(tx.type).toBe("income");
  expect(tx.amount).toBe(1000);
});

test("throws error for invalid type", () => {
  expect(() => {
    TransactionFactory.createTransaction("invalid", 1, 100, "test", "cat001");
  }).toThrow("Invalid transaction type");
});
