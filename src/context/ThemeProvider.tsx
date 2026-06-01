import { useEffect, useState, type ReactNode } from "react";
import { themeColors, ThemeContext } from "./theme.context";

type Theme = (typeof themeColors)[keyof typeof themeColors];

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || themeColors.dark,
  );

  useEffect(() => {
    if (theme === themeColors.dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) =>
      prev === themeColors.dark ? themeColors.light : themeColors.dark,
    );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
