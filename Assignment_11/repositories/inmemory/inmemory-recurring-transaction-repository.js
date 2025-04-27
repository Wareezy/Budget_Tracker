import { RecurringTransactionRepository } from "../recurring-transaction-repository.js";

export class InMemoryRecurringTransactionRepository extends RecurringTransactionRepository {
    constructor() {
        super();
        this.storage = new Map();
    }

    save(recurringTransaction) {
        this.storage.set(recurringTransaction.recurringId, recurringTransaction);
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
