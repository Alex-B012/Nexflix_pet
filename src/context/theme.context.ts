import { createContext } from "react";

const themeColors = { light: "light", dark: "dark" } as const;

type Theme = (typeof themeColors)[keyof typeof themeColors];

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export { themeColors, ThemeContext };
