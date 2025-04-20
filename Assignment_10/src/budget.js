export class Budget {
    #budgetId;
    #userId;
    #categoryId;
    #limitAmount;
    #currentSpending;
    #status;
  
    constructor(budgetId, userId, categoryId, limitAmount, currentSpending = 0, status = 'active') {
      this.#budgetId = budgetId;
      this.#userId = userId;
      this.#categoryId = categoryId;
      this.#limitAmount = limitAmount;
      this.#currentSpending = currentSpending;
      this.#status = status;
    }
  
    setLimit(amount) {
      this.#limitAmount = amount;
    }
  
    updateLimit(newLimit) {
      this.#limitAmount = newLimit;
    }
  
    monitorSpending(amount) {
      this.#currentSpending += amount;
      if (this.#currentSpending >= 0.8 * this.#limitAmount) {
        return 'Warning: Budget limit reaching 80%';
      }
      return 'Spending within budget';
    }
  
    archive() {
      this.#status = 'archived';
    }
  
    get budgetInfo() {
      return {
        budgetId: this.#budgetId,
        limitAmount: this.#limitAmount,
        currentSpending: this.#currentSpending,
        status: this.#status
      };
    }
  }