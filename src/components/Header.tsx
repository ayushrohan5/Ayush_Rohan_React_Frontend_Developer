import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { themes } from "../themes/themes";

export default function Header() {
  // Context se theme aur setter function
  const { theme, setThemeByName } = useContext(ThemeContext);

  // Local state for dropdown value
  const [selectedTheme, setSelectedTheme] = useState<string>("theme1");

  // Jab bhi theme change ho (ya page reload ho), dropdown update ho jaye
  useEffect(() => {
    const activeTheme = Object.keys(themes).find(
      (key) => themes[key as keyof typeof themes].name === theme.name
    );
    if (activeTheme) {
      setSelectedTheme(activeTheme);
    }
  }, [theme]);

  // Dropdown change handle
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setThemeByName(e.target.value as keyof typeof themes);
    setSelectedTheme(e.target.value);
  };

  return (
    <header className="fixed top-0 left-0 w-full flex flex-col sm:flex-row justify-between items-center p-4 shadow-md bg-white z-50">
      {/* App Logo/Name */}
      <h1 className="font-bold text-lg mb-2 sm:mb-0">🎨 Multi-Theme App</h1>

      {/* Navigation + Theme Dropdown */}
      <nav className="flex flex-wrap justify-center sm:justify-end items-center gap-3">
        {/* 🔗 Navigation links */}
        <Link className="text-sm sm:text-base" to="/">Home</Link>
        <Link className="text-sm sm:text-base" to="/about">About</Link>
        <Link className="text-sm sm:text-base" to="/contact">Contact</Link>

        {/* Dropdown for theme selection */}
        <select
          className="ml-2 p-1 border rounded text-sm sm:text-base"
          value={selectedTheme}
          onChange={handleThemeChange}
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </nav>
    </header>
  );
}
