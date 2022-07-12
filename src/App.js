import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import ShoesContextProvider from "./contexts/shoesContext";
import Routing from "./Routing";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <ShoesContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </ShoesContextProvider>
  );
};

export default App;
