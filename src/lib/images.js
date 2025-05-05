// src/lib/images.js
export const IMAGES = {
  logo: "/assets/logo.jpg",
  heroBg: "/assets/hero-bg.png",
};

// Pre-fetch and optimize the images
const preloadImages = () => {
  Object.values(IMAGES).forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

// Call preload when module is imported
preloadImages();

export default IMAGES;