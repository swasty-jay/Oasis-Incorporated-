import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-14 mb-0 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Exclusive Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Oasis Incorporated</h4>
          <p className="text-gray-400 mb-4">Get 10% off your first order</p>
          <form className="flex items-center border border-gray-600 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black text-gray-400 px-4 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 hover:bg-gray-200"
            >
              &gt;
            </button>
          </form>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <p className="text-gray-400 mb-2">Tema Ghana.</p>
          <p className="text-gray-400 mb-2">oasisincorporated@gmail.com</p>
          <p className="text-gray-400">+233(0)245870688</p>
        </div>

        {/* Account Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Account</h4>
          <ul className="space-y-2">
            <li>
              <a href="/account" className="text-gray-400 hover:text-white">
                My Account
              </a>
            </li>
            <li>
              <a href="/login" className="text-gray-400 hover:text-white">
                Login / Register
              </a>
            </li>
            <li>
              <a href="/cart" className="text-gray-400 hover:text-white">
                Cart
              </a>
            </li>
            <li>
              <a href="/wishlist" className="text-gray-400 hover:text-white">
                Wishlist
              </a>
            </li>
            <li>
              <a href="/shop" className="text-gray-400 hover:text-white">
                Shop
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Link</h4>
          <ul className="space-y-2">
            <li>
              <a href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="text-gray-400 hover:text-white">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="/faq" className="text-gray-400 hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Download App</h4>
          <p className="text-gray-400 mb-4">Save $3 with App New User Only</p>
          <div className="flex space-x-2 mb-4">
            <img
              src="https://via.placeholder.com/100x40?text=Google+Play"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="https://via.placeholder.com/100x40?text=App+Store"
              alt="App Store"
              className="h-10"
            />
          </div>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <hr className="mt-4 opacity-10" />

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        © Copyright Oasis Incorporated 2024. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
