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
## 🧪 Running Tests Locally

To run all unit and integration tests on your local machine:

```bash
# Install dependencies
npm install

# Run tests
npm test
```

## 🚀 CI/CD Pipeline Overview

This project uses **GitHub Actions** to automate Continuous Integration (CI) and Continuous Delivery (CD):

---

### ✅ CI (Continuous Integration)

**Triggers on:**
- Every push to any branch  
- Every pull request to `main`

**Steps performed:**
- Sets up Node.js 18  
- Installs dependencies  
- Runs all unit and integration tests (`npm test`)

**Purpose:**  
Ensures all code changes are tested before being merged into the `main` branch.

---

### 📦 CD (Continuous Delivery)

**Triggers on:**
- Push or merge into the `main` branch

**Steps performed:**
- Archives the entire project (excluding `node_modules`, `.git`, and coverage files)  
- Uploads the archive (`budget-tracker.zip`) as a downloadable artifact in GitHub Actions

**Purpose:**  
Generates a clean release package of the backend code for download, backup, or further deployment.


# WHEN THE PR FAILS BECAUSE OF THE RULES THAT HAS BEEN SET IN PLACE THIS IS HOW IT LOOKS:
![failed-pr](https://github.com/user-attachments/assets/58aa5ed5-0c5f-444e-ab4f-35d21f6d89fc)


# necessary artifacts:
- [BRANCH_PROTECTION_RULES](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_13/BRANCH_PROTECTION_RULES/BRANCH-PROTECTION-RULES.PNG)
- [PROTECTION.md](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_13/BRANCH_PROTECTION_RULES/PROTECTION.md)
- [CI-PIPELIKE-TEST-AUTOMATION RESULT 1](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_13/CI_PIPELINE_TEST_AUTOMATION/CI-Pipeline-%20Test-%20Automation-test-results.PNG)
- [CI-PIPELIKE-TEST-AUTOMATION RESULT 2](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_13/CI_PIPELINE_TEST_AUTOMATION/CI-Pipeline-Test-Automation-test-results-2.PNG)
- [GENERATED_RELEASED_ARIFACT](https://github.com/Wareezy/Budget_Tracker/blob/main/Assignment_13/ARTIFACT_GENERATIO)
