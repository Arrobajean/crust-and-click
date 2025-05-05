// src/components/ImageCarousel.tsx
import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface ImageCarouselProps {
  images: string[];
  onSlideChange?: (index: number) => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  onSlideChange,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    onSlideChange?.(index);
  }, [emblaApi, onSlideChange]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // inicializa
  }, [emblaApi, onSelect]);

  return (
    <div className="embla">
      <div className="overflow-hidden rounded-lg border" ref={emblaRef}>
        <div className="flex">
          {images.map((img, index) => (
            <div key={index} className="flex-[0_0_100%]">
              <img
                src={img}
                alt={`Imagen ${index + 1}`}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          ))}
        </div>
      </div>

      {/* miniaturas opcionales */}
      <div className="flex gap-2 mt-3 justify-center overflow-x-auto">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-12 h-12 rounded-md overflow-hidden border-2 transition-all ${
              selectedIndex === index
                ? "border-[#807c5c]"
                : "border-transparent"
            }`}
          >
            <img src={img} className="object-cover w-full h-full" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
