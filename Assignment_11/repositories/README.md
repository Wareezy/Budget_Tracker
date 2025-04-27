# Repository Layer Design

## Purpose
The `/repositories` directory defines abstract repository interfaces for persisting domain entities in the Budget Tracker application.

## Justification
- **Use of Generics:**  
  A generic `Repository` class was created to define standard CRUD operations (`save`, `findById`, `findAll`, `delete`).  
  This avoids duplication of code across different entity repositories like Budget, User, Transaction, etc.
  
- **Extensibility:**  
  Each domain entity (e.g., Budget, Transaction) has its own repository interface that extends the generic `Repository`.  
  This makes it easy to swap out storage mechanisms (in-memory, filesystem, database, API) without changing the rest of the application.

- **Flexibility:**  
  Different implementations of the repositories can be provided later (e.g., `InMemoryBudgetRepository`, `MySQLBudgetRepository`, `APIBudgetRepository`) depending on the storage backend.

## Folder Structure
