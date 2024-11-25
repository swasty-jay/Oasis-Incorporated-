import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGooglePlay,
  faApple,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons"; // Import Google Play and Apple icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5 mb-0">
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

        {/* SUPPORT SECTION*/}
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
            {/* <li>
              <a href="/wishlist" className="text-gray-400 hover:text-white">
                Wishlist
              </a>
            </li> */}
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

        {/* Download App Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Download App</h4>
          <p className="text-gray-400 mb-4">
            Save Ghs20 with App New User Only
          </p>
          <div className="flex space-x-4 mb-4">
            {/* FontAwesomeIcon for Google Play */}
            <a
              href="https://play.google.com/store/apps/your-app-url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGooglePlay}
                size="3x"
                className="text-gray-400 hover:text-white"
              />
              <p className="text-gray-400 text-sm">Google Play</p>
            </a>
            {/* FontAwesomeIcon for Apple */}
            <a href="https://apps.apple.com/app/your-app-id">
              {" "}
              <FontAwesomeIcon
                icon={faApple}
                size="3x"
                className="text-gray-400 hover:text-white size-10"
              />
              <p className="text-gray-400 text-sm">App Store</p>
            </a>
          </div>
          <div className="flex space-x-4">
            {/* FontAwesome Icons */}
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white transform transition-transform duration-300 ease-in-out hover:scale-150"
            >
              <FontAwesomeIcon icon={faFacebook} beat size="lg" />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white transform transition-transform duration-300 ease-in-out hover:scale-150"
            >
              <FontAwesomeIcon icon={faTwitter} beat size="lg" />
            </a>
            <a
              href="https://github.com/swasty-jay/Oasis-Incorporated-"
              className="text-gray-400 hover:text-white transform transition-transform duration-300 ease-in-out hover:scale-150"
            >
              <FontAwesomeIcon icon={faGithub} beat size="lg" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white transform transition-transform duration-300 ease-in-out hover:scale-150"
            >
              <FontAwesomeIcon icon={faLinkedin} beat size="lg" />
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
