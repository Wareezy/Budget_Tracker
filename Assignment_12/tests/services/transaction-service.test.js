import { TransactionService } from "../services/transaction-service.js";
import { InMemoryTransactionRepository } from "../../repositories/inmemory/inmemory-transaction-repository.js";

describe("TransactionService", () => {
  let transactionService;

  beforeEach(() => {
    transactionService = new TransactionService(new InMemoryTransactionRepository());
  });

  it("should create a new transaction", () => {
    const tx = { transactionDetails: { transactionId: "t1", amount: 100 } };
    const result = transactionService.createTransaction(tx);
    expect(result).toEqual(tx);
  });

  it("should not allow duplicate transactions", () => {
    const tx = { transactionDetails: { transactionId: "t1", amount: 100 } };
    transactionService.createTransaction(tx);
    expect(() => transactionService.createTransaction(tx)).toThrow("Transaction already exists");
  });

  it("should fetch transaction by ID", () => {
    const tx = { transactionDetails: { transactionId: "t1", amount: 100 } };
    transactionService.createTransaction(tx);
    const result = transactionService.getTransactionById("t1");
    expect(result).toEqual(tx);
  });

  it("should delete a transaction", () => {
    const tx = { transactionDetails: { transactionId: "t1", amount: 100 } };
    transactionService.createTransaction(tx);
    transactionService.deleteTransaction("t1");
    expect(() => transactionService.getTransactionById("t1")).toThrow("Transaction not found");
  });
});
