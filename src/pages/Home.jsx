import { useState } from "react";
import { motion as Motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { categories } from "../data/menu";

const Home = ({ docesMenu, addToCart }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredDoces =
  activeCategory === "Todos"
    ? docesMenu
    : docesMenu.filter((doces) => doces.category === activeCategory);


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#FAF8F6]">
        Cardápio
      </h1>

      <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 mr-2 rounded-full whitespace-nowrap ${
              activeCategory === category
                ? "bg-[#C2A370] text-[#FAF8F6]"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <Motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredDoces.map((doces) => (
          <ProductCard key={doces.id} doces={doces} addToCart={addToCart} />
        ))}
      </Motion.div>
    </div>
  );
};

export default Home;
