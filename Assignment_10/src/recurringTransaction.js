export class RecurringTransaction {
    #recurringId;
    #userId;
    #amount;
    #frequency;
    #nextDueDate;
    #categoryId;
    #status;
  
    constructor(recurringId, userId, amount, frequency, nextDueDate, categoryId, status = 'active') {
      this.#recurringId = recurringId;
      this.#userId = userId;
      this.#amount = amount;
      this.#frequency = frequency;
      this.#nextDueDate = new Date(nextDueDate);
      this.#categoryId = categoryId;
      this.#status = status;
    }
  
    schedule() {
      this.#status = 'scheduled';
    }
  
    cancel() {
      this.#status = 'cancelled';
    }
  
    regenerate() {
      const today = new Date();
      if (today >= this.#nextDueDate) {
        // Regenerate logic (basic)
        this.#nextDueDate.setDate(this.#nextDueDate.getDate() + this.#getFrequencyInDays());
        return 'Transaction regenerated';
      }
      return 'Not due yet';
    }
  
    #getFrequencyInDays() {
      switch (this.#frequency.toLowerCase()) {
        case 'weekly': return 7;
        case 'monthly': return 30;
        case 'yearly': return 365;
        default: return 0;
      }
    }
  }  