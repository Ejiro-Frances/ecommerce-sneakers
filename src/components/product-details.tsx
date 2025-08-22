import { useState } from "react";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : q));

  return (
    <section className="px-4">
      <p className="text-sm tracking-widest uppercase text-(--grayish-blue) font-bold">
        Sneaker Company
      </p>
      <h2 className="text-2xl md:text-4xl text-black/90 pt-3 font-extrabold">
        Fall Limited Edition Sneakers
      </h2>
      <p className="text-(--dark-grayish-blue) text-sm mt-5">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>

      {/* <!-- price --> */}
      <div className="flex items-center gap-2 mt-5">
        <p className="text-black/80 text-2xl font-extrabold">$125.00</p>
        <span className="w-fit bg-black/85 text-sm font-bold text-(--white) py-0.5 px-1.5 rounded-sm">
          50%
        </span>
      </div>
      <p className="text-(--dark-grayish-blue) font-medium line-through">
        $250.00
      </p>

      {/* <!-- cart options and button --> */}
      <div className="grid grid-cols-[40fr_60fr] gap-5 h-12 mt-10">
        {/* <!-- input choice --> */}
        <div className="bg-(--grayish-blue)/30 rounded-sm flex items-center justify-between px-4">
          <button
            onClick={decrease}
            disabled={quantity <= 1}
            className={`inline-flex items-center justify-center w-10 h-10 transition-all duration-150 ease-in-out 
              ${
                quantity <= 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-(--secondary)"
              }`}
          >
            <img src="./public/images/icon-minus.svg" alt="Decrease quantity" />
          </button>
          <span>{quantity}</span>
          <button
            onClick={increase}
            className="inline-flex items-center justify-center cursor-pointer hover:bg-(--secondary) w-10 h-10 transition-all duration-150 ease-in-out"
          >
            <img
              src="./public/images/icon-plus.svg"
              alt="Increase quantity"
              className="w-2.5 h-2.5"
            />
          </button>
        </div>

        {/* <!-- cart button --> */}
        <button className="bg-(--primary) hover:bg-(--primary)/80 flex justify-center items-center gap-2 rounded transition-colors duration-100 ease-out cursor-pointer">
          <img
            src="./public/images/icon-cart.svg"
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
