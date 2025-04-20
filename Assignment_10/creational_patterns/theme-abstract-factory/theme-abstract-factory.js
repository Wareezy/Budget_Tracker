// Theme product interfaces
class Theme {
    getName() {}
  }
  
  class LightTheme extends Theme {
    getName() {
      return "Light Theme: White background, black text";
    }
  }
  
  class DarkTheme extends Theme {
    getName() {
      return "Dark Theme: Dark background, white text";
    }
  }
  
  // Abstract Factory
  class ThemeFactory {
    createTheme() {}
  }
  
  export class LightThemeFactory extends ThemeFactory {
    createTheme() {
      return new LightTheme();
    }
  }
  
  export class DarkThemeFactory extends ThemeFactory {
    createTheme() {
      return new DarkTheme();
    }
  }  