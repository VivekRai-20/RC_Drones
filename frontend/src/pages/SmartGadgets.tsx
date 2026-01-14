import ProductCard from "../Components/Products/ProductCard";
import { getProductsByCategory } from "../data/products";

const SmartGadgets = () => {
  const smartGadgets = getProductsByCategory("accessories");

  return (
    <section className="bg-[#fdf6ee] px-4 py-16 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-zentry text-4xl sm:text-5xl text-gray-900">
            Smart Gadgets
          </h1>
          <p className="mt-2 max-w-xl text-sm sm:text-base text-gray-600">
            Smart accessories and gadgets to elevate your drone experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {smartGadgets.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SmartGadgets;
