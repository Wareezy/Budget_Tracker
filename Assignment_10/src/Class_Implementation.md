# 🧠 Class Implementation - Budget Tracker

## 🛠 Language Choice: JavaScript (ES6+)

JavaScript was chosen for the implementation of this object-oriented domain model because of its widespread use in modern web development, particularly for full-stack applications. It supports class-based syntax (introduced in ES6) and offers an intuitive structure for encapsulating logic and behavior within modular components. As this Budget Tracker system is likely to be developed as a web application, JavaScript provides a natural choice for maintaining consistency across front-end and back-end logic, especially when using frameworks like Node.js.

## 🎯 Key Design Decisions

### 1. **Class Structure and Modularity**
Each domain entity (e.g., `User`, `Transaction`, `Budget`) is implemented in a separate file under the `src/` directory, allowing for modular and maintainable code. This aligns with the single-responsibility principle and simplifies testing and debugging.

### 2. **Encapsulation with Private Fields**
Private fields (using `#`) were used to protect internal state and enforce encapsulation, ensuring data integrity and preventing unintended access from outside the class.

```js
#email;
#passwordHash;
```

Getters were introduced selectively when internal data needed to be accessed externally in a controlled manner.

---

### 3. **Core Method Implementation**
Only the core methods specified in the Mermaid.js class diagram were implemented. Each method reflects a real-world behavior of the entity, such as:

- `User.login()`
- `Budget.monitorSpending()`
- `RecurringTransaction.regenerate()`
- `Notification.acknowledge()`

This approach keeps the implementation focused and aligned with the domain logic.

---

### 4. **Use of Default Values and Initialization**
Default values are used for status fields (e.g., `status = 'active'`) and timestamps (e.g., `new Date()`), reducing boilerplate and handling common scenarios implicitly.

---

### 5. **Avoiding Tight Coupling**
Relationships were handled conceptually via attributes (e.g., `userId`, `categoryId`) rather than strict object references to preserve loose coupling and simulate real database associations without enforcing composition.

---

### 6. **No Composition Used**
As explained in the domain model design, composition was intentionally avoided because no entity is strictly dependent on the lifecycle of another (e.g., deleting a budget does not delete a category).

---

This implementation serves as the foundational logic layer for future integration into a web-based Budget Tracker system, supporting CRUD operations and business rules described in the domain model documentation.