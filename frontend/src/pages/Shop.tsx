import ProductCard from "../Components/Products/ProductCard";
import { products } from "../data/products";

const Shop = () => {
  return (
    <section className="bg-[#fdf6ee] px-4 py-16 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-zentry text-4xl sm:text-5xl text-gray-900">
            Shop
          </h1>
          <p className="mt-2 text-gray-600">
            Explore all drones and smart gadgets
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Shop;
