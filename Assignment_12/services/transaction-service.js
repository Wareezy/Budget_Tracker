export class TransactionService {
  constructor(transactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  createTransaction(transaction) {
    if (!transaction || !transaction.transactionDetails || !transaction.transactionDetails.transactionId) {
      throw new Error("Invalid transaction data");
    }

    const existing = this.transactionRepository.findById(transaction.transactionDetails.transactionId);
    if (existing) {
      throw new Error("Transaction already exists");
    }

    this.transactionRepository.save(transaction);
    return transaction;
  }

  getTransactionById(id) {
    const transaction = this.transactionRepository.findById(id);
    if (!transaction) throw new Error("Transaction not found");
    return transaction;
  }

  getAllTransactions() {
    return this.transactionRepository.findAll();
  }

  deleteTransaction(id) {
    this.transactionRepository.delete(id);
  }
}