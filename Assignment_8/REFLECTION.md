# 🔄 Reflection

## 📌 Challenges in Choosing Granularity for States and Actions

One of the main challenges in designing the diagrams was finding the right **level of granularity**—that is, how detailed each state or action should be. Too much detail would make the diagrams cluttered and hard to read, especially in state transition diagrams. Too little detail, on the other hand, would make the diagrams vague and less useful for developers and stakeholders.

For example, in the **Transaction** state diagram, we chose to abstract validations and UI states into single transitions like `Submitted → Validated` rather than showing each field check individually. This maintained **readability** while still representing core behavior. However, this required careful consideration to avoid omitting critical states that would affect implementation or testing.

---

## 🔁 Aligning Diagrams with Agile User Stories

Aligning the diagrams with **Agile user stories** was another key challenge. Agile stories focus on **user value and outcomes**, whereas diagrams (especially state diagrams) often reflect **technical or backend behavior**.

To bridge this gap, we referred to the **acceptance criteria** of each user story to inform what states and actions should be represented. For instance:
- US001 (logging a transaction) led directly to modeling states like `Draft`, `Submitted`, and `Logged`.
- US008 (secure authentication) influenced both the **Authentication Session** state diagram and the **User Login** activity diagram.

This process required frequent **iteration and cross-referencing** between user stories, sprint tasks, and system behaviors to ensure consistency.

---

## 🔄 Comparing State Diagrams vs. Activity Diagrams

| Aspect | State Diagrams | Activity Diagrams |
|--------|----------------|-------------------|
| **Focus** | Object or system **behavior over time** | **Workflow and control flow** of processes |
| **Best For** | Capturing **lifecycles** (e.g., transactions, accounts) | Modeling **step-by-step interactions** (e.g., user login, report generation) |
| **Challenge** | Avoiding excessive states that reduce clarity | Keeping flows simple without oversimplifying logic |
| **Example** | The **Transaction** state diagram models how a transaction moves through validation, logging, editing, or deletion. | The **Add Transaction** activity diagram shows user interaction, form submission, and system validation. |

While both are powerful, each serves a different purpose:
- **State diagrams** are better for **backend logic and lifecycle** management.
- **Activity diagrams** help visualize **user flow and system tasks** in an intuitive way.

Creating both types provided a **complementary perspective**, allowing us to design with both user experience and backend system behavior in mind.

---

## ✅ Conclusion

Balancing diagram clarity, aligning them with Agile artifacts, and using both **state** and **activity diagrams** strategically helped us represent the system more holistically. Although challenging, this exercise improved our understanding of system dynamics and ensured stronger alignment between **design, development, and stakeholder needs**.
