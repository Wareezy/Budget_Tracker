import { CategoryService } from "../../services/category-service.js";
import { InMemoryCategoryRepository } from "../../../Assignment_11/repositories/inmemory/inmemory-category-repository.js";

describe("CategoryService", () => {
    let categoryService;

    beforeEach(() => {
        categoryService = new CategoryService(new InMemoryCategoryRepository());
    });

    it("should create a new category", () => {
        const category = { categoryInfo: { categoryId: "c1", name: "Food" } };
        const result = categoryService.createCategory(category);
        expect(result).toEqual(category);
    });

    it("should not allow duplicate categories", () => {
        const category = { categoryInfo: { categoryId: "c1", name: "Food" } };
        categoryService.createCategory(category);
        expect(() => categoryService.createCategory(category)).toThrow("Category already exists");
    });

    it("should fetch category by ID", () => {
        const category = { categoryInfo: { categoryId: "c1", name: "Food" } };
        categoryService.createCategory(category);
        const result = categoryService.getCategoryById("c1");
        expect(result).toEqual(category);
    });

    it("should delete a category", () => {
        const category = { categoryInfo: { categoryId: "c1", name: "Food" } };
        categoryService.createCategory(category);
        categoryService.deleteCategory("c1");
        expect(() => categoryService.getCategoryById("c1")).toThrow("Category not found");
    });
});