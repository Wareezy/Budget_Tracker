import { InMemoryUserRepository } from "../repositories/inmemory/inmemory-user-repository.js";
import { User } from "../../Assignment_10/src/user.js";

test("CRUD operations for User", () => {
  const repo = new InMemoryUserRepository();
  const user = new User("u1", "test@example.com", "pass123", "John", "light", "USD");

  // Create/Save
  repo.save(user);
  expect(repo.findById("u1")).toBe(user);

  // Read All
  expect(repo.findAll()).toContain(user);

  // Delete
  repo.delete("u1");
  expect(repo.findById("u1")).toBeNull();
})