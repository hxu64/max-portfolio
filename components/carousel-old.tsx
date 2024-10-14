"use client";

import { useState } from "react";

interface CarouselCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const carouselData: CarouselCardProps[] = [
  {
    title: "First Card",
    description: "This is the first card in the carousel.",
    imageUrl: "https://via.placeholder.com/400x300",
  },
  {
    title: "Second Card",
    description: "This is the second card in the carousel.",
    imageUrl: "https://via.placeholder.com/400x300",
  },
  {
    title: "Third Card",
    description: "This is the third card in the carousel.",
    imageUrl: "https://via.placeholder.com/400x300",
  },
];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-lg mx-auto">
      <div className="overflow-hidden rounded-md shadow-xl">
        {carouselData.map((card, index) => (
          <div
            key={index}
            className={`absolute w-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="relative h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <h1 className="font-bold text-xl md:text-3xl text-gray-50">
                  {card.title}
                </h1>
                <p className="font-normal text-base text-gray-50 my-4">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        Next
      </button>
    </div>
  );
}
