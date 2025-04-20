# 🏗️ Creational Patterns – Budget Tracker

This directory demonstrates the six creational design patterns, each tailored to the Budget Tracker domain model. Each implementation serves a realistic use case based on the system's architecture and business logic.

---

## 1. 🧱 Simple Factory – `TransactionFactory`

**Justification**: Used to centralize the creation of different types of transactions (income vs expense) based on user input. This pattern simplifies object instantiation logic for domain actions that vary only slightly by type.

**Example**: `TransactionFactory.createTransaction("income", ...)`

---

## 2. 🧾 Factory Method – `NotificationSender`

**Justification**: Applied where the delivery method of a notification (e.g., Email, SMS) varies by type but shares the same interface. Each subclass defines its own logic to send the message.

**Example**: `NotificationFactory.getSender("sms").send(...)`

---

## 3. 🎨 Abstract Factory – `ThemeFactory`

**Justification**: Provides a flexible way to generate related UI settings (e.g., light or dark themes). Useful for returning a complete theme package that works uniformly across different components.

**Example**: `new DarkThemeFactory().createTheme().getName()`

---

## 4. 👤 Builder – `UserBuilder`

**Justification**: The `User` class has many optional preferences like name, theme, and currency. The builder pattern makes it easy to construct a `User` object in steps while maintaining immutability and clarity.

**Example**:
```js
new UserBuilder("123", "user@example.com", "hashed123")
  .setName("John")
  .setTheme("dark")
  .build();
```

---

## 5. 💰 Prototype – `BudgetTemplate`

**Justification**: Cloning pre-configured budget templates (e.g., Groceries, Entertainment) helps users quickly set up budgets without redefining limits or categories. This reduces initialization time and promotes reusability.

**Example**: `budgetCache.getClonedBudget("groceries")`

---

## 6. 🔁 Singleton – `DatabaseConnection`

**Justification**: Used to ensure that only one database connection exists globally across the app. Helps prevent multiple connections and ensures shared access to DB logic.

**Example**:
```js
const db = new DatabaseConnection();
db.connect();
```

---

Each pattern was chosen specifically to solve a structural or behavioral need within the Budget Tracker domain, aligned with clean code principles and maintainable software architecture.
