import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Card from "../components/Card";

export default function Home() {
  const { theme } = useContext(ThemeContext); // 🎨 Get current theme
  const [products, setProducts] = useState<any[]>([]); // 🛒 Store products fetched from API

  // Fetch products from FakeStore API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 6))); // Limit to 6 products
  }, []);

  // Detect if current theme is Theme 2
  const isTheme1 = theme.name === "Minimalist";
  const isTheme2 = theme.name === "Dark Mode";
  const isTheme3 = theme.name === "Colorful";

  return (
    <div
      // Apply theme styles dynamically
      style={{
        background: theme.background,
        color: theme.text,
        fontFamily: theme.font,
      }}
      // If Theme 2 is active, force a stacked layout with spacing
      className={`min-h-screen pt-24 transition-all duration-500 ${
        isTheme2 || isTheme3 || isTheme1 ? "flex flex-col items-center p-6 space-y-4" : theme.layout
      }`}
    >
      {/* Page Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
        Welcome to Multi-Theme App
      </h2>
      <p className="mb-4 text-center sm:text-left">
        Explore products and switch themes!
      </p>

      {/* Display product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
