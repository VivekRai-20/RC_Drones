import ProductCard from "../Components/Products/ProductCard";
import { getPopularProducts } from "../data/products";

const Popular = () => {
  const popularProducts = getPopularProducts();

  return (
    <section className="bg-[#fdf6ee] px-4 py-16 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 sm:mb-12 font-zentry text-2xl sm:text-4xl lg:text-5xl">
          Popular Drones
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
