import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Card from "../components/Card";

export default function Home() {
  const { theme } = useContext(ThemeContext); // Get current theme
  const [products, setProducts] = useState<any[]>([]); // Store products fetched from API

  // Fetch products from FakeStore API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 6))); // Limit to 6 products
  }, []);

  return (
    <div 
      // Apply theme styles dynamically
      style={{ background: theme.background, color: theme.text, fontFamily: theme.font }}
      className={`min-h-screen pt-20 transition-all duration-500 ${theme.layout}`}>
      
      {/* Page Title */}
      <h2 className="text-2xl font-bold">Welcome to Multi-Theme App</h2>
      <p className="mb-4">Explore products and switch themes!</p>

      {/* Display product cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
