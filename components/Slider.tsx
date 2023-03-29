import { useState, useEffect } from "react";
import Image from "next/image";

const NFTSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: "/alien-1.png", alt: "NFT 1" },
    { src: "/alien-7.png", alt: "NFT 2" },
    { src: "/alien-28.png", alt: "NFT 3" },
    { src: "/alien-47.png", alt: "NFT 4" },
    { src: "/alien-49.png", alt: "NFT 5" },
    { src: "/alien-50.png", alt: "NFT 6" },
    { src: "/alien-21.png", alt: "NFT 7" },
    { src: "/alien-29.png", alt: "NFT 8" },
    { src: "/alien-46.png", alt: "NFT 9" },
    { src: "/alien-52.png", alt: "NFT 10" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="relative  w-[200px] h-60">
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          // layout="responsive"
          width={100}
          height={100}
          className={`absolute top-0 left-0 w-full h-full   rounded-3xl transition-opacity 
          duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}
    </div>
  );
};

export default NFTSlider;
