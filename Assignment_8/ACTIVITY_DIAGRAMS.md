## 🔐 1. User Registration

<br>
<br>

```mermaid

flowchart TD
    %% Swimlanes
    subgraph User
        A1[Start Registration]
        A2[Enter Email, Password, Name]
        A3[Submit Form]
    end

    subgraph System
        B1[Validate Inputs]
        B2{Is Email Unique?}
        B3[Send Verification Email]
        B4[Create Account Record]
        B5[Store Hashed Password]
        B6[End Registration]
    end

    A1 --> A2 --> A3 --> B1 --> B2
    B2 -- Yes --> B3 --> B4 --> B5 --> B6
    B2 -- No --> B6

```

<br>
<br>

## 🔑 2. User Login

```mermaid

flowchart TD
    subgraph User
        A1[Start Login]
        A2[Enter Credentials]
        A3[Click 'Log In']
    end

    subgraph System
        B1[Verify Credentials]
        B2{Are credentials valid?}
        B3[Generate Auth Token]
        B4[Redirect to Dashboard]
        B5[Show Error Message]
        B6[End Login]
    end

    A1 --> A2 --> A3 --> B1 --> B2
    B2 -- Yes --> B3 --> B4 --> B6
    B2 -- No --> B5 --> B6

```


<br>
<br>

## 🧾 3. Add a Transaction

<br>
<br>

```mermaid

flowchart TD
    subgraph User
        A1[Click 'Add Transaction']
        A2[Add Amount,Category,Type]
        A3[Submit Transaction]
    end

    subgraph System
        B1[Validate Fields]
        B2{Are fields valid?}
        B3[Save to DB]
        B4[Update Balance]
        B5[Show Confirmation]
        B6[Show Error]
        B7[End]
    end

    A1 --> A2 --> A3 --> B1 --> B2
    B2 -- Yes --> B3 --> B4 --> B5 --> B7
    B2 -- No --> B6 --> B7

```

<br>
<br>

## 🗂️ 4. Categorize a Transaction

<br>
<br>

```mermaid

flowchart TD
    subgraph User
        A1[Select Transaction]
        A2[Choose/Edit Category]
        A3[Click 'Save']
    end

    subgraph System
        B1[Check if Category Exists]
        B2{Valid Category?}
        B3[Assign Category]
        B4[Update Transaction Record]
        B5[Show Success/Feedback]
        B6[End]
    end

    A1 --> A2 --> A3 --> B1 --> B2
    B2 -- Yes --> B3 --> B4 --> B5 --> B6
    B2 -- No --> B5 --> B6
```

<br>
<br>

## 💰 5. Set a Budget

```mermaid

flowchart TD
    subgraph User
        A1[Open Budget Settings]
        A2[Choose Category]
        A3[Enter Limit Amount]
        A4[Click 'Save Budget']
    end

    subgraph System
        B1[Validate Input]
        B2{Is Amount Valid?}
        B3[Save Budget to DB]
        B4[Set Up Budget Monitor]
        B5[Show Confirmation]
        B6[Show Error]
        B7[End]
    end

    A1 --> A2 --> A3 --> A4 --> B1 --> B2
    B2 -- Yes --> B3 --> B4 --> B5 --> B7
    B2 -- No --> B6 --> B7

```

<br>
<br>


## 📊 6. Generate Financial Report

```mermaid

flowchart TD
    subgraph User
        A1[Click 'Generate Report']
        A2[Select Date Range & Filters]
        A3[Click 'Generate']
    end

    subgraph System
        B1[Fetch Transactions]
        B2[Aggregate Income & Expenses]
        B3[Render Report]
        B4{Export Format Chosen?}
        B5[Download PDF/CSV]
        B6[Display on Screen]
        B7[End]
    end

    A1 --> A2 --> A3 --> B1 --> B2 --> B3 --> B4
    B4 -- Yes --> B5 --> B7
    B4 -- No --> B6 --> B7

```

<br>
<br>

## 🔁 7. Schedule a Recurring Transaction

<br>
<br>

```mermaid

flowchart TD
    subgraph User
        A1[Open Recurring Setup]
        A2[Enter Details: Amount, Frequency]
        A3[Click 'Schedule']
    end

    subgraph System
        B1[Validate Fields]
        B2{Is Data Valid?}
        B3[Save Recurrence Rule]
        B4[Set Timer/Trigger]
        B5[Show Success]
        B6[Show Error]
        B7[End]
    end

    A1 --> A2 --> A3 --> B1 --> B2
    B2 -- Yes --> B3 --> B4 --> B5 --> B7
    B2 -- No --> B6 --> B7

```

<br>
<br>

## 🔔 8. Receive Budget Exceeded Notification

```mermaid

flowchart TD
    subgraph System
        A1[Monitor Budget Usage]
        A2{Budget ≥ 80%?}
        A3[Trigger Notification Event]
        A4[Prepare Message Content]
        A5[Send via Email/App]
        A6[End]
    end

    subgraph User
        B1[View Alert]
        B2[Adjust Budget or Spending]
    end

    A1 --> A2
    A2 -- Yes --> A3 --> A4 --> A5 --> A6 --> B1 --> B2
    A2 -- No --> A1

```
