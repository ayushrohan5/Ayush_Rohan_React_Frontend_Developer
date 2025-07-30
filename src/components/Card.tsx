import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// Card component for displaying product info
export default function Card({ product }: { product: any }) {
  const { theme } = useContext(ThemeContext); // Get current theme

  return (
    <motion.div
      style={{ background: theme.cardBackground, color: theme.text }}
      className="p-4 shadow-md rounded-lg transition-all duration-300 w-full max-w-sm mx-auto sm:mx-0"
      whileHover={{ scale: 1.05 }}
    >
      {/* Product Image */}
      <img src={product.image} alt={product.title} className="h-32 mx-auto object-contain"/>
      
      {/* Product Title */}
      <h3 className="text-base sm:text-lg font-bold mt-2 text-center sm:text-left">{product.title}</h3>
      
      {/* Product Price */}
      <p className="text-sm text-center sm:text-left">${product.price}</p>
      
      {/* Buy Button */}
      <button className="mt-2 px-3 py-1 bg-green-500 text-white rounded w-full sm:w-auto">
        Buy Now
      </button>
    </motion.div>
  );
}
