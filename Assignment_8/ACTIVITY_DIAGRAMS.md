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
