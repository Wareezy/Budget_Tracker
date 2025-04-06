# 🔄 Reflection

## 📌 Challenges in Choosing Granularity for States and Actions

One of the main challenges I faced while creating the diagrams was choosing the right level of **granularity**—deciding how detailed each state or action should be. If I added too much detail, the diagrams quickly became cluttered and difficult to follow. But if I simplified too much, they lacked the depth needed to properly communicate the system’s behavior.

For example, in the **Transaction** state diagram, I chose to abstract validations and UI-specific states into a single transition like `Submitted → Validated`, rather than breaking down every input field check. This helped keep the diagram readable while still reflecting the essential logic. It wasn’t always easy to decide what to include or leave out, and I had to constantly balance **clarity with completeness**.

---

## 🔁 Aligning Diagrams with Agile User Stories

Aligning the diagrams with Agile **user stories** presented another interesting challenge. Agile stories are written from a user’s perspective and focus on **outcomes and value**, whereas diagrams—especially state diagrams—tend to reflect **internal system behavior**.

To bridge that gap, I closely examined the **acceptance criteria** for each user story and used that to inform what should appear in the diagrams. For instance:
- US001, about logging a transaction, directly inspired states like `Draft`, `Submitted`, and `Logged`.
- US008, focusing on secure authentication, influenced both the **User Login** activity diagram and the **Authentication Session** state diagram.

This required frequent back-and-forth between the stories, requirements, and system logic to make sure everything was aligned.

---

## 🔄 Comparing State Diagrams vs. Activity Diagrams

| Aspect | State Diagrams | Activity Diagrams |
|--------|----------------|-------------------|
| **Focus** | How an object behaves over time | The flow of actions or decisions |
| **Best For** | Modeling lifecycle events (like transactions) | Showing workflows and user interactions |
| **Biggest Challenge** | Avoiding too many micro-states | Keeping flows simple but informative |
| **Example** | The **Transaction** state diagram models stages like `Draft`, `Validated`, and `Deleted`. | The **Add Transaction** activity diagram outlines each user/system step from start to confirmation. |

In my experience, **state diagrams** were better suited for representing the **backend lifecycle and system logic**, while **activity diagrams** worked well for illustrating **step-by-step user interactions**. Using both allowed me to get a full view of how the system functions—from what the user sees, to how the system responds.

---

## ✅ Conclusion

Overall, this process helped me gain a much deeper understanding of the system I was designing. I had to think critically about how users interact with the app, how data flows, and how different components behave over time. Even though there were challenges in terms of diagram complexity and alignment with Agile methods, I found the exercise rewarding. It taught me how to represent technical details in a way that connects clearly back to both **stakeholder needs** and **functional goals**.
