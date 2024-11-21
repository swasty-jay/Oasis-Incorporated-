import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "motion/react";
import Footer from "./components/Footer";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <div className="min-h-screen flex flex-col">
        <App />

        {/* Main Content */}
        <main className="flex-grow">{/* Your page content goes here */}</main>
        <Footer />
      </div>
    </>
  </StrictMode>
);
