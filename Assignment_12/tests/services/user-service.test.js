import { UserService } from "../../services/user-service.js";
import { InMemoryUserRepository } from "../../../Assignment_11/repositories/inmemory/inmemory-user-repository.js";

describe("UserService", () => {
  let userService;

  beforeEach(() => {
    userService = new UserService(new InMemoryUserRepository());
  });

  it("should register a new user", () => {
    const user = { userId: "u1", email: "test@example.com" };
    const result = userService.registerUser(user);
    expect(result).toEqual(user);
  });

  it("should throw error for duplicate user", () => {
    const user = { userId: "u1", email: "test@example.com" };
    userService.registerUser(user);
    expect(() => userService.registerUser(user)).toThrow("User already exists");
  });

  it("should fetch user by ID", () => {
    const user = { userId: "u1", email: "test@example.com" };
    userService.registerUser(user);
    const result = userService.getUserById("u1");
    expect(result).toEqual(user);
  });

  it("should delete a user", () => {
    const user = { userId: "u1", email: "test@example.com" };
    userService.registerUser(user);
    userService.deleteUser("u1");
    expect(() => userService.getUserById("u1")).toThrow("User not found");
  });
});