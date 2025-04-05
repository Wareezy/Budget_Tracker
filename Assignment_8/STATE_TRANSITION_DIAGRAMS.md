
```mermaid

stateDiagram-v2
    [*] --> Draft
    Draft --> Submitted : User confirms entry
    Submitted --> Validated : System checks fields
    Validated --> Logged : Saved to database
    Logged --> Edited : User updates
    Logged --> Deleted : User deletes
    Edited --> Logged
    Deleted --> [*]

```
<br>
<br>

## 🧠 Explanation

### 🔑 Key States:

- **Draft**: Transaction is started but not yet finalized.  
- **Submitted**: User confirms the transaction details.  
- **Validated**: System performs checks on fields like amount and category.  
- **Logged**: The transaction is stored and affects the account balance.  
- **Edited**: User updates the saved entry.  
- **Deleted**: Entry is removed by the user.  

### 🔄 Key Transitions:

- **Draft → Submitted**: User confirms transaction.  
- **Submitted → Validated**: System checks validation rules.  
- **Validated → Logged**: Transaction stored after passing validation.  
- **Logged → Edited/Deleted**: User modifies or deletes the entry.  

---

### ✅ Functional Requirement Mapping:

- **FR-001**: Log income/expense transactions.  
- **FR-003**: Update balance in real-time after transaction is logged.  
- **UC004**: Users can submit/edit transactions.  
- **FR-007**: Logged entries are used for reporting.  

<br>
<br>
<br>

```mermaid

stateDiagram-v2
    [*] --> NotSet
    NotSet --> Set : User defines limit
    Set --> Updated : User changes limit
    Set --> Exceeded : Limit reached
    Exceeded --> Updated : Budget adjusted
    AnyState --> Archived : Disabled


```

<br>
<br>
<br>

```mermaid

stateDiagram-v2
    [*] --> Registered
    Registered --> Active : Email verification
    Active --> Suspended : Admin restriction
    Active --> Deactivated : User-initiated closure
    Suspended --> Reinstated : Admin clears account
    Deactivated --> [*]

```

<br>
<br>

```mermaid

stateDiagram-v2
    [*] --> Scheduled
    Scheduled --> Processed : Triggered on due date
    Processed --> NextScheduled : Recurring logic regenerates
    Scheduled --> Canceled : User cancels repeat setting
    Canceled --> [*]

```


<br>
<br>

```mermaid

stateDiagram-v2
    [*] --> Unauthenticated
    Unauthenticated --> Authenticating : User logs in
    Authenticating --> Authenticated : Credentials valid
    Authenticating --> Unauthenticated : Failed attempt
    Authenticated --> Expired : Token timeout
    Expired --> Unauthenticated

```

<br>
<br>
<br>


```mermaid

stateDiagram-v2
    [*] --> Scheduled
    Scheduled --> Sent : Trigger event occurs
    Sent --> Acknowledged : User opens or interacts
    Sent --> Expired : Time limit reached
    Acknowledged --> [*]
    Expired --> [*]


```


```mermaid

stateDiagram-v2
    [*] --> Generating
    Generating --> Ready : Data processed
    Ready --> Exported : Download initiated
    Ready --> Archived : User chooses to save
    Exported --> [*]


```


<br>
<br>

```mermaid

stateDiagram-v2
    [*] --> Predefined
    Predefined --> Customized : User edits or adds
    Customized --> Deleted : User removes category
    Customized --> Updated : User edits existing
    Deleted --> [*]

```
