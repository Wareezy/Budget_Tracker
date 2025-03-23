## Product Backlog
<br>

- [Github Tools -PRODUCT_BACKLOG_TABLE](https://github.com/users/Wareezy/projects/9/views/1)
<br>
<br>

## Product Backlog Table - Screenshot

![image](https://github.com/user-attachments/assets/2aa61761-4ffb-44d1-968c-655d5c4f4cb5)


<br>
<br>

###  Product Backlog- Markdown version

<br>

| Story ID | User Story | Priority (MoSCoW) | Effort Estimate | Dependencies |
|--------|-----------|--------------------|-----------------|-------------|
| US001 | As a user, I want to log income and expense transactions so that I can track my finances easily. | Must-have | 3 | None |
| US002 | As a user, I want to categorize transactions so that I can analyze my spending by category. | Must-have | 3 | US001 |
| US003 | As a user, I want my financial balance to update in real time so that I always know my current balance. | Must-have | 4 | US001 |
| US004 | As a user, I want to set budgets for categories so that I can monitor and control my spending. | Must-have | 4 | US002 |
| US008 | As a user, I want my data secured and private so that I can trust the system with my financial info. | Must-have | 5 | None |
| UC002 | As a user, I want to manage authentication securely so that my account is protected. | Must-have | 5 | US008 |
| US007 | As a user, I want to generate financial reports so that I can review my income, expenses, and budgets. | Should-have | 3 | US001, US002 |
| US005 | As a user, I want to schedule recurring transactions so that I don't have to log them manually every time. | Should-have | 3 | US001 |
| UC004 | As a user, I want to log transactions from my dashboard so that my finances stay up-to-date. | Must-have | 2 | US001 |
| UC006 | As a user, I want to set and track my budget so that I stay within my financial goals. | Must-have | 3 | US004 |
| US006 | As a user, I want to receive notifications for important financial events so that I stay informed. | Should-have | 3 | US004, UC006 |
| US009 | As a user, I want my data synced across devices so that I can access my budget anywhere. | Should-have | 4 | US001, US003 |
| US010 | As a user, I want to customize my preferences so that the app works the way I like. | Could-have | 2 | US001 |
| UC001 | As a user, I want to contact support easily so that I can resolve any issues I encounter. | Should-have | 2 | None |
| UC003 | As a marketing team, I want to analyze user engagement so that I can improve user retention. | Could-have | 2 | US001, US002, US003 |
| UC007 | As a user or financial advisor, I want to generate financial reports so that I can analyze finances. | Should-have | 3 | US007 |
| UC008 | As a system, I want to notify users about key financial events so that users stay informed. | Should-have | 3 | US006 |
| NFR001 | As a user, I want the system to comply with WCAG 2.1 so that users with disabilities can access it. | Must-have | 2 | None |
| NFR002 | As a user, I want the app to be responsive on all devices so that I can use it on mobile, tablet, or desktop. | Must-have | 3 | None |
| NFR003 | As a system admin, I want the system deployable on AWS, Firebase, and Linux so that hosting is flexible. | Could-have | 2 | None |
| NFR004 | As a developer, I want the system to be modular and documented so that updates and debugging are easier. | Should-have | 3 | None |
| NFR005 | As a system admin, I want logging and monitoring enabled so that I can track system health and errors. | Must-have | 4 | None |
| NFR006 | As a user, I want the system to handle up to 10,000 users so that it performs well under high load | Must-have | 4 | NFR-05 |
| NFR007 | As a system admin, I want user data encrypted with AES-256 so that security compliance is metn | Must-have | 4 | US008 |
| NFR008 | As a system admin, I want all communications secured with HTTPS/TLS so that data is protected in transit. | Must-have | 3 | None |
| NFR009 | As a user, I want the app to respond within 2 seconds so that I can use it without delays. | Must-have | 3 | NFR-04, NFR-10 |
| NFR010 | As a developer, I want database queries optimized within 500ms so that the system runs efficiently. | Should-have | 3 | NFR-04 |

<br>
<br>
<br>

## Prioritization Justification
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

