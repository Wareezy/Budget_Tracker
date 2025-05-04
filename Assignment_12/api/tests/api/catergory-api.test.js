import request from "supertest";
import express from "express";
import categoryRoutes from "../../category-routes";

// Setup Express app with category routes
const app = express();
app.use(express.json());
app.use("/api/categories", categoryRoutes);

describe("Category API Integration Tests", () => {
  it("should return an empty array initially", async () => {
    const res = await request(app).get("/api/categories");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("should create a new category", async () => {
    const newCategory = {
      categoryInfo: {
        categoryId: "c101",
        name: "Food"
      }
    };

    const res = await request(app).post("/api/categories").send(newCategory);
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(newCategory);
  });

  it("should fetch the category by ID", async () => {
    const res = await request(app).get("/api/categories/c101");
    expect(res.statusCode).toBe(200);
    expect(res.body.categoryInfo.categoryId).toBe("c101");
  });

  it("should return 404 for non-existing category", async () => {
    const res = await request(app).get("/api/categories/invalid-id");
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("error", "Category not found");
  });
});