export class Transaction {
    #transactionId;
    #userId;
    #amount;
    #type;
    #date;
    #description;
    #categoryId;
    #status;
  
    constructor(transactionId, userId, amount, type, date, description, categoryId, status = 'active') {
      this.#transactionId = transactionId;
      this.#userId = userId;
      this.#amount = amount;
      this.#type = type;
      this.#date = new Date(date);
      this.#description = description;
      this.#categoryId = categoryId;
      this.#status = status;
    }
  
    create() {
      this.#status = 'active';
    }
  
    edit(data) {
      Object.assign(this, data);
    }
  
    delete() {
      this.#status = 'deleted';
    }
  
    assignCategory(categoryId) {
      this.#categoryId = categoryId;
    }
  
    get transactionDetails() {
      return {
        transactionId: this.#transactionId,
        amount: this.#amount,
        type: this.#type,
        date: this.#date,
        categoryId: this.#categoryId,
        status: this.#status
      };
    }
  }  