## Functional Requirements - User Stories

| Story ID | User Story | Acceptance Criteria | Priority |
|--------|-----------|---------------------|---------|
| US001 | As a user, I want to log income and expense transactions so that I can track my finances easily. | Users can add, edit, and delete transactions; transactions update the list accurately. | High |
| US002 | As a user, I want to categorize transactions so that I can analyze my spending by category. | Users can select predefined or create custom categories; categories reflect in reports. | High |
| US003 | As a user, I want my financial balance to update in real time so that I always know my current balance. | Balance updates immediately on adding, editing, or deleting a transaction and syncs across devices. | High |
| US004 | As a user, I want to set budgets for categories so that I can monitor and control my spending. | Users can set limits; visual warnings show when limits are exceeded. | High |
| US005 | As a user, I want to schedule recurring transactions so that I don't have to log them manually every time. | Users define frequency; system auto-logs them as scheduled. | Medium |
| US006 | As a user, I want to receive notifications for important financial events so that I stay informed. | Alerts for bills, budget warnings, and summaries are sent via email or app; users can manage preferences. | Medium |
| US007 | As a user, I want to generate financial reports so that I can review my income, expenses, and budgets. | Users can view reports by time range and export as PDF/CSV. | Medium |
| US008 | As a user, I want my data secured and private so that I can trust the system with my financial info. | Secure login, encrypted data storage. | High |
| US009 | As a user, I want my data synced across devices so that I can access my budget anywhere. | Data syncs within 5 seconds of adding a transaction. | Medium |
| US010 | As a user, I want to customize my preferences so that the app works the way I like. | Users change currency, mode, and notification settings instantly. | Low |


## Use Cases - User Stories

| Story ID | User Story | Acceptance Criteria | Priority |
|--------|-----------|---------------------|---------|
| UC001 | As a user, I want to contact support easily so that I can resolve any issues I encounter. | System provides contact channels; support reps respond and update the ticket. | Medium |
| UC002 | As a user, I want to manage authentication securely so that my account is protected. | System validates credentials, supports OAuth/MFA, and logs auth history. | High |
| UC003 | As a marketing team, I want to analyze user engagement so that I can improve user retention. | System displays user activity data and trends in a dashboard. | Low |
| UC004 | As a user, I want to log transactions from my dashboard so that my finances stay up-to-date. | Transaction is validated, saved, and balance updates with confirmation. | High |
| UC005 | As a user, I want to categorize my transactions so that reports display meaningful summaries. | User selects/creates a category and it reflects in reports. | High |
| UC006 | As a user, I want to set and track my budget so that I stay within my financial goals. | System tracks expenses, alerts user if 80% of budget is exceeded. | High |
| UC007 | As a user or financial advisor, I want to generate financial reports so that I can analyze finances. | Reports generate with summaries and allow export to PDF/CSV. | Medium |
| UC008 | As a system, I want to notify users about key financial events so that users stay informed. | Trigger events send notifications based on user settings. | Medium |


## Non-Functional Requirements - User Stories

- As a user, I want the system to comply with WCAG 2.1 so that users with disabilities can access it.
- As a user, I want the app to be responsive on all devices so that I can use it on mobile, tablet, or desktop.
- As a system admin, I want the system deployable on AWS, Firebase, and Linux so that hosting is flexible.
- As a developer, I want the system to be modular and documented so that updates and debugging are easier.
- As a system admin, I want logging and monitoring enabled so that I can track system health and errors.
- As a user, I want the system to handle up to 10,000 users so that it performs well under high load.
- As a system admin, I want user data encrypted with AES-256 so that security compliance is met.
- As a system admin, I want all communications secured with HTTPS/TLS so that data is protected in transit.
- As a user, I want the app to respond within 2 seconds so that I can use it without delays.
- As a developer, I want database queries optimized within 500ms so that the system runs efficiently.

<br>
<br>
<br>

| Story ID | User Story | Priority (MoSCoW) | Effort Estimate | Dependencies |
|--------|-----------|--------------------|-----------------|-------------|
| US001 | Log income and expense transactions | Must-have | 3 | None |
| US002 | Categorize transactions for spending analysis | Must-have | 3 | US001 |
| US003 | Real-time balance updates | Must-have | 4 | US001 |
| US004 | Set budgets per category | Must-have | 4 | US002 |
| US008 | Secure login and encrypted data storage | Must-have | 5 | None |
| UC002 | Manage authentication securely (OAuth/MFA) | Must-have | 5 | US008 |
| US007 | Generate financial reports (PDF/CSV) | Should-have | 3 | US001, US002 |
| US005 | Schedule recurring transactions | Should-have | 3 | US001 |
| UC004 | Log transactions from dashboard | Must-have | 2 | US001 |
| UC006 | Set and track budgets with alerts | Must-have | 3 | US004 |
| US006 | Notifications for bills, budgets, summaries | Should-have | 3 | US004, UC006 |
| US009 | Data sync across devices | Should-have | 4 | US001, US003 |
| US010 | Customize app preferences (currency, notifications) | Could-have | 2 | US001 |
| UC001 | Contact support easily | Should-have | 2 | None |
| UC003 | Analyze user engagement trends (Marketing) | Could-have | 2 | US001, US002, US003 |
| UC007 | Generate reports for advisors | Should-have | 3 | US007 |
| UC008 | Notify users about financial events | Should-have | 3 | US006 |
| NFR-01 | WCAG 2.1 Accessibility Compliance | Must-have | 2 | None |
| NFR-02 | App responsive on all devices | Must-have | 3 | None |
| NFR-03 | Deployable on AWS/Firebase/Linux | Could-have | 2 | None |
| NFR-04 | Modular, well-documented system | Should-have | 3 | None |
| NFR-05 | System logging & monitoring | Must-have | 4 | None |
| NFR-06 | Handle 10,000 users under load | Must-have | 4 | NFR-05 |
| NFR-07 | AES-256 Data Encryption | Must-have | 4 | US008 |
| NFR-08 | HTTPS/TLS for secure comms | Must-have | 3 | None |
| NFR-09 | App responds within 2 seconds | Must-have | 3 | NFR-04, NFR-10 |
| NFR-10 | Database queries optimized <500ms | Should-have | 3 | NFR-04 |

<br>
<br>
<br>

### 🟢 Must-have Justification
- Core functionalities needed for MVP success.
- Directly impact user trust, data security, and usability.
- Align with compliance and legal requirements (GDPR, accessibility).
- Essential to achieve success metrics like:
  - 50% reduced time managing finances (User)
  - 90% satisfaction in data security (User)
  - 95% crash-free session rate (Development)
  - Zero data breaches (Compliance)
  - Scalability for 200% user growth

### 🟡 Should-have Justification
- Important features that enhance user experience and engagement.
- Improve user retention, reduce churn, and boost advisor adoption.
- Support marketing efforts and system maintainability but not core for MVP.

### 🔵 Could-have Justification
- Useful for future expansion or user personalization.
- Do not directly impact MVP or immediate success metrics.
- Can be delayed without compromising core user experience or stakeholder KPIs.

### ❌ Won’t-have (at this stage)
- None assigned; potential future features not in scope of MVP.

<br>
<br>
<br>

| Task ID | Task Description | Assigned To | Estimated Hours | Status (To Do / In Progress / Done) |
|--------|------------------|------------|-----------------|-------------------------------------|
| T-001 | Design database schema for transactions and categories | Dev Team | 8 | To Do |
| T-002 | Develop API endpoint to create, update, delete transactions | Dev Team | 12 | To Do |
| T-003 | Build front-end UI for transaction entry and listing | Dev Team | 10 | To Do |
| T-004 | Implement transaction category selection (predefined/custom) | Dev Team | 8 | To Do |
| T-005 | Create real-time balance calculation logic | Dev Team | 10 | To Do |
| T-006 | Design dashboard UI for quick transaction logging | Dev Team | 8 | To Do |
| T-007 | Integrate transaction logging functionality into the dashboard | Dev Team | 10 | To Do |
| T-008 | Implement secure user authentication (login/logout) | Dev Team | 12 | To Do |
| T-009 | Setup AES-256 encryption for sensitive data storage | Dev Team | 8 | To Do |
| T-010 | Write unit tests for transaction APIs and balance updates | QA Team | 10 | To Do |

<br>
<br>

## 🏁 Sprint Goal Statement:
This sprint focuses on delivering the core financial tracking features essential to the MVP. By implementing transaction logging, categorization, real-time balance updates, and basic security, the sprint ensures users can accurately record and monitor their finances. These foundational features are critical to meeting the MVP goal of providing a simple, secure, and user-friendly platform for personal financial management.

<br>
<br>
<br>

## Reflection on Prioritization, Estimation, and Agile Alignment

Working through the Agile planning process for my Budget Tracker project revealed several internal challenges, especially since I was both the product owner and the primary stakeholder.

### Prioritization Challenges
One of the biggest hurdles was prioritization. While drafting the user stories and mapping them to MoSCoW priorities, I found it difficult to distinguish between what was genuinely **“Must-have”** versus features that could be delayed. The desire to deliver a polished product from the start created internal resistance to leaving anything out of the MVP.

For instance, while generating financial reports and recurring transactions were classified as *"Should-have"*, part of me felt these were essential since they contribute heavily to user satisfaction. However, forcing myself to stick to Agile principles meant focusing on core functionalities that deliver the highest value early—transaction logging, categorization, real-time balance updates, and security.

### Estimation Challenges
Estimation presented its own set of challenges. Without real-world user feedback or a team to consult, every task’s effort estimate was based on assumptions rather than concrete data. 

Estimating hours for tasks like API development or AES-256 encryption forced me to confront my own uncertainties about the complexity of implementation. For example, setting 12 hours for API endpoints felt like a balanced number, but deep down I questioned whether this might be underestimated due to potential debugging or integration issues.

The same applied to database query optimization and ensuring app responsiveness—technical debt and unforeseen edge cases could easily stretch those estimates. The internal conflict of wanting to be optimistic but fearing scope creep made estimation feel more like guesswork than a science.

### Aligning Agile with Internal Stakeholder Resistance
Another subtle challenge came from aligning Agile principles with my own stakeholder needs. As the project progressed, I struggled with perfectionism and a subconscious desire for immediate completeness. 

Agile’s iterative nature—where not everything is perfect or finished in the first sprint—felt counterintuitive. There were moments when pushing features like notifications or user preferences to later sprints felt like sacrificing quality or user experience. This internal resistance created tension, questioning whether the MVP would be truly *“viable”* without those enhancements.

However, reflecting on Agile’s core values reminded me that early feedback and adaptability matter more than launching a fully loaded product. Forcing myself to stick to the prioritized backlog helped build confidence that focusing on fewer but well-executed features would lead to better outcomes.

### Solo Stakeholder Reflection
Lastly, being the only stakeholder made it difficult to validate decisions objectively. There was no external pressure, which at times reduced urgency and allowed procrastination to creep in—another form of internal resistance. 

Having to be both the driver and the critic slowed progress and created moments of self-doubt. Yet, this exercise in self-reflection strengthened my understanding of Agile’s flexibility and the importance of sticking to priorities even when personal biases lean toward over-delivery.

---
