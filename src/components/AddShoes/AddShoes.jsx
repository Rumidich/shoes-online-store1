import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { shoesContext } from "../../contexts/shoesContext";

import { Button, Input, Space } from "antd";
import { Link } from "react-router-dom";

const AddShoes = () => {
  const { addShoes } = useContext(shoesContext);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSave() {
    const newShoe = {
      title,
      price,
      description,
      image,
    };
    if (
      !title.trim("") ||
      !price.trim("") ||
      !description.trim("") ||
      !image.trim("")
    ) {
      alert("Fill the blanks");
    } else {
      addShoes(newShoe);
    }
    console.log(newShoe);
  }

  return (
    <Space
      direction="vertical"
      style={{
        width: "30%",
      }}>
      <Input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="name"
      />
      <Input
        value={price}
        onChange={e => setPrice(e.target.value)}
        placeholder="price"
      />
      <Input
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="description"
      />
      <Input
        value={image}
        onChange={e => setImage(e.target.value)}
        placeholder="image"
      />
      <Link to="/store">
        <Button onClick={() => handleSave()} type="primary">
          Add
        </Button>
      </Link>
    </Space>
  );
};

export default AddShoes;
