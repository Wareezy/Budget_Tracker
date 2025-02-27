# 🏗️ Architecture Overview

## 📄 File: Architecture.md

### 📌 Description
This document outlines the **architectural structure** of the 🏦 Minimalist Budget Tracker. It provides a clear visualization of how the system is organized and how its components interact with each other. The architecture follows the **C4 Model**, which includes different levels of system abstraction to improve clarity and maintainability.

### 📊 What Will Be Covered
**🌍 Context Diagram** – Shows how the Budget Tracker interacts with users and external systems.

```mermaid
C4Context
  title System Context Diagram for Minimalist Budget Tracker
  Enterprise_Boundary(fintechDomain, "Personal Finance Management") {
    Person(user, "User", "An individual who manages their budget manually.")
    System(budgetTracker, "Minimalist Budget Tracker", "A simple, web-based tool for manual finance tracking.")
    
    System_Ext(emailService, "Email Notification Service", "Sends budget summaries to users.")
    
    Rel(user, budgetTracker, "Uses to log income, expenses, and track balance manually")
    Rel(budgetTracker, emailService, "Sends budget-related email notifications")
  }

```


**📦 Container Diagram** – Breaks down the system into frontend, backend, and database components.

```mermaid

   C4Container
  title Container Diagram for Minimalist Budget Tracker

  Person(user, "User", "Uses the application to track personal finances")

  Container_Boundary(systemBoundary, "Minimalist Budget Tracker") {
    Container(webApp, "Web Application", "React", "Allows users to log and track finances")
    ContainerDb(database, "Database", "MySQL", "Stores user and transaction data")
    Container(notificationService, "Notification Service", "Node.js", "Processes and sends email notifications")
  }

  System_Ext(extEmailService, "Email Service", "SMTP", "External service for sending emails")
  
  Rel(user, webApp, "Logs transactions")
  Rel(webApp, database, "Reads/Writes user data and transactions")
  Rel(webApp, notificationService, "Triggers email notifications")
  Rel(notificationService, extEmailService, "Sends emails via")

```
