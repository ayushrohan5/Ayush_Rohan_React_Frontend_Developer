import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Card({ product }: { product: any }) {
  const { theme } = useContext(ThemeContext); // Get current theme

  return (
    <motion.div
      // Background and text color now come from theme
      style={{ background: theme.background === "#121212" ? "#1e1e1e" : "#ffffff", color: theme.text }}
      className="p-4 shadow-md rounded-lg transition-all duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <img src={product.image} alt={product.title} className="h-32 mx-auto"/>
      <h3 className="text-lg font-bold mt-2">{product.title}</h3>
      <p className="text-sm">${product.price}</p>
      <button className="mt-2 px-3 py-1 bg-green-500 text-white rounded">Buy Now</button>
    </motion.div>
  );
}
