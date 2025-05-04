import request from "supertest";
import express from "express";
import userRoutes from "../../user-routes";

// Mock app setup
const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);

describe("User API Integration Tests", () => {
  it("should return an empty array initially", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("should create a new user", async () => {
    const newUser = {
      userId: "u123",
      email: "test@example.com",
    };

    const res = await request(app).post("/api/users").send(newUser);
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(newUser);
  });

  it("should get the created user by ID", async () => {
    const res = await request(app).get("/api/users/u123");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      userId: "u123",
      email: "test@example.com",
    });
  });

  it("should return 404 for non-existing user", async () => {
    const res = await request(app).get("/api/users/invalid-id");
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("error", "User not found");
  });
});