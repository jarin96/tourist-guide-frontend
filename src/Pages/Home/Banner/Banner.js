import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import banner1 from "../../../images/Banner/rsz_25551946 (1).jpg";
import banner2 from "../../../images/Banner/Banner2.jpg";
import banner3 from "../../../images/Banner/Banner3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>It's Time to Traveling</h3>
          <p>Book Your Trip</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>It's Time to Traveling</h3>
          <p>Book Your Trip</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Beautiful Places To Travel</h3>
          <p>Book Now</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
