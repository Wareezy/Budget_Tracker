# 📄 System Requirements Document (SRD)  
## 🏦 Minimalist Budget Tracker

## 📌 1. Stakeholder Analysis  
The table below outlines key stakeholders, their roles, key concerns, pain points, and success metrics.

| **Stakeholder**            | **Role**                                                   | **Key Concerns**                                    | **Pain Points**                                      | **Success Metrics**                                  |
|---------------------------|----------------------------------------------------------|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------|
| 👤 **Users**              | Use the app to log income/expenses and track finances   | User-friendly, secure data, spending summaries   | Complex finance tools, data security concerns     | 50% time reduction in finance management, 90% satisfaction |
| 👨‍💻 **Development Team**  | Design, develop, and maintain the system               | Intuitive UI, robust security, scalability       | Balancing simplicity, security vulnerabilities    | 95% crash-free sessions, no security breaches     |
| 🧑‍🏫 **Financial Advisors** | Recommend the tool for client finance management      | Data accuracy, ease of use, report generation    | Client reluctance, manual errors                 | 60% adoption rate, 40% fewer discrepancies        |
| 🔒 **Security Officers**   | Ensure compliance and protect user data               | Compliance, encryption, security audits          | Changing regulations, risk mitigation            | 100% compliance, zero data breaches              |
| 📢 **Marketing Team**      | Promote the Budget Tracker                             | Understanding audience, highlighting simplicity  | Market saturation, user conversion               | 70% increase in acquisition, 50% improved retention |
| 🛠️ **Customer Support**    | Assist users with queries and technical issues       | Timely support, issue tracking                   | High volume of requests, feature requests        | 95% user satisfaction, 60% faster response times  |

---

## 📌 2. Functional Requirements
Below are 10+ functional requirements addressing stakeholder concerns.

| **ID** | **Requirement** | **Acceptance Criteria** |
|--------|---------------|------------------------|
| FR-01  | Users shall be able to log income and expenses manually. | Transactions appear in the log and balance updates instantly. |
| FR-02  | Users shall categorize transactions (e.g., Food, Rent). | Transactions are organized correctly by category. |
| FR-03  | The system shall calculate and update the user’s balance in real-time. | The balance reflects every transaction change instantly. |
| FR-04  | Users shall set and track monthly budgets. | The system provides visual alerts when limits are exceeded. |
| FR-05  | The system shall support recurring transactions. | Users can configure and manage recurring payments. |
| FR-06  | The system shall provide email and in-app notifications. | Alerts trigger for due bills, budget warnings, and summaries. |
| FR-07  | Users shall generate reports on financial activities. | Reports include graphs, tables, and export options. |
| FR-08  | The system shall ensure secure authentication and encryption. | User data is stored securely and accessed only via authentication. |
| FR-09  | The system shall sync data across multiple devices. | Transactions update instantly across devices. |
| FR-10  | Users shall be able to customize settings. | Settings updates apply immediately and persist across sessions. |

---

## 📌 3. Non-Functional Requirements  
The table below categorizes essential non-functional requirements for the system.

| **Category**        | **Requirement** |
|---------------------|----------------|
| 🎨 **Usability**    | The system shall comply with **WCAG 2.1 accessibility standards**. |
| 🎨 **Usability**    | The UI shall be **mobile-responsive** across all devices. |
| 🚀 **Deployability** | The system shall be deployable on **AWS, Firebase, and Linux servers**. |
| 🔄 **Maintainability** | The system shall provide **modular development** for easy updates. |
| 🔄 **Maintainability** | The system shall store **error logs for debugging** for 90 days. |
| 📈 **Scalability**   | The system shall support **10,000 users and 1,000 concurrent users**. |
| 🔐 **Security**     | All sensitive data shall be **encrypted using AES-256**. |
| ⚡ **Performance**   | The system shall respond to transactions within **2 seconds**. |

---

