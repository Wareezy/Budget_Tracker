import { InMemoryNotificationRepository } from "../repositories/inmemory/inmemory-notification-repository.js";
import { Notification } from "../../Assignment_10/src/notification.js";

test("CRUD operations for Notification", () => {
  const repo = new InMemoryNotificationRepository();
  const notification = new Notification("n1", "u1", "Budget limit reached!");

  // Create/Save
  repo.save(notification);
  expect(repo.findById("n1")).toBe(notification);

  // Read All
  expect(repo.findAll()).toContain(notification);

  // Delete
  repo.delete("n1");
  expect(repo.findById("n1")).toBeNull();
});