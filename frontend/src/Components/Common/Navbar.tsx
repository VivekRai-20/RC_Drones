import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-black/10 bg-[#fdf6ee]/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-800">
            <Link to="/" className="hover:text-black transition cursor-pointer">Home</Link>
            <Link to="/popular" className="hover:text-black transition cursor-pointer">Popular</Link>
            <Link to="/shop" className="hover:text-black transition cursor-pointer">Shop</Link>
            <Link to="/smart-gadgets" className="hover:text-black transition cursor-pointer">Smart Gadgets</Link>
            <Link to="/about" className="hover:text-black transition cursor-pointer">About Us</Link>
           
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4 text-gray-800">
            <SearchBar />

            <Link to="/login" className="hover:text-black transition cursor-pointer">
              <FiUser size={18} />
            </Link>

            {/* Cart Drawer Button */}
            <CartDrawer />

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden hover:text-black transition cursor-pointer"
            >
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-black/10 bg-[#fdf6ee] px-6 py-4">
          <nav className="flex flex-col gap-4 text-sm text-gray-800">
            <Link to="/" onClick={() => setOpen(false)} className="cursor-pointer">Home</Link>
            <Link to="/popular" onClick={() => setOpen(false)} className="cursor-pointer">Popular</Link>
            <Link to="/shop" onClick={() => setOpen(false)} className="cursor-pointer">Shop</Link>
            <Link to="/smart-gadgets" onClick={() => setOpen(false)} className="cursor-pointer">
              Smart Gadgets
            </Link>
            <Link to="/about" onClick={() => setOpen(false)} className="cursor-pointer">About Us</Link>
            <Link to="/terms" onClick={() => setOpen(false)} className="cursor-pointer">Terms</Link>
            <Link to="/privacy" onClick={() => setOpen(false)} className="cursor-pointer">Privacy</Link>
            <Link to="/account" onClick={() => setOpen(false)} className="cursor-pointer">
              My Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
