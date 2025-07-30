import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Card from "../components/Card";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 6)));
  }, []);

  return (
    <div style={{ background: theme.background, color: theme.text, fontFamily: theme.font }}
         className={`min-h-screen pt-20 transition-all duration-500 ${theme.layout}`}>
      <h2 className="text-2xl font-bold">Welcome to Multi-Theme App</h2>
      <p className="mb-4">Explore products and switch themes!</p>
      <div className="grid md:grid-cols-3 gap-4">
        {products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
