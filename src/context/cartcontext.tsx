import { createContext, useContext, useState, type ReactNode } from "react";
import type { CartItem } from "../components/product-details";

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        // Update quantity if product already exists
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }

      // 🔥 Keep old products, add new one
      return [...prev, product];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
