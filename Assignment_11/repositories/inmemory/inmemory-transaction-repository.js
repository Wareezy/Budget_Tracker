import { TransactionRepository } from "../transaction-repository.js";

export class InMemoryTransactionRepository extends TransactionRepository {
  constructor() {
    super();
    this.storage = new Map();
  }

  save(transaction) {
    this.storage.set(transaction.transactionDetails.transactionId, transaction);
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