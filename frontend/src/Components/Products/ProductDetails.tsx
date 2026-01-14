import { useState, useEffect } from "react";
import {
  FiStar,
  FiMinus,
  FiPlus,
  FiShoppingCart,
  FiPlay,
  FiArrowLeft,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { useCart } from "../../contexts/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, type Product } from "../../data/products";

const ProductDetails = () => {
  const [qty, setQty] = useState(1);
  const [activeMedia, setActiveMedia] = useState<{ type: 'video' | 'image'; src: string } | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { id } = useParams();

  const imageMedia = product?.media.filter(m => m.type === 'image') || [];

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      if (foundProduct) {
        setProduct(foundProduct);
        setActiveMedia(foundProduct.media[0]);
      }
      setLoading(false);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.media.find((m) => m.type === "image")?.src || "",
    });
  };

  if (loading) {
    return (
      <section className="bg-[#fdf6ee] px-4 py-8 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-32 mb-6"></div>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="h-[420px] bg-gray-200 rounded-2xl"></div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="bg-[#fdf6ee] px-4 py-8 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate("/shop")}
            className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition cursor-pointer"
          >
            Back to Shop
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#fdf6ee] px-4 py-8 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-sm text-gray-600 hover:text-black transition cursor-pointer"
        >
          <FiArrowLeft className="mr-1" /> Back to shop
        </button>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* MEDIA */}
          <div>
            <div className="relative overflow-hidden rounded-2xl bg-black group">
              {activeMedia && activeMedia.type === "video" ? (
                <video
                  src={activeMedia.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-[420px] w-full object-contain sm:h-[520px] bg-black"
                />
              ) : (
                activeMedia && (
                  <img
                    src={activeMedia.src}
                    alt={product.name}
                    className="h-[420px] w-full object-contain sm:h-[520px] bg-black cursor-pointer"
                  />
                )
              )}

              {/* Navigation arrows */}
              {imageMedia.length > 1 && (
                <>
                  <button
                    onClick={() => {
                      const currentIndex = imageMedia.findIndex(img => img.src === activeMedia?.src);
                      if (currentIndex > 0) {
                        setActiveMedia(imageMedia[currentIndex - 1]);
                      } else {
                        setActiveMedia(imageMedia[imageMedia.length - 1]);
                      }
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <FiChevronLeft className="text-xl" />
                  </button>
                  <button
                    onClick={() => {
                      const currentIndex = imageMedia.findIndex(img => img.src === activeMedia?.src);
                      if (currentIndex < imageMedia.length - 1) {
                        setActiveMedia(imageMedia[currentIndex + 1]);
                      } else {
                        setActiveMedia(imageMedia[0]);
                      }
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <FiChevronRight className="text-xl" />
                  </button>
                </>
              )}
            </div>

            <div className="mt-4 grid grid-cols-5 gap-2">
              {product.media.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveMedia(item)}
                  className={`relative overflow-hidden rounded-lg border transition-all hover:scale-105 cursor-pointer
                    ${activeMedia?.src === item.src
                      ? "border-black ring-2 ring-black/20"
                      : "border-black/20 hover:border-black/40"
                    }`}
                >
                  {item.type === "video" ? (
                    <>
                      <video src={item.src} muted className="h-16 w-full object-cover" />
                      <FiPlay className="absolute inset-0 m-auto text-white text-sm" />
                    </>
                  ) : (
                    <img src={item.src} className="h-16 w-full object-cover" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* INFO */}
          <div className="flex flex-col justify-center">
            <h1 className="font-zentry text-4xl sm:text-5xl text-gray-900">
              {product.name}
            </h1>

            <div className="mt-3 flex items-center gap-2 text-sm text-gray-700">
              <div className="flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={i < Math.floor(product.rating) ? "fill-current" : ""}
                  />
                ))}
              </div>
              <span>({product.reviews} Reviews)</span>
            </div>

            <p className="mt-5 text-2xl font-semibold">₹{product.price}</p>

            <p className="mt-4 max-w-xl text-gray-600">
              {product.description}
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              {product.features.map((feature, index) => (
                <li key={index}>✔ {feature}</li>
              ))}
            </ul>

            {/* ACTIONS */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center rounded-md border">
                <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)} className="px-3 py-2 cursor-pointer hover:bg-gray-100 transition-colors">
                  <FiMinus />
                </button>
                <span className="px-4">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-3 py-2 cursor-pointer hover:bg-gray-100 transition-colors">
                  <FiPlus />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 rounded-md bg-black px-6 py-3 text-sm text-white hover:opacity-90 transition cursor-pointer"
                >
                  <FiShoppingCart /> Add to Cart
                </button>
                <button className="flex-1 rounded-md border border-black/20 px-6 py-3 text-sm hover:bg-gray-50 transition cursor-pointer">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
