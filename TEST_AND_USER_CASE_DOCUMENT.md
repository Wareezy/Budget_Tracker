# 📌 1.USE CASE DIAGRAM
<br>
<br>


```mermaid
graph LR
  %% Define actors on the left
  User["User (Individual Managing Finances)"]
  Admin["Admin (System Administrator)"]
  FinancialAdvisor["Financial Advisor"]
  MarketingTeam["Marketing & Sales Team"]
  ComplianceOfficer["Compliance & Security Officer"]
  SupportRep["Customer Support Representative"]

  %% Define system boundary on the right
  subgraph BudgetSystem["Budget Tracker"]
    A["Log Transaction"]
    B["Categorize Transactions"]
    C["Set & Track Budget"]
    D["Generate Financial Reports"]
    E["Manage User Authentication & Security"]
    F["Notify Users About Financial Events"]
    G["Provide Customer Support"]
    H["Promote & Analyze User Engagement"]
  end

  %% User interactions
  User -- Logs Transaction --> A
  User -- Categorizes Transactions --> B
  User -- Tracks Budget --> C
  User -- Generates Reports --> D
  User -- Receives Notifications --> F

  %% Admin interactions
  Admin -- Manages Authentication --> E

  %% Financial Advisor interactions
  FinancialAdvisor -- Reviews Reports --> D

  %% Marketing Team interactions
  MarketingTeam -- Analyzes Engagement --> H

  %% Compliance Officer interactions
  ComplianceOfficer -- Ensures Security --> E

  %% Support Representative interactions
  SupportRep -- Resolves Issues --> G
```


<br>
<br>
<br>

# 📌 Relationships Between Actors and Use Cases

## 👤 User (Individual Managing Finances)
**The User actor** can initiate the **Log Transaction, Categorize Transactions, and Set & Track Budget** use cases, which update financial records and generate reports, supporting the **User’s concern** for a **simple, secure, and efficient financial tracking system**.

---

## 🔧 Admin (System Administrator)
**The Admin actor** manages the **Manage User Authentication & Security** use case, which enforces security protocols and authentication, addressing the **Compliance & Security Officer’s concerns** about **data protection and regulatory compliance**.

---

## 📊 Financial Advisor
**The Financial Advisor actor** can **Generate Financial Reports**, which ensures that financial insights are accurate and reliable, supporting the **Financial Advisor’s concern** for **better financial planning tools for clients**.

---

## 📢 Marketing & Sales Team
**The Marketing & Sales Team actor** engages with the **Promote & Analyze User Engagement** use case, which tracks user behavior and adoption rates, addressing their concern for **improving retention and optimizing promotional strategies**.

---

## 🛡 Compliance & Security Officer
**The Compliance & Security Officer actor** oversees the **Manage User Authentication & Security** use case, which ensures encryption and authentication are implemented, supporting their concern for **compliance with legal and security standards**.

---

## 🎧 Customer Support Representative
**The Customer Support Representative actor** interacts with the **Provide Customer Support** use case to troubleshoot issues and resolve user concerns, addressing the **User’s need for a responsive and accessible support system**.

---
<br>
<br>
<br>

# 📌 2.Use Case Specifications

## **Use Case 1: Log Transaction**
**🎭 Actor:** User (Individual Managing Finances)  
**✅ Precondition:** User is authenticated and has access to their financial dashboard.  
**📌 Postcondition:** A new transaction (income/expense) is recorded, and the account balance updates in real-time.  

### **🔄 Basic Flow:**
1. The user selects **"Add Transaction"** from the dashboard.
2. The system prompts the user to enter details (**amount, category, date, and description**).
3. The user confirms the entry.
4. The system **validates and saves** the transaction.
5. The system updates the **user’s balance** accordingly.
6. A **confirmation message** is displayed.

---

## **Use Case 2: Categorize Transactions**
**🎭 Actor:** User (Individual Managing Finances)  
**✅ Precondition:** User has at least one recorded transaction.  
**📌 Postcondition:** The transaction is assigned to a category, and financial summaries reflect the update.  

### **🔄 Basic Flow:**
1. The user selects a transaction to edit.
2. The system presents available **categories** (e.g., **"Food," "Rent," "Utilities"**).
3. The user selects or creates a **custom category**.
4. The system updates the transaction.
5. The updated category appears in reports.

---

## **Use Case 3: Set & Track Budget**
**🎭 Actor:** User (Individual Managing Finances)  
**✅ Precondition:** User has defined at least one category for budgeting.  
**📌 Postcondition:** A budget is set, and the system tracks expenses against it.  

### **🔄 Basic Flow:**
1. The user selects **"Set Budget"** from the dashboard.
2. The system prompts the user to enter **budget limits per category**.
3. The user confirms the budget.
4. The system **saves and tracks** transactions against the set budget.
5. If spending exceeds **80% of the budget**, the system **triggers an alert**.


---

## **Use Case 4: Generate Financial Reports**
**🎭 Actor:** User, Financial Advisor  
**✅ Precondition:** User has recorded financial transactions.  
**📌 Postcondition:** A financial report is generated and available for viewing/export.  

### **🔄 Basic Flow:**
1. The user selects **"Generate Report"**.
2. The system prompts the user to choose a **time range** (e.g., **weekly, monthly, yearly**).
3. The system retrieves relevant **transaction data**.
4. A **visual summary** of income, expenses, and budget adherence is displayed.
5. The user can **export the report** as a **PDF or CSV file**.

---

## **Use Case 5: Manage User Authentication & Security**
**🎭 Actor:** Admin, Compliance & Security Officer  
**✅ Precondition:** User attempts to log in or register.  
**📌 Postcondition:** User is authenticated, and security measures are enforced.  

### **🔄 Basic Flow:**
1. User enters **email and password** to log in.
2. System **validates credentials** and checks authentication method (**password, OAuth, MFA**).
3. If credentials are correct, **access is granted**.
4. If **MFA is enabled**, the system sends a **verification code**.
5. The system **logs authentication history** for security audits.

---

## **Use Case 6: Notify Users About Financial Events**
**🎭 Actor:** System, User  
**✅ Precondition:** Notifications are enabled in user settings.  
**📌 Postcondition:** User receives a notification about a financial event.  

### **🔄 Basic Flow:**
1. A **trigger event** occurs (**budget exceeded, bill due, low balance**).
2. The system **generates a notification** based on user settings.
3. The user receives a **push notification or email alert**.

---

## **Use Case 7: Provide Customer Support**
**🎭 Actor:** Customer Support Representative  
**✅ Precondition:** User submits a support request.  
**📌 Postcondition:** The issue is logged and tracked until resolution.  

### **🔄 Basic Flow:**
1. The user selects **"Contact Support"** from the app.
2. The system presents support options (**FAQ, live chat, email request**).
3. The user describes the issue and submits a request.
4. The system assigns a **support representative**.
5. Support representative provides **assistance** and updates the ticket.
6. The system **notifies the user** when the issue is resolved.

---

## **Use Case 8: Promote & Analyze User Engagement**
**🎭 Actor:** Marketing & Sales Team  
**✅ Precondition:** User activity data is available.  
**📌 Postcondition:** The system generates insights on user behavior and engagement.  

### **🔄 Basic Flow:**
1. **Marketing & Sales Team** accesses the **"User Engagement Dashboard"**.
2. The system retrieves data on **active users, session duration, feature usage, and retention rates**.
3. The system **displays charts** and key engagement metrics.
4. The team **analyzes trends** and refines marketing strategies.

---
<br>
<br>
<br>

# 3.TEST CASE DEVELOPMENT
<br>
<br>

# 📌 Functional Test Cases Table  

Below is a test case table with **8 test cases** that validate **functional requirements** of the Minimalist Budget Tracker.  

| **Test Case ID** | **Requirement ID** | **Description** | **Steps** | **Expected Result** | **Actual Result** | **Status (Pass/Fail)** |
|-----------------|-----------------|----------------|----------|-----------------|-----------------|------------------|
| **TC-001** | **FR-001** | User logs an income transaction | 1. Navigate to **"Add Transaction"** <br> 2. Enter **amount, category, date, and description** <br> 3. Click **"Save"** | Transaction is **recorded**, and **balance updates** | | |
| **TC-002** | **FR-002** | User categorizes a transaction | 1. Open a **logged transaction** <br> 2. Select a **predefined category** <br> 3. Click **"Save"** | Transaction is updated with the **correct category** | | |
| **TC-003** | **FR-003** | User sets a budget for a category | 1. Go to **"Budget Settings"** <br> 2. Enter a **spending limit** for a category <br> 3. Click **"Save"** | Budget is **saved**, and **category spending** is tracked | | |
| **TC-004** | **FR-004** | User generates a financial report | 1. Go to **"Reports"** <br> 2. Select **time period** (weekly/monthly) <br> 3. Click **"Generate"** | Report is displayed with **transaction breakdown** | | |
| **TC-005** | **FR-006** | System sends a budget alert notification | 1. Set a **budget limit** for a category <br> 2. **Exceed** the budget limit with transactions <br> 3. System **triggers an alert** | User receives a **budget warning notification** | | |
| **TC-006** | **FR-008** | User logs in with secure authentication | 1. Enter **valid email and password** <br> 2. Click **"Login"** | User is **authenticated** and redirected to the **dashboard** | | |
| **TC-007** | **FR-009** | User data syncs across multiple devices | 1. Log in on **Device A** and add a transaction <br> 2. Log in on **Device B** <br> 3. Check if the **transaction appears** | Transaction appears on **both devices within 5 seconds** | | |
| **TC-008** | **FR-010** | User customizes settings (currency, theme) | 1. Open **"Settings"** <br> 2. Change the **currency format** or switch between **dark/light mode** <br> 3. Click **"Save"** | Changes **take effect immediately** | | |

---

# 📌 Non-Functional Test Scenarios  

### **⚡ Performance Test:**  
✅ Simulate **1,000 concurrent users logging transactions** and verify that the response time remains **≤ 2 seconds** for transaction processing.  

### **🔐 Security Test:**  
✅ Attempt a **brute-force attack** on user authentication by entering **multiple incorrect passwords**. Verify that the system **locks the account after five failed attempts** and requires **admin intervention** to reset.  

---
<br>
<br>
<br>

# 🎯 **Reflection: Challenges in Translating Requirements to Use Cases and Tests**

Developing the **Budget Tracker** required transforming high-level requirements into **detailed use cases and structured test cases**. While this process was essential for ensuring system functionality and user experience, several challenges emerged when mapping these requirements into well-defined use cases and corresponding test scenarios.  

---

## 🔍 **1. Identifying Clear and Precise Use Cases**  
One of the first challenges was **defining clear boundaries for each use case** while ensuring that all necessary features were covered. The Budget Tracker serves multiple stakeholders, including:  
👤 **Users** (Managing their finances)  
🛠 **Administrators** (Handling authentication & security)  
📊 **Financial Advisors** (Reviewing reports)  
🛡 **Compliance Officers** (Ensuring data security)  
📢 **Marketing Teams** (Analyzing engagement)  
🎧 **Customer Support Representatives** (Providing assistance)  

Each actor interacts with the system differently, requiring distinct **use cases**. Ensuring **no overlap or redundancy** was a difficult task. For example, both the **Admin** and **Compliance Officer** handle **user authentication**, but their **roles differ**, requiring clear role separation.

---

## 🔗 **2. Handling Complex Dependencies Between Use Cases**  
Some use cases depend on others, making it difficult to define a **clear execution flow**. For example:  

✅ **Categorizing transactions** requires an existing **logged transaction**.  
📊 **Generating financial reports** requires past **transaction records**.  

Ensuring these **dependencies were well-documented** prevented **missing critical interactions** in the system’s workflow. Without proper tracking, **incomplete test scenarios** could arise, leading to functionality gaps.

---

## ⚖ **3. Balancing Functional and Non-Functional Requirements**  
While it was **straightforward** to define test cases for:  
✔ **Logging transactions**  
✔ **Categorizing expenses**  
✔ **Setting budgets**  

Ensuring **non-functional requirements** were properly tested posed additional challenges. These included:  

⏳ **Performance Testing** – Simulating **1,000 concurrent users** logging transactions while ensuring response times stay **≤ 2 seconds**.  
🔐 **Security Testing** – Preventing **brute-force attacks**, enforcing **account lockouts** after multiple failed login attempts, and requiring **admin intervention** to reset access.  

These **non-functional aspects** required additional test planning beyond traditional use case formats.

---

## 🛠 **4. Writing Test Cases That Cover Edge Cases and User Errors**  
A major challenge was identifying **unexpected user behaviors** that could break the system. Critical edge cases included:  

⚠ **What if a user enters an invalid transaction amount?**  
⚠ **What happens if a budget category is deleted after transactions are recorded?**  
⚠ **How does the system handle a lost internet connection while saving a transaction?**  

By **anticipating and testing** these scenarios, the system could be made **robust and error-resistant**. Without proper edge case testing, **real-world failures** could occur.

---

## ♻ **5. Ensuring Test Case Coverage Without Redundancy**  
Writing test cases that **cover all functionalities** without unnecessary duplication was another challenge. Since many features are **interconnected**, some test cases naturally overlapped.  

For example:  

✔ **Budget tracking, notifications, and financial reports** all rely on transaction data.  
✔ If **not properly modularized**, test cases could duplicate checks unnecessarily.  

To **avoid redundancy**, test cases were structured so that each one focused on a **unique aspect** of the system.

---

## 🎯 **Conclusion**  
Despite these challenges, translating requirements into **use cases and test cases** was a **valuable learning experience**. It ensured a **structured development process**, leading to a **more robust and user-friendly Budget Tracker**.  

This process required:  
🔹 **Careful planning**  
🔹 **Iteration & refinement**  
🔹 **Consideration of all edge cases & dependencies**  
