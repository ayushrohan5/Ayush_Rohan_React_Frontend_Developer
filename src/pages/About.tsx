import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      // Apply theme colors
      style={{
        background: theme.background,
        color: theme.text,
        fontFamily: theme.font,
      }}
      // Force a mobile-friendly flex-column layout for About page
      className="min-h-screen pt-24 px-6 flex flex-col items-center text-center space-y-4 transition-all duration-500"
    >
      {/* About Section */}
      <h2 className="text-xl sm:text-2xl font-bold">About Us</h2>
      <p className="max-w-xl text-sm sm:text-base leading-relaxed">
        Welcome to <strong>Multi-Theme App</strong>.  
        This is a demo React project showcasing how you can switch between  
        **three distinct themes** (Minimalist, Dark Mode, Colorful)  
        with Context API, localStorage persistence, and responsive layouts.  
        Try switching themes and resizing the screen to see it adapt.
      </p>
    </div>
  );
}
