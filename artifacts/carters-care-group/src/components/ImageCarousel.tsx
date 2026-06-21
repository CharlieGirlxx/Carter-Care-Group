import { useState, useEffect, useCallback } from "react";

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  className?: string;
  overlay?: React.ReactNode;
}

export default function ImageCarousel({ images, interval = 6000, className = "", overlay }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [interval, images.length, next]);

  if (images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* All images stacked, current one visible via opacity */}
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center transition-all duration-[1800ms] ease-in-out"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === index ? 1 : 0,
            transform: i === index ? "scale(1)" : "scale(1.05)",
            zIndex: i === index ? 1 : 0,
          }}
        />
      ))}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="w-2.5 h-2.5 rounded-full transition-all duration-500"
              style={{
                background: i === index ? "white" : "rgba(255,255,255,0.4)",
                transform: i === index ? "scale(1.2)" : "scale(1)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Overlay */}
      {overlay && <div className="absolute inset-0 z-10">{overlay}</div>}
    </div>
  );
}
