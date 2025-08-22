import { useState } from "react";
import ProductGallery from "./product-gallery";

const images = [
  {
    main: "/images/image-product-1.jpg",
    thumb: "/images/image-product-1-thumbnail.jpg",
    alt: "A pair of sneakers with one held slightly vertically",
  },
  {
    main: "/images/image-product-2.jpg",
    thumb: "/images/image-product-2-thumbnail.jpg",
    alt: "A pair of sneakers with one kept on two rocks, with a stick by the side",
  },
  {
    main: "/images/image-product-3.jpg",
    thumb: "/images/image-product-3-thumbnail.jpg",
    alt: "The right foot of a pair of sneakers placed on two rocks",
  },
  {
    main: "/images/image-product-4.jpg",
    thumb: "/images/image-product-4-thumbnail.jpg",
    alt: "The left foot of a pair of sneakers placed on two rocks",
  },
];

const Product = () => {
  const [mainImage, setMainImage] = useState(images[0].main);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    const newSrc = images[index].main;

    setLoading(true);

    const tempImg = new Image();
    tempImg.src = newSrc;
    tempImg.onload = () => {
      setMainImage(newSrc);
      setLoading(false);
      setActive(index);
    };
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <section>
      {/* Main Image */}
      <div
        className="relative w-full xl:w-[415px] xl:h-[400px] md:rounded-xl overflow-hidden cursor-pointer"
        onClick={() => openModal(active)}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/70">
            <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <img
          src={mainImage}
          alt="Sneakers"
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-5 mt-5">
        {images.map((img, index) => (
          <div
            key={index}
            className={`thumbnail border-2 cursor-pointer transition-all duration-100 ease rounded-lg overflow-hidden 
              ${
                active === index
                  ? "border-orange-500 opacity-70"
                  : "border-transparent hover:border-orange-500 hover:opacity-70"
              }
            `}
            onClick={() => {
              handleThumbnailClick(index);
              setCurrentIndex(index);
            }}
          >
            <img
              src={img.thumb}
              alt={img.alt}
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <ProductGallery
          images={images}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          setIsOpen={setIsOpen}
        />
      )}
    </section>
  );
};

export default Product;
