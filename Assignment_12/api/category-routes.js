import express from "express";
import { InMemoryCategoryRepository } from "../../Assignment_11/repositories/inmemory/inmemory-category-repository.js";
import { CategoryService } from "../services/category-service.js";

const router = express.Router();
const categoryService = new CategoryService(new InMemoryCategoryRepository());

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Budget categories
 */

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: List of categories
 */
router.get("/", (req, res) => {
    res.json(categoryService.getAllCategories());
});

/**
 * @swagger
 * /api/categories/{id}:
 *   get:
 *     summary: Get a category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Category found
 *       404:
 *         description: Category not found
 */
router.get("/:id", (req, res) => {
    try {
        const category = categoryService.getCategoryById(req.params.id);
        res.json(category);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryInfo:
 *                 type: object
 *                 required:
 *                   - categoryId
 *                 properties:
 *                   categoryId:
 *                     type: string
 *                   name:
 *                     type: string
 *     responses:
 *       201:
 *         description: Category created
 *       400:
 *         description: Validation error
 */
router.post("/", (req, res) => {
    try {
        const category = categoryService.createCategory(req.body);
        res.status(201).json(category);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

/**
 * @swagger
 * /api/categories/{id}:
 *   delete:
 *     summary: Delete a category
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Category deleted
 *       404:
 *         description: Category not found
 */
router.delete("/:id", (req, res) => {
    try {
        categoryService.deleteCategory(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

export default router;