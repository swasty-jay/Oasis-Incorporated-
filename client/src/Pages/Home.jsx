import React, { useState } from "react";
import { motion } from "framer-motion";
import heroBanner1 from "../assets/images/heroBanner1.jpg";
import headphone1 from "../assets/images/headphone1.jpg";
import headphone2 from "../assets/images/headphone2.jpg";

// Sidebar Component
const Sidebar = ({ isMobile, isOpen, toggleSidebar }) => {
  const sidebarLinks = [
    { id: 1, name: "Women's Fashion", path: "#" },
    { id: 2, name: "Men's Fashion", path: "#" },
    { id: 3, name: "Electronics", path: "#" },
    { id: 4, name: "Home & Lifestyle", path: "#" },
    { id: 5, name: "Medicine", path: "#" },
    { id: 6, name: "Sports & Outdoor", path: "#" },
    { id: 7, name: "Baby's & Toys", path: "#" },
    { id: 8, name: "Groceries & Pets", path: "#" },
    { id: 9, name: "Health & Beauty", path: "#" },
  ];

  return (
    <div>
      {isMobile ? (
        // Mobile Sidebar Dropdown
        <div className="relative">
          <button
            onClick={toggleSidebar}
            className="block p-2 bg-gray-100 border w-full text-left"
          >
            Categories
          </button>
          {isOpen && (
            <ul className="absolute bg-white shadow-lg w-full z-10">
              {sidebarLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        // Desktop Sidebar
        <div className="w-64 bg-gray-100 h-screen p-6 border-r hidden md:block">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <ul className="space-y-4">
            {sidebarLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.path}
                  className="block text-gray-700 hover:text-red-500 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Home Component
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
      image: headphone1,
      title: "Discover New Gadgets",
      description: "Latest electronics at unbeatable prices.",
      buttonText: "Explore",
    },
    {
      id: 3,
      image: headphone2,
      title: "Style Your Home",
      description: "Modern furniture for every space.",
      buttonText: "Shop Furniture",
    },
  ];

  const flashSalesProducts = [
    { id: 1, image: headphone1, title: "HAVIT HV G92 Gamepad", price: "$25" },
    { id: 2, image: headphone2, title: "AK-900 Wired Keyboard", price: "$30" },
    { id: 3, image: "product3.jpg", title: "IPS LCD Monitor", price: "$120" },
    {
      id: 4,
      image: "product4.jpg",
      title: "Eames Comfort Chair",
      price: "$80",
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
    { id: 1, image: "product5.jpg", title: "Gucci Leather Bag", price: "$200" },
    { id: 2, image: "product6.jpg", title: "RGB Liquid Cooler", price: "$120" },
    { id: 3, image: "product7.jpg", title: "Smart Bookshelf", price: "$50" },
  ];

  const exploreProducts = [
    { id: 1, image: "product8.jpg", title: "Canon DSLR Camera", price: "$400" },
    { id: 2, image: "product9.jpg", title: "Gaming Laptop", price: "$900" },
    { id: 3, image: "product10.jpg", title: "Electric Car Toy", price: "$150" },
  ];

  const newArrivals = [
    { id: 1, image: "product11.jpg", title: "PlayStation 5", price: "$500" },
    { id: 2, image: "product12.jpg", title: "Perfume", price: "$100" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

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

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar
        isMobile={true}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative h-[400px] mb-12 overflow-hidden">
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
                  className="h-full rounded-md object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 bg-black/50">
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
        </div>

        {/* Sections */}
        <Section title="Flash Sales" items={flashSalesProducts} />
        <Section title="Best Selling Products" items={bestSellingProducts} />
        <Section title="Explore Our Products" items={exploreProducts} />
        <Section title="New Arrivals" items={newArrivals} />
      </div>
    </div>
  );
};

// Section Component
const Section = ({ title, items }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item) => (
        <div key={item.id} className="border p-4 rounded-md shadow-sm">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-40 object-cover"
          />
          <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
          <p className="text-red-500 font-bold">{item.price}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Home;
