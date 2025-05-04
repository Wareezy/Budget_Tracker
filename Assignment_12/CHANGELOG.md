# 📊 Budget Tracker API (Assignment 12)

This project implements a RESTful API for a Budget Tracker system. It includes full CRUD operations and business logic for managing **Users**, **Categories**, and **Transactions**. The API uses an in-memory repository system (Assignment 11) and includes full Swagger documentation.

---

## 📦 Features

### ✅ 1. Service Layer
- **UserService** – Handles user registration, retrieval, and deletion.
- **CategoryService** – Manages budget categories.
- **TransactionService** – Handles creation and tracking of financial transactions.
- Business logic included for input validation and duplicate prevention.

---

### 🌐 2. REST API Endpoints

#### 👤 Users
| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| GET    | `/api/users`        | Get all users            |
| GET    | `/api/users/:id`    | Get a user by ID         |
| POST   | `/api/users`        | Create/register a user   |
| DELETE | `/api/users/:id`    | Delete a user            |

#### 📂 Categories
| Method | Endpoint                | Description            |
|--------|-------------------------|------------------------|
| GET    | `/api/categories`       | Get all categories     |
| GET    | `/api/categories/:id`   | Get category by ID     |
| POST   | `/api/categories`       | Create new category    |
| DELETE | `/api/categories/:id`   | Delete a category      |

#### 💰 Transactions
| Method | Endpoint                  | Description               |
|--------|---------------------------|---------------------------|
| GET    | `/api/transactions`       | Get all transactions      |
| GET    | `/api/transactions/:id`   | Get transaction by ID     |
| POST   | `/api/transactions`       | Create new transaction    |
| DELETE | `/api/transactions/:id`   | Delete a transaction      |

---

## 📘 3. API Documentation (Swagger UI)

The API is fully documented using **OpenAPI/Swagger**, auto-generated with `swagger-jsdoc`.

- Swagger UI is available at:  
  👉 [http://localhost:3000/docs](http://localhost:3000/docs)

- OpenAPI JSON spec is saved automatically at:  
  📄 `Assignment_12/docs/openapi.json`

To view the docs:
```bash
cd Assignment_12
node server.js