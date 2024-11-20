import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200">
      {" "}
      <motion.h3
        className="text-3xl font-bold  p-4 container col-auto text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
      >
        Discover a world of exceptional products and unbeatable deals. At Oasis
        Incorporated, we are committed to providing you with a seamless shopping
        experience, offering a diverse range of high-quality items to meet all
        your needs. Dive into our collection and enjoy the oasis of shopping
        excellence!
      </motion.h3>
    </div>
  );
}

export default App;
