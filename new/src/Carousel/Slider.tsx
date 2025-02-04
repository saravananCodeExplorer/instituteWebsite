import { useState, useEffect } from "react";

export function CarouselComponent() {
  const slides = [
    "/assets/slide1.jpg",
    "/assets/2slide.png",
    "/assets/3slide.jpg",
    "/assets/4slide.jpg",
    "/assets/5slide.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide(); // Swipe left (next slide)
    } else if (touchStartX - touchEndX < -50) {
      prevSlide(); // Swipe right (previous slide)
    }
  };

  return (
    <div className="relative w-full flex justify-center mt-1">
      <div
        className="w-[95%] h-[300px] md:h-[500px] rounded-xl overflow-hidden relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={slides[currentIndex]}
          alt={`slide ${currentIndex + 1}`}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out scale-105"
          loading="lazy"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition"
      >
        &#10095;
      </button>
    </div>
  );
}
