import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import type { Product } from "../../data/products";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const { scrollToTop } = useScrollToTop();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.media.find((m) => m.type === "image")?.src || ""
    });
  };

  const handleDetailsClick = () => {
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };
  return (
    <Link
      to={`/product/${product.id}`}
      className="group rounded-2xl border border-black/10 bg-white/70
      backdrop-blur p-3 sm:p-4 transition hover:shadow-lg cursor-pointer"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl bg-black/5">
        <img
          src={product.media.find((m) => m.type === "image")?.src || "/images/placeholder.jpg"}
          alt={product.name}
          className="h-48 sm:h-64 w-full object-cover transition-transform
          duration-300 group-hover:scale-105 cursor-pointer"
        />
      </div>

      {/* Info */}
      <div className="mt-3 sm:mt-4">
        <h3 className="text-base sm:text-lg font-medium text-gray-900">
          {product.name}
        </h3>

        <p className="mt-1 text-sm text-gray-600">
          ₹{product.price.toLocaleString()}
        </p>

        <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 rounded-md bg-black
            py-1.5 sm:py-2 text-xs sm:text-sm text-white hover:bg-gray-800 transition cursor-pointer"
          >
            <FiShoppingCart size={14} className="sm:size={16}" />
            Add to Cart
          </button>
          <button
            onClick={handleDetailsClick}
            className="flex-1 text-center text-xs sm:text-sm rounded-md border border-black/20
            py-1.5 sm:py-2 text-gray-700 hover:bg-gray-100 transition cursor-pointer"
          >
            Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
