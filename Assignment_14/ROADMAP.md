# 🛣️ Project Roadmap – Budget Tracker

This document outlines the planned and proposed features for the **Budget Tracker** backend system. It provides contributors and stakeholders with insight into upcoming goals, improvements, and architectural decisions.

---

## ✅ Completed Features

- Transaction and Category CRUD API
- In-memory data repositories for testing
- Service layer with full unit test coverage
- CI/CD pipeline using GitHub Actions
- Release artifact upload on merge to `main`
- Swagger API documentation generation

---

## 🚧 In Progress

- Secure user authentication and session handling
- Dashboard UI design (backend-ready for integration)
- Transaction logging integration

---

## 🧩 Upcoming Features

| Feature                                             | Description                                                                 | Priority     |
|-----------------------------------------------------|-----------------------------------------------------------------------------|--------------|
| 🔒 AES-256 Encryption for Sensitive Fields          | Encrypt stored user data and credentials                                    | High         |
| ⚙️ Integrate Redis Caching                          | Improve performance for frequently accessed endpoints                       | High         |
| 📊 Real-Time Balance Calculation                    | Display live balance updates based on transaction events                    | Medium       |
| 📅 Recurring Transaction Automation                 | Auto-generate transactions on schedules (weekly, monthly, etc.)             | Medium       |
| 🧾 PDF/CSV Report Export                            | Allow users to export budget reports                                        | Medium       |
| 🌐 Multi-language Support                           | Add i18n/l10n for wider accessibility                                       | Low          |
| 📥 Email Notification System                        | Notify users of approaching budget limits or recurring transactions         | Medium       |
| 🧪 Add Coverage Badges + Test Summary Reports       | Visualize test results on PRs and in README                                 | Low          |

---

## 💡 Proposed Ideas (Open to Discussion)

- OAuth2 or social login support
- GraphQL API layer
- Mobile API optimization (thinner responses, faster sync)
- AI-based spending suggestions
- Voice assistant API hook (e.g., Alexa/Google)

---

## 📌 Contribution Guidelines

If you’d like to help with one of these features:
1. Comment on the relevant GitHub issue
2. Label it as `in-progress` once you begin work
3. Follow the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines

---

## 📅 Roadmap Review

This roadmap will be reviewed and updated at the end of each sprint or milestone cycle.

Let us know if you have ideas you'd like to propose!
