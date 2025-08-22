import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartItems, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement | null>(null);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  // Close cart if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative xl:px-50 pt-8 px-5">
      <div className="flex justify-between items-center border-b border-gray-500">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-7">
          <img src="/images/logo.svg" alt="logo" className="pb-7" />

          {/* Desktop Nav */}
          <nav>
            <ul className="hidden xl:flex items-end gap-3">
              {["Collections", "Men", "Women", "About", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="block min-w-20 text-center font-semibold text-base tracking-wider border-b-[3px] border-transparent hover:border-(--primary) pb-5 text-(--grayish-blue) hover:text-(--dark-blue) capitalize transition-all duration-200 ease-in-out"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
        {/* Right: Cart + Avatar + Hamburger */}
        <div className="flex items-center gap-5 xl:gap-10 pb-7 relative">
          {/* Cart */}
          <div className="relative" ref={cartRef}>
            <img
              src="/images/icon-cart.svg"
              alt="cart"
              className="cursor-pointer"
              loading="lazy"
              onClick={() => setCartOpen(!cartOpen)}
            />
            {cartOpen && (
              <div className="absolute right-0 mt-3 w-80 bg-white shadow-lg rounded-lg z-50">
                <h3 className="px-4 py-3 font-semibold border-b">Cart</h3>
                <div className="p-4">
                  {cartItems.length === 0 ? (
                    <p className="p-4 text-center text-(--dark-grayish-blue)">
                      Your cart is empty
                    </p>
                  ) : (
                    <ul>
                      {cartItems.map((item) => (
                        <li
                          key={item.id}
                          className="flex items-center gap-3 p-3"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-12 h-12 rounded"
                          />
                          <div className="flex-1">
                            <p className="text-sm">{item.title}</p>
                            <p className="text-sm text-gray-500">
                              ${item.price} × {item.quantity}{" "}
                              <span className="font-bold">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </p>
                          </div>
                          <button onClick={() => removeFromCart(item.id)}>
                            <img src="/images/icon-delete.svg" alt="delete" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                  {cartItems.length > 0 && (
                    <button className="bg-(--primary) hover:opacity-80 text-white w-full py-3 rounded-lg font-semibold transition">
                      Checkout
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Avatar */}
          <div>
            <img
              src="/images/image-avatar.png"
              alt="avatar"
              className="w-12 h-12 border-2 border-transparent hover:border-(--primary) cursor-pointer rounded-full transition-all duration-100 ease-in"
            />
          </div>

          {/* Hamburger (Mobile Only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="h-screen absolute z-50 top-full left-0 w-full bg-white shadow-md xl:hidden">
            <ul className="flex flex-col items-start gap-4 p-5">
              {["Collections", "Men", "Women", "About", "Contact"].map(
                (link) => (
                  <li key={link} className="w-full">
                    <a
                      href="#"
                      className="block w-full text-left font-semibold text-base text-(--grayish-blue) hover:text-(--dark-blue) capitalize transition-all duration-200 ease-in-out"
                      onClick={() => setIsOpen(false)}
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        )}{" "}
      </div>
    </header>
  );
};

export default Header;
