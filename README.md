# 💰 Budget Tracker  

A simple and intuitive budget tracking system that allows users to log income and expenses, categorize transactions, and view real-time balance updates. Designed with a minimalist approach, it focuses on essential budgeting features without unnecessary complexity.  

- [SPECIFICATION](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_3/SPECIFICATION.md)
- [ARCHITECTURE](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_3/ARCHITECTURE.md)

# Stakeholder and System Requirements Documentation for the System
- [STAKEHOLDER_AND_SYSTEM_REQUIREMENTS_DOCUMENTATION](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_4/STAKEHOLDER_AND_SYSTEM_REQUIREMENTS_DOCUMENTATION.md)
- [SYSTEM_REQUIREMENTS_DOCUMENT](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_4/SYSTEM_REQUIREMENTS_DOCUMENT.md)
- [REFLECTION](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_4/REFLECTION.md)

# Use Case Modeling and Test Case Development for the System
- [TEST_AND_USE_CASE_DOCUMENT](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_5/TEST_AND_USE_CASE_DOCUMENT.md)


# Agile User Stories, Backlog, and Sprint Planning for the System
- [AGILE_PLANNING_DOCUMENT](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_6/AGILE_PLANNING%20DOCUMENT.md)
- [USER_STORIES_TABLE](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_6/USER_STORIES_TABLE.md)
- [PRODUCT_BACKLOG](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_6/PRODUCT_BACKLOG.md)
- [SPRINT_PLAN](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_6/SPRINT_PLAN.md)
- [REFLECTION](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_6/REFLECTION.md)

# GitHub Project Templates and Kanban Board Implementation 
- [TEMPLATE_ANALYSIS](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_7/template_analysis.md)
- [KANBAN_EXPLANATION](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_7/kanban_explanation.md)
- [SCREENSHOTS](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_7/screenshots.md)
- [REFLECTION](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_7/reflection.md)

# Object State Modeling and Activity Workflow Modeling Objective 
- [ACTIVITY_DIAGRAMS](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_8/ACTIVITY_DIAGRAMS.md)
- [STATE_TRANSITION_DIAGRAMS](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_8/STATE_TRANSITION_DIAGRAMS.md)
- [EXPLANATIONS](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_8/EXPLANATIONS.md)
- [BUDGET_TRACKER_REFLECTION](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_8/BUDGET_TRACKER_REFLECTION.md)

# Domain Modeling and Class Diagram Development
- [DOMAIN_MODEL_DOCUMENTATION](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_9/DOMAIN_MODEL_DOCUMENTATION.md)
- [REFLECTION](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_9/REFLECTION.md)

# Creational Patterns and Unit Tests
- [CLASS_IMPLEMENTATION_LANGUAGE_CHOICE_AND_KEY_DESIGN_DECISIONS](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_10/src/Class_Implementation.md)
- [CREATIONAL_PATTERNS_JUSTIFICATION](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_10/creational_patterns/Justification.md)
- [TEST_COVERAGE_REPORT](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_10/tests/Coverage_Report.md)

# Service Layer and REST API Implementation
- [CLASS_IMPLEMENTATION_LANGUAGE_CHOICE_AND_KEY_DESIGN_DECISIONS](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_10/src/Class_Implementation.md)
- [CREATIONAL_PATTERNS_JUSTIFICATION](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_10/creational_patterns/Justification.md)
- [TEST_COVERAGE_REPORT](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_10/tests/Coverage_Report.md)


#  Implementing a Persistence Repository Layer
- [CHANGELOG](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_12/CHANGELOG.md)
- [SWAGGER UI API SCREENSHOT](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_12/docs/swagger-Screenshot.md)


# Implementing CI/CD with GitHub Actions
🧪 Running Tests Locally
To run all unit and integration tests on your machine:

bash
Copy
Edit
# Install dependencies
npm install

# Run tests
npm test
Ensure you have Node.js v18 or higher installed. The tests are written using Jest and cover both service-level and API-level functionality.

🚀 CI/CD Pipeline Overview
This project uses GitHub Actions for CI/CD. Here's how it works:

✅ CI (Continuous Integration)
Runs on every push to any branch and every pull request to main.

Automatically sets up Node.js, installs dependencies, and runs all tests (npm test).

Fails the workflow if any test fails, blocking broken code from merging.

📦 CD (Continuous Delivery)
On every push or merge to the main branch:

Archives the full project (excluding node_modules, .git, etc.)

Uploads a .zip release artifact to GitHub Actions for download

This artifact is useful for sharing, deployment, or backup
