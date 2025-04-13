# 📦 Domain Model – Minimalist Budget Tracker

## 🧩 Entity Overview

| **Entity**               | **Attributes**                                                                                     | **Methods**                                                            | **Relationships**                                                                                   |
|--------------------------|----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| **User**                 | `userId`, `email`, `passwordHash`, `name`, `theme`, `currencyPreference`, `authStatus`            | `register()`, `login()`, `updatePreferences()`, `deactivateAccount()` | - Has many **Transactions**<br>- Sets many **Budgets**<br>- Owns **Categories**<br>- Receives **Notifications**<br>- Has many **RecurringTransactions** |
| **Transaction**          | `transactionId`, `userId`, `amount`, `type` (income/expense), `date`, `description`, `categoryId`, `status` | `create()`, `edit()`, `delete()`, `assignCategory()`                   | - Belongs to **User**<br>- Linked to **Category**<br>- Affects **Budget**<br>- Used in **Reports**                      |
| **Category**             | `categoryId`, `userId`, `name`, `type` (predefined/custom), `status`                              | `create()`, `edit()`, `delete()`                                       | - Belongs to **User**<br>- Categorizes many **Transactions**<br>- Used in **Reports**                                    |
| **Budget**               | `budgetId`, `userId`, `categoryId`, `limitAmount`, `currentSpending`, `status`                    | `setLimit()`, `updateLimit()`, `monitorSpending()`, `archive()`       | - Assigned by **User**<br>- Linked to **Category**<br>- Monitors **Transactions**                                        |
| **RecurringTransaction** | `recurringId`, `userId`, `amount`, `frequency`, `nextDueDate`, `categoryId`, `status`             | `schedule()`, `cancel()`, `regenerate()`                               | - Belongs to **User**<br>- Automatically creates **Transactions**                                        |
| **Report**               | `reportId`, `userId`, `dateRange`, `generatedAt`, `format` (PDF/CSV), `status`                    | `generate()`, `export()`, `archive()`                                  | - Belongs to **User**<br>- Aggregates **Transactions**, **Budgets**, and **Categories**                                  |
| **Notification**         | `notificationId`, `userId`, `message`, `type`, `sentAt`, `status`                                 | `send()`, `acknowledge()`, `expire()`                                  | - Belongs to **User**<br>- Triggered by **Budget** or **RecurringTransaction** events                                    |

---

## 📏 Business Rules

| **Rule ID** | **Business Rule**                                                                 |
|------------|-------------------------------------------------------------------------------------|
| BR-01      | A user must verify their email before activating their account.                    |
| BR-02      | A transaction must be associated with a valid category.                            |
| BR-03      | A user cannot exceed their defined budget without receiving a warning.             |
| BR-04      | Budget warnings are triggered when spending reaches ≥ 80% of the limit.            |
| BR-05      | Recurring transactions must be auto-logged based on their frequency.               |
| BR-06      | A user can only define one active budget per category at a time.                   |
| BR-07      | Notification records must be archived after being acknowledged or expiring.        |
