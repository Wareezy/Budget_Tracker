export class Notification {
    #notificationId;
    #userId;
    #message;
    #type;
    #sentAt;
    #status;
  
    constructor(notificationId, userId, message, type = 'info', status = 'sent') {
      this.#notificationId = notificationId;
      this.#userId = userId;
      this.#message = message;
      this.#type = type;
      this.#sentAt = new Date();
      this.#status = status;
    }
  
    send() {
      this.#status = 'sent';
    }
  
    acknowledge() {
      this.#status = 'acknowledged';
    }
  
    expire() {
      this.#status = 'expired';
    }
  
    getNotificationDetails() {
      return {
        id: this.#notificationId,
        message: this.#message,
        type: this.#type,
        status: this.#status
      };
    }
  }