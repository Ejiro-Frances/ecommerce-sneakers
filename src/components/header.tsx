import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [cartOpen, setCartOpen] = useState(false); // cart dropdown
  const cartRef = useRef<HTMLDivElement | null>(null);

  // 🔒 Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  // Close cart if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Dummy cart items
  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "Fall Limited Edition Sneakers",
      price: 125.0,
      quantity: 2,
      image: "/images/image-product-1-thumbnail.jpg",
    },
  ];

  return (
    <header className="flex justify-between items-center pt-8 px-5 md:px-50 shadow relative">
      {/* Left: Logo + Nav */}
      <div className="flex items-center gap-7">
        <img src="/images/logo.svg" alt="logo" className="pb-7" />

        {/* Desktop Nav */}
        <nav>
          <ul className="hidden md:flex items-end gap-3">
            {["Collections", "Men", "Women", "About", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block min-w-20 text-center font-semibold text-base tracking-wider border-b-[3px] border-transparent hover:border-(--primary) pb-5 text-(--grayish-blue) hover:text-(--dark-blue) capitalize transition-all duration-200 ease-in-out"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Right: Cart + Avatar + Hamburger */}
      <div className="flex items-center gap-5 md:gap-10 pb-7 relative">
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
                  <p className="text-center text-(--grayish-blue) font-medium py-10">
                    Your cart is empty.
                  </p>
                ) : (
                  <div className="flex flex-col gap-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between gap-3"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-md"
                        />
                        <div className="flex-1">
                          <p className="text-sm text-(--dark-blue)">
                            {item.name}
                          </p>
                          <p className="text-sm text-(--grayish-blue)">
                            ${item.price.toFixed(2)} x {item.quantity}{" "}
                            <span className="font-bold text-(--dark-blue)">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </p>
                        </div>
                        <button className="text-red-500 font-bold">✕</button>
                      </div>
                    ))}
                    <button className="bg-(--primary) hover:opacity-80 text-white w-full py-3 rounded-lg font-semibold transition">
                      Checkout
                    </button>
                  </div>
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
          className="md:hidden p-2 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="h-screen absolute z-50 top-full left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-start gap-4 p-5">
            {["Collections", "Men", "Women", "About", "Contact"].map((link) => (
              <li key={link} className="w-full">
                <a
                  href="#"
                  className="block w-full text-left font-semibold text-base text-(--grayish-blue) hover:text-(--dark-blue) capitalize transition-all duration-200 ease-in-out"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
