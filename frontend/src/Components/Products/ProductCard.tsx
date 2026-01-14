import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import type { Product } from "../../data/products";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

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
  return (
    <Link
      to={`/product/${product.id}`}
      className="group rounded-2xl border border-black/10 bg-white/70
      backdrop-blur p-4 transition hover:shadow-lg cursor-pointer"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl bg-black/5">
        <img
          src={product.media.find((m) => m.type === "image")?.src || "/images/placeholder.jpg"}
          alt={product.name}
          className="h-64 w-full object-cover transition-transform
          duration-300 group-hover:scale-105 cursor-pointer"
        />
      </div>

      {/* Info */}
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-900">
          {product.name}
        </h3>

        <p className="mt-1 text-sm text-gray-600">
          ₹{product.price.toLocaleString()}
        </p>

        <div className="mt-4 flex gap-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 rounded-md bg-black
            py-2 text-sm text-white hover:bg-gray-800 transition cursor-pointer"
          >
            <FiShoppingCart size={16} />
            Add to Cart
          </button>
          <button
            className="flex-1 text-center text-sm rounded-md border border-black/20
            py-2 text-gray-700 hover:bg-gray-100 transition cursor-pointer"
          >
            Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
