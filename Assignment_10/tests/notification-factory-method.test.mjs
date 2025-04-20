import { NotificationFactory } from "../creational_patterns/notification-factory-method/notification-factory-method.js";

test("sends email notification", () => {
  const sender = NotificationFactory.getSender("email");
  const msg = sender.send(1, "Welcome!");
  expect(msg).toMatch(/Email sent to user/);
});

test("throws error for unknown method", () => {
  expect(() => NotificationFactory.getSender("fax")).toThrow("Unsupported notification method");
});