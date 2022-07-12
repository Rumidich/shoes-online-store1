import React from "react";
import { Route, Routes } from "react-router-dom";
import ShoesList from "./components/ShoesList/ShoesList";
import AddShoes from "./components/AddShoes/AddShoes";
import EditCard from "./components/EditCard/EditCard";
import DetailsOfCard from "./components/DetailsOfCard/DetailsOfCard";
import Main from "./components/Main/Main";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/store" element={<ShoesList />} />
      <Route path="/add" element={<AddShoes />} />
      <Route path="/edit/:id" element={<EditCard />} />
      <Route path="/details/:id" element={<DetailsOfCard />} />
    </Routes>
  );
};

export default Routing;
