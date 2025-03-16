# TEST CASE DEVELOPMENT
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
