# Use Case Relationships in UML

## 1️⃣ Generalization (Inheritance Relationship)

### User ⮕ Financial Advisor  
- A **Financial Advisor** is a specialized type of **User** who also views financial summaries but does not log personal transactions.  
- **Relationship:** Generalization  
- **Notation:** `Financial Advisor ⮕ User`  

### Development Team ⮕ Compliance & Security Officer  
- **Compliance & Security Officers** are responsible for enforcing security policies, while the **Development Team** implements them.  
- **Relationship:** Generalization  
- **Notation:** `Compliance & Security Officer ⮕ Development Team`  

---

## 2️⃣ Inclusion (One Use Case is Always Part of Another)

### Log Transaction ⮕ Categorize Transaction  
- Every time a **User logs a transaction**, they must **categorize it** (either by selecting a predefined category or creating a new one).  
- **Relationship:** Inclusion  
- **Notation:** `Log Transaction ⤷ Categorize Transaction`  

### Set Budget ⮕ Receive Alerts & Notifications  
- When a **User sets a budget**, they automatically receive **alerts** if they exceed the set limit.  
- **Relationship:** Inclusion  
- **Notation:** `Set Budget ⤷ Receive Alerts & Notifications`  

### Schedule Recurring Transactions ⮕ Log Transaction  
- **Recurring transactions** automatically log transactions at scheduled intervals.  
- **Relationship:** Inclusion  
- **Notation:** `Schedule Recurring Transactions ⤷ Log Transaction`  

---

## 3️⃣ Extension (Optional or Conditional Use Case Execution)

### Export Financial Reports ⮕ View Financial Summary  
- Users can **view** their financial summaries without exporting them, but if they choose to **download**, they trigger the **Export Financial Reports** feature.  
- **Relationship:** Extension  
- **Notation:** `View Financial Summary ⮕ Export Financial Reports [optional]`  

### Secure Authentication ⮕ Multi-Device Synchronization  
- Authentication is required before **syncing financial data** across devices. If authentication fails, the system does not sync the data.  
- **Relationship:** Extension  
- **Notation:** `Secure Authentication ⮕ Multi-Device Synchronization [only if login is successful]`  

### Customer Support Assistance ⮕ View Financial Summary  
- If a **User has issues with financial reports**, they may contact **Customer Support** for troubleshooting.  
- **Relationship:** Extension  
- **Notation:** `View Financial Summary ⮕ Customer Support Assistance [if issues occur]`  
