## ACTIVITY DIAGRAMS
<br>
<br>
## 🔐 1. User Registration

<br>
<br>

```mermaid

flowchart TD
    subgraph User
        A1([Start]) --> A2[Enter Email, Password, Name]
        A2 --> A3[Submit Form]
    end

    subgraph System
        B1[Validate Inputs] --> B2{Is Email Unique?}
        B2 -- Yes --> B3[Send Verification Email] --> B4[Create Account Record] --> B5[Store Hashed Password]
        B2 -- No --> B6[Show Error Message]
        B5 --> B7([End])
        B6 --> B7
    end

    A3 --> B1

```

<br>
<br>
### 🧠 Explanation:

This workflow models how a user registers, and how the system handles input validation and secure data handling.

#### 🔄 Key Actions:
- User fills in credentials → system checks if email is unique.
- If valid, account is created and verification email is sent.

#### 🎯 Stakeholder Mapping:
- Addresses **FR-008** (data security, hashed passwords).
- Aligns with **UC002** (secure authentication).
- Ensures scalability via validation and email confirmation.
- Meets usability expectations by providing immediate feedback.

<br>
<br>

## 🔑 2. User Login

```mermaid

flowchart TD
    subgraph User
        A1([Start]) --> A2[Enter Credentials] --> A3[Click 'Log In']
    end

    subgraph System
        B1[Verify Credentials] --> B2{Are credentials valid?}
        B2 -- Yes --> B3[Generate Auth Token] --> B4[Redirect to Dashboard] --> B6([End])
        B2 -- No --> B5[Show Error Message] --> B6
    end

    A3 --> B1

```

<br>
<br>

### 🧠 Explanation:

This workflow models secure user login. It validates credentials and returns a session token.

#### 🎯 Functional Mapping:
- ✅ **FR-008**: Secure login
- ✅ **UC002**: Manage authentication securely

#### 👥 Stakeholder Value:
- Supports concerns around **data protection**
- Provides **error feedback** for invalid login attempts

<br>
<br>

## 🧾 3. Add a Transaction

<br>
<br>

```mermaid

flowchart TD
    subgraph User
        A1([Start]) --> A2[Fill in Amount, Category, Type] --> A3[Click 'Submit']
    end

    subgraph System
        B1[Validate Fields] --> B2{Are fields valid?}
        B2 -- Yes --> B3[Save to DB] --> B4[Update Balance] --> B5[Show Confirmation] --> B6([End])
        B2 -- No --> B7[Show Error Message] --> B6
    end

    A3 --> B1

```

<br>
<br>

### 🧠 Explanation:

Captures the process of recording a new transaction.

#### 🎯 Functional Mapping:
- ✅ **FR-001**: Log transactions
- ✅ **FR-003**: Real-time balance updates

#### 👥 Stakeholder Value:
- Ensures integrity and usability by validating inputs before updating the balance.

<br>
<br>

## 🗂️ 4. Categorize a Transaction

<br>
<br>

```mermaid

flowchart TD
    subgraph User
        A1([Start]) --> A2[Select Transaction] --> A3[Choose/Edit Category] --> A4[Click 'Save']
    end

    subgraph System
        B1[Check if Category Exists] --> B2{Valid Category?}
        B2 -- Yes --> B3[Assign Category] --> B4[Update Transaction Record] --> B5[Show Feedback] --> B6([End])
        B2 -- No --> B5 --> B6
    end

    A4 --> B1

```
<br>
<br>

### 🧠 Explanation:

Models the categorization of a transaction for better reporting.

#### 🎯 Functional Mapping:
- ✅ **FR-002**: Categorize by spending type
- ✅ **UC005**: Improve reporting by category

#### 👥 Stakeholder Value:
- Supports goals for **data clarity** and **user personalization**.

<br>
<br>

## 💰 5. Set a Budget

```mermaid

flowchart TD
    subgraph User
        A1([Start]) --> A2[Open Budget Settings] --> A3[Choose Category] --> A4[Enter Limit] --> A5[Click 'Save']
    end

    subgraph System
        B1[Validate Input] --> B2{Is Amount Valid?}
        B2 -- Yes --> B3[Save Budget to DB] --> B4[Set Up Budget Monitor] --> B5[Show Confirmation] --> B6([End])
        B2 -- No --> B7[Show Error] --> B6
    end

    A5 --> B1

```
<br>
<br>

### 🧠 Explanation:

Models the workflow for creating a category-specific budget.

#### 🎯 Functional Mapping:
- ✅ **FR-004**: Users can set budget limits
- ✅ **UC006**: System tracks expenses vs. budget

#### 👥 Stakeholder Value:
- Ensures input validation and feedback, addressing **data integrity concerns**.

<br>
<br>


## 📊 6. Generate Financial Report

```mermaid

flowchart TD
    subgraph User
        A1([Start]) --> A2[Select Date Range & Filters] --> A3[Click 'Generate']
    end

    subgraph System
        B1[Fetch Transactions] --> B2[Aggregate Data] --> B3[Render Report]
        B3 --> B4{Export Format Chosen?}
        B4 -- Yes --> B5[Download PDF/CSV] --> B6([End])
        B4 -- No --> B7[Display on Screen] --> B6
    end

    A3 --> B1

```

<br>
<br>

### 🧠 Explanation:

Covers how reports are created and optionally exported.

#### 🎯 Functional Mapping:
- ✅ **FR-007**: Generate PDF/CSV reports
- ✅ **UC007**: Financial advisor reporting

#### 👥 Stakeholder Value:
- Supports the need for **insight** and **data-driven decisions**.

<br>
<br>

## 🔁 7. Schedule a Recurring Transaction

<br>
<br>

```mermaid

flowchart TD
    subgraph User
        A1([Start]) --> A2[Open Recurring Setup] --> A3[Enter Details: Amount, Frequency] --> A4[Click 'Schedule']
    end

    subgraph System
        B1[Validate Fields] --> B2{Is Data Valid?}
        B2 -- Yes --> B3[Save Rule] --> B4[Set Timer Trigger] --> B5[Show Success] --> B6([End])
        B2 -- No --> B7[Show Error] --> B6
    end

    A4 --> B1

```
<br>
<br>

### 🧠 Explanation:

Handles setting up recurring entries (e.g., rent, salary).

#### 🎯 Functional Mapping:
- ✅ **FR-005**: Schedule auto-transactions
- ✅ **FR-003**: Ensures balance stays updated

#### 👥 Stakeholder Value:
- Supports **automation** and reduces **manual logging workload**.

<br>
<br>

## 🔔 8. Receive Budget Exceeded Notification

```mermaid

flowchart TD
    subgraph System
        A1([Start]) --> A2[Monitor Budget Usage] --> A3{Budget ≥ 80%?}
        A3 -- Yes --> A4[Prepare Message Content]
        A4 --> B1[Send App Notification] & B2[Send Email Alert] & B3[Log Alert Event]
        B1 --> A5([End])
        B2 --> A5
        B3 --> A5
        A3 -- No --> A2
    end

    subgraph User
        C1[View Alert]
        C2[Adjust Budget or Spending]
    end

    A5 --> C1 --> C2

```
<br>
<br>

🧠 Explanation:

Represents the alert process when spending nears or exceeds the budget.

Maps to:
✅ FR-006: Budget limit notifications
✅ UC008: Event-based system messages

Helps users stay informed and act early, fulfilling stakeholder needs for proactive alerts.

---
