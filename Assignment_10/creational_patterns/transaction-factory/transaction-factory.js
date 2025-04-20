class Transaction {
    constructor(userId, amount, type, description, categoryId) {
      this.userId = userId;
      this.amount = amount;
      this.type = type;
      this.date = new Date();
      this.description = description;
      this.categoryId = categoryId;
      this.status = 'active';
    }
  }
  
  export class TransactionFactory {
    static createTransaction(type, userId, amount, description, categoryId) {
      if (type !== 'income' && type !== 'expense') {
        throw new Error("Invalid transaction type");
      }
      return new Transaction(userId, amount, type, description, categoryId);
    }
  }  