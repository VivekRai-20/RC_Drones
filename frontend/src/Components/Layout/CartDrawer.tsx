import {
  FiShoppingCart,
  FiX,
  FiPlus,
  FiMinus,
  FiTrash2
} from "react-icons/fi";
import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    itemCount,
    isDrawerOpen,
    openCart,
    closeCart,
  } = useCart();

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={openCart}
        className="relative text-gray-800 hover:text-black transition cursor-pointer"
      >
        <FiShoppingCart size={18} />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 rounded-full bg-black px-1.5 text-[10px] text-white">
            {itemCount}
          </span>
        )}
      </button>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          onClick={closeCart}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[85%] sm:w-[90%] max-w-sm
        bg-[#fdf6ee] shadow-xl
        transform transition-transform duration-300 ease-in-out
        ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-120 flex-col">

          {/* Header */}
          <div className="flex bg-[#fdf6ee] items-center justify-between border-b border-black/10 px-4 py-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Your Cart
            </h2>
            <button onClick={closeCart} className="cursor-pointer hover:text-gray-600 transition">
              <FiX size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 bg-[#fdf6ee] overflow-y-auto px-4 py-6">
            {cart.length === 0 ? (
              <p className="mt-10 text-center text-gray-500">
                Your cart is empty
              </p>
            ) : (
              <ul className="space-y-5">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex gap-4 border-b border-black/10 pb-4"
                  >
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-md object-cover"
                    />

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        ₹{item.price.toLocaleString()}
                      </p>

                      {/* Quantity */}
                      <div className="mt-2 flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, Math.max(1, item.qty - 1))
                          }
                          className="rounded border border-black/20 p-1 cursor-pointer hover:bg-gray-100 transition"
                        >
                          <FiMinus size={14} />
                        </button>

                        <span className="w-6 text-center text-sm">
                          {item.qty}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.qty + 1)
                          }
                          className="rounded border border-black/20 p-1 cursor-pointer hover:bg-gray-100 transition"
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col items-end justify-between">
                      <p className="font-medium text-gray-900">
                        ₹{(item.price * item.qty).toLocaleString()}
                      </p>

                      {/* BIGGER REMOVE BUTTON */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="mt-2 flex items-center gap-1 text-xs text-red-500 hover:underline cursor-pointer"
                      >
                        <FiTrash2 size={14} />
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          <div className="border-t bg-[#fdf6ee] border-black/10 px-4 py-4">
            <div className="mb-3 flex justify-between text-sm text-gray-800">
              <span>
                Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
              </span>
              <span className="font-medium">
                ₹{cartTotal.toLocaleString()}
              </span>
            </div>

            <Link
              to="/checkout"
              onClick={closeCart}
              className={`block w-full rounded-md bg-black py-2 text-center text-sm text-white
              hover:opacity-90 transition cursor-pointer
              ${cart.length === 0 ? "pointer-events-none opacity-50" : ""}`}
            >
              Checkout
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CartDrawer;
