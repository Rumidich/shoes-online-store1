import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { shoesContext } from "../../contexts/shoesContext";
import ShoeCard from "../ShoeCard/ShoeCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PopularShoes = () => {
  const { getShoes, shoes, addShoes } = useContext(shoesContext);

  useEffect(() => {
    getShoes();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <h1>Popular Right Now</h1>
      <div>
        <Carousel responsive={responsive}>
          {shoes.map(item => (
            <ShoeCard key={item.id} item={item} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default PopularShoes;
