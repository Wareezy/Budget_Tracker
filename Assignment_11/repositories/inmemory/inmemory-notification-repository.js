import { NotificationRepository } from "../notification-repository.js";

export class InMemoryNotificationRepository extends NotificationRepository {
  constructor() {
    super();
    this.storage = new Map();
  }

  save(notification) {
    this.storage.set(notification.getNotificationDetails().id, notification);
  }

  findById(id) {
    return this.storage.has(id) ? this.storage.get(id) : null;
  }

  findAll() {
    return Array.from(this.storage.values());
  }

  delete(id) {
    this.storage.delete(id);
  }
}