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
The table below lists the **key system functions** along with their **acceptance criteria**.

| **ID**   | **Requirement**                                               | **Acceptance Criteria** |
|---------|---------------------------------------------------------------|------------------------|
| FR-01   | Users shall be able to log income and expenses manually.       | Users can add, edit, and delete transactions, and updates reflect in real-time. |
| FR-02   | Users shall categorize transactions (e.g., Food, Rent, Utilities). | Users can select from predefined categories or create custom ones, and transactions are correctly grouped. |
| FR-03   | The system shall calculate and update the financial balance in real-time. | Balance updates immediately after a transaction is logged, edited, or deleted. |
| FR-04   | Users shall set and track monthly budgets.                     | Users can define budgets per category, and visual alerts notify them of overspending. |
| FR-05   | The system shall support recurring transactions.               | Users can configure recurring payments, and the system automatically logs them based on the defined schedule. |
| FR-06   | The system shall provide alerts and notifications.             | Users receive email or in-app alerts for bill payments, budget warnings, and periodic summaries. |
| FR-07   | Users shall generate reports summarizing financial activity.   | Reports display spending trends using graphs/tables and can be exported as PDF or CSV. |
| FR-08   | The system shall ensure secure authentication and encryption.  | Users log in using email/password or OAuth, and all financial data is encrypted before storage. |
| FR-09   | The system shall sync data across multiple devices.            | Transactions update in real-time across devices, with a max delay of 5 seconds. |
| FR-10   | Users shall be able to customize app settings.                 | Users can change currency format, enable dark/light mode, and set notification preferences. |


---

## 📌 3. Non-Functional Requirements  
Below are the **quality attributes** ensuring system usability, security, performance, and scalability.

| **#** | **Category**       | **Requirement** |
|------|-----------------|------------------------------------------------------------|
| 1️⃣  | 🎨 **Usability**    | The system shall comply with **WCAG 2.1 accessibility standards** to ensure inclusivity for users with disabilities. |
|      |                 | ✅ Users must be able to **navigate using screen readers and keyboard shortcuts**. |
|      |                 | ✅ The interface must have **sufficient color contrast and scalable fonts**. |
| 2️⃣  | 🎨 **Usability**    | The UI shall be **mobile-responsive**, adjusting to different screen sizes. |
|      |                 | ✅ The user interface must be **fully functional on mobile, tablet, and desktop devices**. |
| 3️⃣  | 🚀 **Deployability** | The system shall be deployable on **AWS, Firebase, and self-hosted Linux servers** for flexibility. |
|      |                 | ✅ The deployment process must be **automated using CI/CD pipelines**. |
|      |                 | ✅ The system must be accessible via **modern web browsers (Chrome, Firefox, Edge, Safari)**. |
| 4️⃣  | 🔄 **Maintainability** | The system shall follow **modular development principles** to facilitate updates and debugging. |
|      |                 | ✅ Developers must document **API endpoints, database schemas, and key functions**. |
|      |                 | ✅ A **README file and technical documentation** shall be included for onboarding new developers. |
| 5️⃣  | 🔄 **Maintainability** | The system shall provide **logging and monitoring tools** for tracking system health and errors. |
|      |                 | ✅ Error logs must be stored for at least **90 days** and accessible for debugging. |
| 6️⃣  | 📈 **Scalability**   | The system shall support **up to 10,000 users** with a peak load of **1,000 concurrent users** without performance degradation. |
|      |                 | ✅ Database must be **optimized with indexing and caching mechanisms**. |
|      |                 | ✅ Load balancing must distribute requests efficiently across multiple servers. |
| 7️⃣  | 🔐 **Security**     | All user data shall be **encrypted using AES-256** and transmitted via **HTTPS (TLS 1.2+)**. |
|      |                 | ✅ Passwords must be **hashed using bcrypt with a minimum cost factor of 12**. |
|      |                 | ✅ All API endpoints must be **protected using JWT-based authentication**. |
| 8️⃣  | ⚡ **Performance**   | The system shall respond to user actions within **2 seconds** for common operations like adding a transaction. |
|      |                 | ✅ Database queries must execute within **500ms** to optimize speed. |
|      |                 | ✅ Page loads shall complete within **3 seconds on average** on a **3G connection**. |

---


