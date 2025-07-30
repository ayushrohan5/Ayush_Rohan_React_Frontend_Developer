import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { themes } from "../themes/themes";

export default function Header() {
  const { theme, setThemeByName } = useContext(ThemeContext);

  // Local state for dropdown value
  const [selectedTheme, setSelectedTheme] = useState<string>("theme1");

  
  useEffect(() => {
    // find which theme is active by comparing theme object
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
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 shadow-md bg-white z-50">
      <h1 className="font-bold text-lg">🎨 Multi-Theme App</h1>

      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {/* Controlled dropdown with correct value */}
        <select
          className="ml-4 p-1 border rounded"
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
