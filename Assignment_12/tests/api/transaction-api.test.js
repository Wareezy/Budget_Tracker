import request from "supertest";
import express from "express";
import transactionRoutes from "../../api/transaction-routes";

// Setup Express app with transaction routes
const app = express();
app.use(express.json());
app.use("/api/transactions", transactionRoutes);

describe("Transaction API Integration Tests", () => {
  it("should return an empty array initially", async () => {
    const res = await request(app).get("/api/transactions");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("should create a new transaction", async () => {
    const newTransaction = {
      transactionDetails: {
        transactionId: "t001",
        amount: 250.75
      }
    };

    const res = await request(app).post("/api/transactions").send(newTransaction);
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(newTransaction);
  });

  it("should fetch the transaction by ID", async () => {
    const res = await request(app).get("/api/transactions/t001");
    expect(res.statusCode).toBe(200);
    expect(res.body.transactionDetails.transactionId).toBe("t001");
  });

  it("should return 404 for non-existing transaction", async () => {
    const res = await request(app).get("/api/transactions/not-found");
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("error", "Transaction not found");
  });
});