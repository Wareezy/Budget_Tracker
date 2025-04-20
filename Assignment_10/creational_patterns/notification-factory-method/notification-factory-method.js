class NotificationSender {
    send(userId, message) {
      throw new Error("Method must be implemented");
    }
  }
  
  export class EmailNotification extends NotificationSender {
    send(userId, message) {
      return `Email sent to user ${userId}: ${message}`;
    }
  }
  
  export class SMSNotification extends NotificationSender {
    send(userId, message) {
      return `SMS sent to user ${userId}: ${message}`;
    }
  }
  
  export class NotificationFactory {
    static getSender(method) {
      if (method === 'email') return new EmailNotification();
      if (method === 'sms') return new SMSNotification();
      throw new Error("Unsupported notification method");
    }
  }  