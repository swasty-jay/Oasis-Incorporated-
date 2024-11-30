import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SidebarBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Example slides data
  const slides = [
    {
      id: 1,
      title: "iPhone 14 Series",
      description: "Up to 10% off Voucher",
      image: "https://via.placeholder.com/300",
      backgroundColor: "bg-black",
    },
    {
      id: 2,
      title: "Samsung Galaxy S23",
      description: "Exclusive Deals",
      image: "https://via.placeholder.com/300",
      backgroundColor: "bg-gray-800",
    },
    {
      id: 3,
      title: "MacBook Pro 2023",
      description: "Save up to $300",
      image: "https://via.placeholder.com/300",
      backgroundColor: "bg-blue-900",
    },
  ];

  // Handle navigation
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4 bg-gray-100">
        <ul className="space-y-2 text-sm">
          <li className="hover:text-blue-600 cursor-pointer">
            Woman's Fashion
          </li>
          <li className="hover:text-blue-600 cursor-pointer">Men's Fashion</li>
          <li className="hover:text-blue-600 cursor-pointer">Electronics</li>
          <li className="hover:text-blue-600 cursor-pointer">
            Home & Lifestyle
          </li>
          <li className="hover:text-blue-600 cursor-pointer">Medicine</li>
          <li className="hover:text-blue-600 cursor-pointer">
            Sports & Outdoor
          </li>
          <li className="hover:text-blue-600 cursor-pointer">Baby's & Toys</li>
          <li className="hover:text-blue-600 cursor-pointer">
            Groceries & Pets
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            Health & Beauty
          </li>
        </ul>
      </div>

      {/* Banner Section */}
      <div className="w-3/4 relative">
        <div className="relative overflow-hidden h-64">
          {/* Animated Slide */}
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={slides[currentSlide].id}
              className={`absolute top-0 left-0 w-full h-full flex items-center justify-between px-8 ${slides[currentSlide].backgroundColor}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
            >
              {/* Slide Content */}
              <div className="text-white">
                <h2 className="text-xl font-bold">
                  {slides[currentSlide].title}
                </h2>
                <p className="mt-2 text-lg">
                  {slides[currentSlide].description}
                </p>
                <button className="mt-4 px-4 py-2 bg-white text-black rounded">
                  Shop Now →
                </button>
              </div>
              {/* Slide Image */}
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="h-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            className="px-3 py-1 bg-gray-200 rounded-full"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="px-3 py-1 bg-gray-200 rounded-full"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarBanner;
