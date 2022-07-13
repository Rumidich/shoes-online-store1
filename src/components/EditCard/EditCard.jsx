import { Button, Input } from "antd";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { shoesContext } from "../../contexts/shoesContext";

const EditCard = () => {
  const { getOneShoe, oneShoe, updateShoe } = useContext(shoesContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getOneShoe(id);
  }, []);
  useEffect(() => {
    if (oneShoe) {
      setTitle(oneShoe.title);
      setPrice(oneShoe.price);
      setDescription(oneShoe.description);
      setImage(oneShoe.image);
    }
  }, [oneShoe]);

  function handleSave() {
    const updatedShoe = {
      title,
      price,
      description,
      image,
    };
    updateShoe(id, updatedShoe);
    navigate("/");
  }
  return (
    <div>
      <Input value={title} onChange={e => setTitle(e.target.value)} />
      <Input value={price} onChange={e => setPrice(e.target.value)} />
      <Input
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <Input value={image} onChange={e => setImage(e.target.value)} />
      <Button onClick={handleSave}>Save</Button>
    </div>
  );
};

export default EditCard;
