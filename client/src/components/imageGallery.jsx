import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch images when the component mounts
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products", {
          headers: {
            Authorization: "YOUR_API_KEY", // Replace with your API key
          },
        });
        setImages(response.data.images);
      } catch (err) {
        setError("Failed to load images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <p>Loading images...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div key={image.id} className="rounded overflow-hidden shadow-lg">
          <img
            src={image.src.medium}
            alt={image.alt}
            className="w-full h-48 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
