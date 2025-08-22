import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CartProvider } from "./context/cartcontext";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <App />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          // Default styles
          style: {
            background: "#333",
            color: "#fff",
          },
          // Custom per type
          success: {
            style: {
              background: "#05df72",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      />
    </CartProvider>
  </StrictMode>
);
