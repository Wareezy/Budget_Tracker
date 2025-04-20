export class User {
    #userId;
    #email;
    #passwordHash;
    #name;
    #theme;
    #currencyPreference;
    #authStatus;
  
    constructor(userId, email, passwordHash, name, theme, currencyPreference, authStatus = 'unverified') {
      this.#userId = userId;
      this.#email = email;
      this.#passwordHash = passwordHash;
      this.#name = name;
      this.#theme = theme;
      this.#currencyPreference = currencyPreference;
      this.#authStatus = authStatus;
    }
  
    register() {
      this.#authStatus = 'pending_verification';
    }
  
    login() {
      return `Welcome back, ${this.#name}`;
    }
  
    updatePreferences({ theme, currencyPreference }) {
      if (theme) this.#theme = theme;
      if (currencyPreference) this.#currencyPreference = currencyPreference;
    }
  
    deactivateAccount() {
      this.#authStatus = 'deactivated';
    }
  
    get userId() {
      return this.#userId;
    }
  
    get name() {
      return this.#name;
    }
  
    get email() {
      return this.#email;
    }
  }  