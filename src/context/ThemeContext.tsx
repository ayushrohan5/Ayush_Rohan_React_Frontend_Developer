import React, { createContext, useState, useEffect } from "react";
import { themes, type ThemeType } from "../themes/themes";

// Context type for theme state and updater function
type ThemeContextType = {
  theme: ThemeType;
  setThemeByName: (name: keyof typeof themes) => void;
};

// Create ThemeContext with default value
export const ThemeContext = createContext<ThemeContextType>({
  theme: themes.theme1,
  setThemeByName: () => {},
});

// ThemeProvider to wrap the whole app
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Current theme state
  const [theme, setTheme] = useState<ThemeType>(themes.theme1);

  // On first load, get theme from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && savedTheme in themes) {
      setTheme(themes[savedTheme as keyof typeof themes]);
    }
  }, []);

  // Function to change theme and store selection in localStorage
  const setThemeByName = (name: keyof typeof themes) => {
    setTheme(themes[name]);
    localStorage.setItem("theme", name);
  };

  return (
    // Provide theme to entire app
    <ThemeContext.Provider value={{ theme, setThemeByName }}>
      {children}
    </ThemeContext.Provider>
  );
};
