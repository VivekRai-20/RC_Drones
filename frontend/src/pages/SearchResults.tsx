import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../Components/Products/ProductCard";
import { useSearch } from "../contexts/SearchContext";
import { FiSearch } from "react-icons/fi";

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";
    const { searchResults, isSearching, performSearch } = useSearch();

    useEffect(() => {
        if (query) {
            performSearch(query);
        }
    }, [query, performSearch]);

    return (
        <section className="bg-[#fdf6ee] px-4 py-16 sm:px-8 lg:px-16">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="font-zentry text-4xl sm:text-5xl text-gray-900 mb-4">
                        Search Results
                    </h1>
                    <div className="flex items-center gap-2 text-gray-600">
                        <FiSearch size={18} />
                        <span>
                            {query ? `Searching for "${query}"` : "No search query provided"}
                        </span>
                    </div>
                </div>

                {/* Results */}
                {isSearching ? (
                    <div className="animate-pulse">
                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {[...Array(8)].map((_, index) => (
                                <div key={index} className="rounded-2xl border border-black/10 bg-white/70 p-4">
                                    <div className="h-64 bg-gray-200 rounded-xl mb-4"></div>
                                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : searchResults.length > 0 ? (
                    <>
                        <p className="text-gray-600 mb-8">
                            Found {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for "{query}"
                        </p>
                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {searchResults.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </>
                ) : query ? (
                    <div className="text-center py-16">
                        <div className="max-w-md mx-auto">
                            <FiSearch size={48} className="text-gray-400 mx-auto mb-4" />
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                No results found
                            </h2>
                            <p className="text-gray-600 mb-6">
                                We couldn't find any products matching "{query}". Try searching with different keywords.
                            </p>
                            <button
                                onClick={() => window.history.back()}
                                className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition cursor-pointer"
                            >
                                Go Back
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="max-w-md mx-auto">
                            <FiSearch size={48} className="text-gray-400 mx-auto mb-4" />
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                No search query
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Please enter a search term to find products.
                            </p>
                            <button
                                onClick={() => window.history.back()}
                                className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition cursor-pointer"
                            >
                                Go Back
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SearchResults;
