import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Create a CSS file for styling

const CarouselComp = () => {
  const images = [
    "https://img.freepik.com/free-vector/happy-diwali-sale-banner-with-discount-details-pink-background_1017-39845.jpg?w=1380&t=st=1696499212~exp=1696499812~hmac=1119a5cc75a4f49d0566a2ff7d850c10c9c7d931acf8dc3169fa0326a26ce028",
    "https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?w=1380&t=st=1696499262~exp=1696499862~hmac=4d7c7cfb3aa80b248286a060738db98ed07ba505c137be0428488b97f91e484a",
    "https://img.freepik.com/free-vector/rakhsha-bandhan-festival-sale-with-decorative-rakhi-banner_1017-20262.jpg?w=1380&t=st=1696499424~exp=1696500024~hmac=0117a9f9638262c014392a954d04b3f8427cb0fab545d3d736b37c08290e3cd6",
    "https://img.freepik.com/free-vector/black-friday-sale-website-banner-with-white-splash_1361-3062.jpg?w=1380&t=st=1696499480~exp=1696500080~hmac=ba21979a6dd27a10648c44c50bbe4cfa21029c8a11f4134f0446c4f6d4f8550c",
    "https://img.freepik.com/free-vector/gradient-business-facebook-cover-design_23-2149692919.jpg?w=1380&t=st=1696499575~exp=1696500175~hmac=22b8625093b8b4959622b621a42019b601de77d5b830c6d125bc6771526b243c",
    // Add more image URLs as needed
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      <div className="pagination">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentImage ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselComp;
