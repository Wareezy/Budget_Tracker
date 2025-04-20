export class BudgetTemplate {
    constructor(categoryId, limitAmount) {
      this.categoryId = categoryId;
      this.limitAmount = limitAmount;
      this.currentSpending = 0;
      this.status = 'active';
    }
  
    clone() {
      return new BudgetTemplate(this.categoryId, this.limitAmount);
    }
  }
  
  export class BudgetTemplateCache {
    constructor() {
      this.templates = new Map();
    }
  
    loadDefaults() {
      this.templates.set("groceries", new BudgetTemplate("groceries", 2000));
      this.templates.set("entertainment", new BudgetTemplate("entertainment", 1000));
    }
  
    getClonedBudget(category) {
      return this.templates.get(category)?.clone();
    }
  }  