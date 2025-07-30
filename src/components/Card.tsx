import { motion } from "framer-motion";

export default function Card({ product }: { product: any }) {
  return (
    <motion.div
      className="p-4 shadow-md rounded-lg bg-white"
      whileHover={{ scale: 1.05 }}
    >
      <img src={product.image} alt={product.title} className="h-32 mx-auto"/>
      <h3 className="text-lg font-bold mt-2">{product.title}</h3>
      <p className="text-sm">${product.price}</p>
      <button className="mt-2 px-3 py-1 bg-green-500 text-white rounded">Buy Now</button>
    </motion.div>
  );
}
