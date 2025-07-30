import React, { createContext, useState, useEffect } from "react";
import { themes, type ThemeType } from "../themes/themes";

type ThemeContextType = {
  theme: ThemeType;
  setThemeByName: (name: keyof typeof themes) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: themes.theme1,
  setThemeByName: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(themes.theme1);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && savedTheme in themes) {
      setTheme(themes[savedTheme as keyof typeof themes]);
    }
  }, []);

  const setThemeByName = (name: keyof typeof themes) => {
    setTheme(themes[name]);
    localStorage.setItem("theme", name);
  };

  return (
    <ThemeContext.Provider value={{ theme, setThemeByName }}>
      {children}
    </ThemeContext.Provider>
  );
};
