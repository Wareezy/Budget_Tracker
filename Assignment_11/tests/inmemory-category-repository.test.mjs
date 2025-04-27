import { InMemoryCategoryRepository } from "../repositories/inmemory/inmemory-category-repository.js";
import { Category } from "../../Assignment_10/src/category.js";

test("CRUD operations for Category", () => {
  const repo = new InMemoryCategoryRepository();
  const category = new Category("c1", "u1", "Groceries");

  // Create/Save
  repo.save(category);
  expect(repo.findById("c1")).toBe(category);

  // Read All
  expect(repo.findAll()).toContain(category);

  // Delete
  repo.delete("c1");
  expect(repo.findById("c1")).toBeNull();
});