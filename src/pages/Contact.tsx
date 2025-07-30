import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Contact() {
  const { theme } = useContext(ThemeContext);

  // Detect active themes
  const isTheme1 = theme.name === "Minimalist";
  const isTheme2 = theme.name === "Dark Mode";
  const isTheme3 = theme.name === "Colorful";

  return (
    <div
      // Theme colors applied
      style={{ background: theme.background, color: theme.text, fontFamily: theme.font }}
      
      // Force flex-column for Theme 2 & Theme 3 to avoid layout breaking on mobile
      className={`min-h-screen pt-24 transition-all duration-500 ${
        isTheme2 || isTheme3 || isTheme1
          ? "flex flex-col items-center p-6 space-y-4"
          : theme.layout
      }`}
    >
      {/* Contact Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-center sm:text-left">Contact</h2>

      {/* Contact Form (centered & mobile-friendly) */}
      <form className="space-y-2 w-full max-w-lg">
        <input
          type="text"
          placeholder="Your Name"
          style={{ background: theme.inputBackground, color: theme.text }}
          className="border p-2 rounded w-full placeholder-gray-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          style={{ background: theme.inputBackground, color: theme.text }}
          className="border p-2 rounded w-full placeholder-gray-400"
        />
        <textarea
          placeholder="Your Message"
          style={{ background: theme.inputBackground, color: theme.text }}
          className="border p-2 rounded w-full placeholder-gray-400 h-24"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto">
          Send
        </button>
      </form>
    </div>
  );
}
