import {motion as Motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";

const ProductCard = ({ doces, addToCart }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card-item rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}>
      <div className="p-4">
        <h3 className="font-bold text-lg text-[#FAF8F6]">{doces.name}</h3>
        <p className="text-gray-300 text-sm mt-1">{doces.description}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="font-bold text-[#C2A370]">
            R$ {doces.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(doces)}
            className="bg-[#C2A370] text-[#FAF8F6] p-2 rounded-full hover:bg-[#c2a370af] transition-colors"
          >
            <FiPlus size={16} />
          </button>
        </div>
      </div>
    </Motion.div>
  );
};

export default ProductCard;
