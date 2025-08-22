import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: { main: string; thumb: string; alt: string }[];
  currentIndex: number;
  setCurrentIndex: (i: number) => void;
  setIsOpen: (open: boolean) => void;
};

const ProductGallery = ({
  images,
  currentIndex,
  setCurrentIndex,
  setIsOpen,
}: Props) => {
  const prevImage = () =>
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);

  const nextImage = () =>
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);

  return (
    <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50">
      {/* Close button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-6 right-6 text-white"
      >
        <X size={32} />
      </button>

      {/* Image + navigation */}
      <div className="relative max-w-lg w-full">
        <img
          src={images[currentIndex].main}
          alt={images[currentIndex].alt}
          className="rounded-lg w-full"
        />

        {/* Prev button */}
        <button
          onClick={prevImage}
          className="absolute left-[-3rem] top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next button */}
        <button
          onClick={nextImage}
          className="absolute right-[-3rem] top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Thumbnails inside modal */}
      <div className="flex gap-4 mt-6">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.thumb}
            alt={img.alt}
            className={`w-20 rounded-lg cursor-pointer border-2 ${
              i === currentIndex
                ? "border-orange-500 opacity-100"
                : "border-transparent opacity-70"
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
