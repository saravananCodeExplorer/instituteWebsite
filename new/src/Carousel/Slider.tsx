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

  return (
    <div className="relative w-full flex justify-center mt-1">
      <div className="w-[95%] h-[500px] rounded-xl overflow-hidden">
        <img
          src={slides[currentIndex]}
          alt={`slide ${currentIndex + 1}`}
          className="h-full w-full object-cover transition-all duration-1000 ease-in-out" // Added smooth transition
          loading="lazy"
        />
      </div>
    </div>
  );
}
