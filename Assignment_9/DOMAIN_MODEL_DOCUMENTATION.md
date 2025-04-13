# 📦 Domain Model Documentation – Minimalist Budget Tracker

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


<br>
<br>

## 🧩 Class Diagram – Budget Tracker (Mermaid.js)

<br>
<br>

```mermaid
classDiagram
    %% User Class
    class User {
        +String userId
        +String email
        +String passwordHash
        +String name
        +String theme
        +String currencyPreference
        +String authStatus
        +register()
        +login()
        +updatePreferences()
        +deactivateAccount()
    }

    %% Transaction Class
    class Transaction {
        +String transactionId
        +String userId
        +Float amount
        +String type
        +Date date
        +String description
        +String categoryId
        +String status
        +create()
        +edit()
        +delete()
        +assignCategory()
    }

    %% Category Class
    class Category {
        +String categoryId
        +String userId
        +String name
        +String type
        +String status
        +create()
        +edit()
        +delete()
    }

    %% Budget Class
    class Budget {
        +String budgetId
        +String userId
        +String categoryId
        +Float limitAmount
        +Float currentSpending
        +String status
        +setLimit()
        +updateLimit()
        +monitorSpending()
        +archive()
    }

    %% Recurring Transaction Class
    class RecurringTransaction {
        +String recurringId
        +String userId
        +Float amount
        +String frequency
        +Date nextDueDate
        +String categoryId
        +String status
        +schedule()
        +cancel()
        +regenerate()
    }

    %% Report Class
    class Report {
        +String reportId
        +String userId
        +String dateRange
        +Date generatedAt
        +String format
        +String status
        +generate()
        +export()
        +archive()
    }

    %% Notification Class
    class Notification {
        +String notificationId
        +String userId
        +String message
        +String type
        +Date sentAt
        +String status
        +send()
        +acknowledge()
        +expire()
    }

    %% Relationships and Multiplicities
    User "1" --> "0..*" Transaction : logs
    User "1" --> "0..*" Budget : sets
    User "1" --> "0..*" RecurringTransaction : schedules
    User "1" --> "0..*" Report : generates
    User "1" --> "0..*" Notification : receives
    User "1" --> "0..*" Category : owns

    Category "1" --> "0..*" Transaction : classifies
    Category "1" --> "0..1" Budget : budgeted

    Budget "1" o-- "0..*" Transaction : monitors
    RecurringTransaction "1" --> "0..*" Transaction : generates
    Report "1" --> "0..*" Transaction : aggregates
    Report "1" --> "0..*" Budget : summarizes
    Report "1" --> "0..*" Category : organizes

    Notification "1" --> "0..1" Budget : triggered by
    Notification "1" --> "0..1" RecurringTransaction : triggered by

```

<br>
<br>
<br>

## 📌 Explanation of Design Decisions

The **User** class is the central entity in the system, responsible for owning all personal data and interactions. Core components such as **Transaction**, **Budget**, **Category**, and **RecurringTransaction** are directly tied to the user, reflecting their highly personalized and interrelated nature within the application. To accurately model how entities interact without enforcing tight coupling, **aggregation (`o--`)** was employed in areas where one object logically oversees a collection of others—such as **Budget** monitoring **Transactions**, or **Report** summarizing both **Budgets** and **Categories**—while preserving their independent lifecycles. **Composition** was intentionally avoided, as no entity is wholly dependent on another for existence. For instance, deleting a budget does not necessitate removing its associated category. **Multiplicity** was used to clearly define cardinality across relationships: a user can have many transactions, and a category may be assigned to one or more budgets. Lastly, **Reports** and **Notifications** are generated by the system but are owned and viewed by the user, justifying their modeling as associated classes rather than standalone components.
