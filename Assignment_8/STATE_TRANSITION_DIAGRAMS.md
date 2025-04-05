
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
    Scheduled --> Canceled : User cancels reapeated setting
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
