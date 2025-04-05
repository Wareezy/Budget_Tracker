
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
    Scheduled --> Canceled : User cancels recurring setting
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

``
