import { DatabaseConnection } from "../creational_patterns/singleton/db-singleton.js";

test("returns same instance", () => {
  const a = new DatabaseConnection();
  const b = new DatabaseConnection();
  expect(a).toBe(b);
  expect(a.connectionId).toBe(b.connectionId);
});