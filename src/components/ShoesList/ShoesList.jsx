import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { shoesContext } from "../../contexts/shoesContext";
import ShoeCard from "../ShoeCard/ShoeCard";

import "react-multi-carousel/lib/styles.css";

const ShoesList = () => {
  const { getShoes, shoes, addShoes } = useContext(shoesContext);

  useEffect(() => {
    getShoes();
  }, []);

  return (
    <>
      <Link to="/add">
        <button>Add New</button>
      </Link>
      <div>
        {shoes.map(item => (
          <ShoeCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default ShoesList;
