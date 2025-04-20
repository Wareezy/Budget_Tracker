export class User {
    constructor(userId, email, passwordHash, name, theme, currencyPreference) {
      this.userId = userId;
      this.email = email;
      this.passwordHash = passwordHash;
      this.name = name;
      this.theme = theme || 'light';
      this.currencyPreference = currencyPreference || 'USD';
      this.authStatus = 'unverified';
    }
  }
  
  export class UserBuilder {
    constructor(userId, email, passwordHash) {
      this.userId = userId;
      this.email = email;
      this.passwordHash = passwordHash;
      this.name = "";
      this.theme = "light";
      this.currencyPreference = "USD";
    }
  
    setName(name) {
      this.name = name;
      return this;
    }
  
    setTheme(theme) {
      this.theme = theme;
      return this;
    }
  
    setCurrency(currency) {
      this.currencyPreference = currency;
      return this;
    }
  
    build() {
      return new User(
        this.userId,
        this.email,
        this.passwordHash,
        this.name,
        this.theme,
        this.currencyPreference
      );
    }
  }