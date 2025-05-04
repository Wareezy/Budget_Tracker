import express from "express";
import { InMemoryTransactionRepository } from "../../Assignment_11/repositories/inmemory/inmemory-transaction-repository.js";
import { TransactionService } from "../services/transaction-service.js";

const router = express.Router();
const transactionService = new TransactionService(new InMemoryTransactionRepository());

/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: Financial transactions
 */

/**
 * @swagger
 * /api/transactions:
 *   get:
 *     summary: Get all transactions
 *     tags: [Transactions]
 *     responses:
 *       200:
 *         description: List of transactions
 */
router.get("/", (req, res) => {
  res.json(transactionService.getAllTransactions());
});

/**
 * @swagger
 * /api/transactions/{id}:
 *   get:
 *     summary: Get a transaction by ID
 *     tags: [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Transaction found
 *       404:
 *         description: Transaction not found
 */
router.get("/:id", (req, res) => {
  try {
    const tx = transactionService.getTransactionById(req.params.id);
    res.json(tx);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/transactions:
 *   post:
 *     summary: Create a new transaction
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               transactionDetails:
 *                 type: object
 *                 required:
 *                   - transactionId
 *                 properties:
 *                   transactionId:
 *                     type: string
 *                   amount:
 *                     type: number
 *     responses:
 *       201:
 *         description: Transaction created
 *       400:
 *         description: Validation error
 */
router.post("/", (req, res) => {
  try {
    const tx = transactionService.createTransaction(req.body);
    res.status(201).json(tx);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/transactions/{id}:
 *   delete:
 *     summary: Delete a transaction
 *     tags: [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Transaction deleted
 *       404:
 *         description: Transaction not found
 */
router.delete("/:id", (req, res) => {
  try {
    transactionService.deleteTransaction(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

export default router;