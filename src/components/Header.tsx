import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import type { themes } from "../themes/themes";

export default function Header() {
  const { setThemeByName } = useContext(ThemeContext);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 shadow-md bg-white z-50">
      <h1 className="font-bold text-lg">🎨 Multi-Theme App</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <select
          className="ml-4 p-1 border rounded"
          onChange={(e) => setThemeByName(e.target.value as keyof typeof themes)}
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </nav>
    </header>
  );
}
