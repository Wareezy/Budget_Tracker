import { UserBuilder } from "../creational_patterns/builder/user-builder.js";

test("builds a user with optional fields", () => {
  const user = new UserBuilder("u1", "test@example.com", "hash123")
    .setName("John")
    .setTheme("dark")
    .build();
  expect(user.name).toBe("John");
  expect(user.theme).toBe("dark");
});

test("uses default values", () => {
  const user = new UserBuilder("u2", "test2@example.com", "hash456").build();
  expect(user.currencyPreference).toBe("USD");
});