import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.text, fontFamily: theme.font }}
         className={`min-h-screen pt-20 transition-all duration-500 ${theme.layout}`}>
      <h2 className="text-2xl font-bold">Contact</h2>
      <form className="space-y-2">
        <input type="text" placeholder="Your Name" className="border p-2 rounded w-full"/>
        <input type="email" placeholder="Your Email" className="border p-2 rounded w-full"/>
        <textarea placeholder="Your Message" className="border p-2 rounded w-full"></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
}
