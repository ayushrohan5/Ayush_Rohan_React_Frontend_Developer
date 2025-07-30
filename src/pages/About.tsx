import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.text, fontFamily: theme.font }}
         className={`min-h-screen pt-20 transition-all duration-500 ${theme.layout}`}>
      <h2 className="text-2xl font-bold">About Us</h2>
      <p>We are a demo app showcasing multi-theme switching in React.</p>
    </div>
  );
}
