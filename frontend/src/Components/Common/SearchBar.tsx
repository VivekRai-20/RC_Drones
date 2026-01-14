import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../contexts/SearchContext";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { performSearch } = useSearch();

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      performSearch(searchTerm);
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setIsOpen(false);
      setSearchTerm("");
    }
  };

  return (
    <div className="relative">
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
            onKeyDown={(e) => e.key === "Escape" && handleClose()}
            className="w-40 sm:w-56 rounded-md border border-black/20 bg-[#fffaf3] px-3 py-1.5 text-sm text-gray-800 outline-none focus:border-black"
          />

          <button
            type="button"
            onClick={handleClose}
            className="text-gray-700 hover:text-black transition cursor-pointer"
          >
            <FiX size={18} />
          </button>
        </form>
      ) : (
        <button
          onClick={handleSearchToggle}
          className="text-gray-700 hover:text-black transition cursor-pointer"
        >
          <FiSearch size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
