import React, { useState } from "react";
import { motion } from "framer-motion";

import heroBanner1 from "../assets/images/heroBanner1.jpg";

const Home = () => {
  // Mock Data
  const heroSlides = [
    {
      id: 1,
      image: heroBanner1,
      title: "Up to 10% Off Voucher",
      description: "Shop and Save Big!",
      buttonText: "Shop Now",
    },
    {
      id: 2,
      image: heroBanner1,
      title: "Discover New Gadgets",
      description: "Latest electronics at unbeatable prices.",
      buttonText: "Explore",
    },
    {
      id: 3,
      image: "hero-banner3.jpg",
      title: "Style Your Home",
      description: "Modern furniture for every space.",
      buttonText: "Shop Furniture",
    },
  ];

  const flashSalesProducts = [
    {
      id: 1,
      image: heroBanner1,
      title: "HAVIT HV G92 Gamepad",
      price: "$25",
      rating: 4.5,
    },
    {
      id: 2,
      image: "product2.jpg",
      title: "AK-900 Wired Keyboard",
      price: "$30",
      rating: 4.2,
    },
    {
      id: 3,
      image: "product3.jpg",
      title: "IPS LCD Monitor",
      price: "$120",
      rating: 4.7,
    },
    {
      id: 4,
      image: "product4.jpg",
      title: "Eames Comfort Chair",
      price: "$80",
      rating: 4.8,
    },
  ];

  const categories = [
    { id: 1, name: "Phones", icon: "📱" },
    { id: 2, name: "Computers", icon: "💻" },
    { id: 3, name: "Smartwatch", icon: "⌚" },
    { id: 4, name: "Camera", icon: "📷" },
    { id: 5, name: "Headphones", icon: "🎧" },
    { id: 6, name: "Gaming", icon: "🎮" },
  ];

  const bestSellingProducts = [
    {
      id: 1,
      image: "product5.jpg",
      title: "Gucci Leather Bag",
      price: "$200",
      rating: 4.9,
    },
    {
      id: 2,
      image: "product6.jpg",
      title: "RGB Liquid Cooler",
      price: "$120",
      rating: 4.6,
    },
    {
      id: 3,
      image: "product7.jpg",
      title: "Smart Bookshelf",
      price: "$50",
      rating: 4.3,
    },
  ];

  const exploreProducts = [
    {
      id: 1,
      image: "product8.jpg",
      title: "Canon DSLR Camera",
      price: "$400",
      rating: 4.5,
    },
    {
      id: 2,
      image: "product9.jpg",
      title: "Gaming Laptop",
      price: "$900",
      rating: 4.8,
    },
    {
      id: 3,
      image: "product10.jpg",
      title: "Electric Car Toy",
      price: "$150",
      rating: 4.3,
    },
  ];

  const newArrivals = [
    {
      id: 1,
      image: "product11.jpg",
      title: "PlayStation 5",
      price: "$500",
      rating: 5.0,
    },
    {
      id: 2,
      image: "product12.jpg",
      title: "Perfume",
      price: "$100",
      rating: 4.7,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === heroSlides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroSlides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section with Framer Motion Carousel */}
      <div className="relative w-full h-[400px] mb-12 overflow-hidden">
        <motion.div
          className="flex"
          initial={{ x: "-100%" }}
          animate={{ x: `${-currentIndex * 100}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {heroSlides.map((slide) => (
            <motion.div
              key={slide.id}
              className="min-w-full h-full relative"
              style={{ flex: "0 0 100%" }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className=" h-full  rounded-md"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10  bg-black/50">
                <h1 className="text-3xl md:text-5xl font-bold">
                  {slide.title}
                </h1>
                <p className="mt-2 text-lg">{slide.description}</p>
                <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md">
                  {slide.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between z-10">
          <button
            onClick={handlePrev}
            className="p-2 bg-black/50 text-white rounded-full hover:bg-black"
          >
            &#8249;
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-black/50 text-white rounded-full hover:bg-black"
          >
            &#8250;
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-red-500" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Flash Sales Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Flash Sales</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {flashSalesProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-md shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover"
              />
              <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-2 w-full bg-red-500 text-white py-2 rounded-md">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Browse by Category */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center p-4 bg-gray-100 rounded-md"
            >
              <span className="text-3xl">{category.icon}</span>
              <p className="mt-2 text-sm font-medium">{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Best Selling Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bestSellingProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-md shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover"
              />
              <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Our Products */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Explore Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {exploreProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-md shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover"
              />
              <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {newArrivals.map((product) => (
            <div key={product.id} className="border p-4 rounded-md shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover"
              />
              <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
