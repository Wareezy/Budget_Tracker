import { DarkThemeFactory, LightThemeFactory } from "../creational_patterns/abstract-factory/theme-abstract-factory.js";

test("creates dark theme", () => {
  const theme = new DarkThemeFactory().createTheme();
  expect(theme.getName()).toMatch(/Dark Theme/);
});

test("creates light theme", () => {
  const theme = new LightThemeFactory().createTheme();
  expect(theme.getName()).toMatch(/Light Theme/);
});
