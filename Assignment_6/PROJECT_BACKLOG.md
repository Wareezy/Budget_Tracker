## Product Backlog

<br>
<br>

![Application Screenshot](Table_Artifacts/BACKLOG.PNG)


<br>
<br>

###  Product Backlog- Mardown version

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

