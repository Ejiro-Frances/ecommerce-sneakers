import { useState } from "react";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : q));

  const handleAddToCart = () => {
    const product: CartItem = {
      id: 1,
      title: "Fall Limited Edition Sneakers",
      price: 125,
      quantity,
      image: "/images/image-product-1-thumbnail.jpg",
    };

    addToCart(product);

    toast.success(`${product.title} added to cart`, {
      icon: "🛒",
    });

    setQuantity(1); // reset after adding
  };

  return (
    <section className="px-4">
      <p className="text-sm tracking-widest uppercase text-(--grayish-blue) font-bold">
        Sneaker Company
      </p>
      <h2 className="text-2xl xl:text-4xl text-black/90 pt-3 font-extrabold">
        Fall Limited Edition Sneakers
      </h2>

      <p className="text-(--dark-grayish-blue) text-sm mt-5">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>

      {/* price */}
      <div className="flex items-center gap-2 mt-5">
        <p className="text-black/80 text-2xl font-extrabold">$125.00</p>
        <span className="w-fit bg-black/85 text-sm font-bold text-(--white) py-0.5 px-1.5 rounded-sm">
          50%
        </span>
      </div>
      <p className="text-(--dark-grayish-blue) font-medium line-through">
        $250.00
      </p>

      <div className="grid grid-cols-[40fr_60fr] gap-5 h-12 mt-10">
        {/* quantity controls */}
        <div className="bg-(--grayish-blue)/30 rounded-sm flex items-center justify-between px-4">
          <button onClick={decrease} disabled={quantity <= 1}>
            <img src="/images/icon-minus.svg" alt="Decrease quantity" />
          </button>
          <span>{quantity}</span>
          <button onClick={increase}>
            <img src="/images/icon-plus.svg" alt="Increase quantity" />
          </button>
        </div>

        {/* add to cart */}
        <button
          onClick={handleAddToCart}
          className="bg-(--primary) hover:bg-(--primary)/80 flex justify-center items-center gap-2 rounded transition-colors duration-100 ease-out cursor-pointer"
        >
          <img
            src="/images/icon-cart.svg"
            alt="cart icon"
            className="w-4 h-4"
          />
          <span className="text-sm font-bold">Add to cart</span>
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;

// import { useState } from "react";
// import { useCart } from "../context/CartContext";
// import toast from "react-hot-toast";

// const ProductDetails = () => {
//   const [quantity, setQuantity] = useState(1);
//   const { addToCart } = useCart();

//   const increase = () => setQuantity((q) => q + 1);
//   const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : q));

//     export type CartItem = [
//         id: number,
//     title: string,
//     price: number,
//     quantity:number,
//      image:string ]
//   const handleAddToCart = () => {
//     // addToCart({
//     //   id: 1,
//     //   title: "Fall Limited Edition Sneakers",
//     //   price: 125,
//     //   quantity,
//     //   image: "/images/image-product-1-thumbnail.jpg", //  selected product thumbnail
//       // });
//       const addToCart = (product: CartItem) => {
//   setCartItems((prev) => {
//     const exists = prev.find((item) => item.id === product.id);
//     if (exists) {
//       return prev.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + product.quantity }
//           : item
//       );
//     }
//     return [...prev, product];
//   });

//     toast.success(`${product.title} added to cart`, {
//       icon: "🛒",
//     });
//     setQuantity(1); // reset quantity after adding
//   };

//   return (
//     <section className="px-4">
//       <p className="text-sm tracking-widest uppercase text-(--grayish-blue) font-bold">
//         Sneaker Company
//       </p>
//       <h2 className="text-2xl xl:text-4xl text-black/90 pt-3 font-extrabold">
//         Fall Limited Edition Sneakers
//       </h2>

//       <p className="text-(--dark-grayish-blue) text-sm mt-5">
//         These low-profile sneakers are your perfect casual wear companion.
//         Featuring a durable rubber outer sole, they&apos;ll withstand everything
//         the weather can offer.
//       </p>

//       {/* <!-- price --> */}
//       <div className="flex items-center gap-2 mt-5">
//         <p className="text-black/80 text-2xl font-extrabold">$125.00</p>
//         <span className="w-fit bg-black/85 text-sm font-bold text-(--white) py-0.5 px-1.5 rounded-sm">
//           50%
//         </span>
//       </div>
//       <p className="text-(--dark-grayish-blue) font-medium line-through">
//         $250.00
//       </p>
//       <div className="grid grid-cols-[40fr_60fr] gap-5 h-12 mt-10">
//         {/* quantity controls */}
//         <div className="bg-(--grayish-blue)/30 rounded-sm flex items-center justify-between px-4">
//           <button onClick={decrease} disabled={quantity <= 1}>
//             <img src="/images/icon-minus.svg" alt="Decrease quantity" />
//           </button>
//           <span>{quantity}</span>
//           <button onClick={increase}>
//             <img src="/images/icon-plus.svg" alt="Increase quantity" />
//           </button>
//         </div>

//         {/* add to cart */}
//         <button
//           onClick={handleAddToCart}
//           className="bg-(--primary) hover:bg-(--primary)/80 flex justify-center items-center gap-2 rounded transition-colors duration-100 ease-out cursor-pointer"
//         >
//           <img
//             src="/images/icon-cart.svg"
//             alt="cart icon"
//             className="w-4 h-4"
//           />
//           <span className="text-sm font-bold">Add to cart</span>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default ProductDetails;
