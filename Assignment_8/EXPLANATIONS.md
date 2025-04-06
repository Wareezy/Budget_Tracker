# 🧠 **Explanation Mapping of Diagrams**

## 🔹 **Activity Diagrams → Functional Requirements, User Stories, Sprint Tasks**

| **Diagram**                       | **Functional Requirement(s)**                                  | **User Story ID(s)**                  | **Sprint Task(s)**                                  |
|-----------------------------------|-----------------------------------------------------------------|--------------------------------------|-----------------------------------------------------|
| **1. User Registration**          | FR-008 (Data security, authentication)                        | US008                                | T-008 (Authentication), T-009 (Encryption)         |
| **2. User Login**                 | FR-008                                                         | US008                                | T-008, T-009                                        |
| **3. Add a Transaction**          | FR-001, FR-003                                                 | US001, US003, UC004                  | T-002, T-003, T-005, T-007                          |
| **4. Categorize a Transaction**   | FR-002                                                         | US002, UC005                         | T-004                                               |
| **5. Set a Budget**               | FR-004                                                         | US004, UC006                         | *(Handled in future sprints)*                       |
| **6. Generate Financial Report**  | FR-007                                                         | US007, UC007                         | *(Future reporting sprint)*                         |
| **7. Schedule a Recurring Transaction** | FR-005                                                      | US005                                | *(Not in current sprint)*                           |
| **8. Receive Budget Exceeded Notification** | FR-006                                                | US006, UC008                         | *(Not in current sprint)*                           |

---

## 🔹 **State Transition Diagrams → Functional Requirements, User Stories, Sprint Tasks**

| **Diagram**                       | **Functional Requirement(s)**                                  | **User Story ID(s)**                  | **Sprint Task(s)**                                  |
|-----------------------------------|-----------------------------------------------------------------|--------------------------------------|-----------------------------------------------------|
| **1. Transaction**                | FR-001, FR-003, FR-007                                          | US001, US003, UC004                  | T-002, T-003, T-005, T-007, T-010                   |
| **2. Budget**                     | FR-004, FR-006                                                  | US004, US006, UC006                  | *(Future sprint)*                                   |
| **3. User Account**               | FR-008                                                         | US008, UC002                         | T-008, T-009                                        |
| **4. Recurring Transaction**      | FR-005                                                         | US005                                | *(Future sprint)*                                   |
| **5. Authentication Session**     | FR-008, NFR008                                                  | US008                                | T-008                                               |
| **6. Notification**               | FR-006                                                         | US006, UC008                         | *(Notification not in current sprint)*              |
| **7. Report**                     | FR-007                                                         | US007, UC007                         | *(Future reporting sprint)*                         |
| **8. Category**                   | FR-002, FR-010                                                  | US002, UC005                         | T-004                                               |

---
