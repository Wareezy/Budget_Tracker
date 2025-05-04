import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { swaggerOptions } from "./docs/swagger-config.js";

import userRoutes from "./api/user-routes.js";
import categoryRoutes from "./api/category-routes.js";
import transactionRoutes from "./api/transaction-routes.js";

// Setup __dirname (because you're using ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express app
const app = express();
app.use(express.json());

// Generate Swagger spec
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Serve Swagger UI
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Write OpenAPI JSON to /docs/openapi.json
const outputPath = path.join(__dirname, "docs", "openapi.json");
fs.writeFileSync(outputPath, JSON.stringify(swaggerSpec, null, 2));
console.log("📄 Swagger OpenAPI JSON saved to /docs/openapi.json");

// Routes
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/transactions", transactionRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));