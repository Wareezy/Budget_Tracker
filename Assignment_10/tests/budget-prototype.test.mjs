import { BudgetTemplateCache } from "../creational_patterns/prototype/budget-prototype.js";

test("clones a predefined budget template", () => {
  const cache = new BudgetTemplateCache();
  cache.loadDefaults();
  const clone = cache.getClonedBudget("groceries");
  expect(clone.limitAmount).toBe(2000);
});