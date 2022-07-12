import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

//! Context
export const shoesContext = createContext();

const INIT_STATE = {
  shoes: [],
  oneShoe: null,
};

//! Reduce
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_SHOES":
      return {
        ...state,
        shoes: action.payload.data,
      };
    case "GET_ONE":
      return {
        ...state,
        oneShoe: action.payload,
      };
  }
}

const SHOES_API = "http://localhost:8000/shoes";

const ShoesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //!CREATE
  async function addShoes(newShoe) {
    await axios.post(SHOES_API, newShoe);
  }

  //!READ
  async function getShoes() {
    const res = await axios(SHOES_API);
    dispatch({
      type: "GET_SHOES",
      payload: res,
    });
  }

  //! (DETAILS , GET TO EDIT)
  async function getOneShoe(id) {
    const res = await axios(`${SHOES_API}/${id}`);
    dispatch({
      type: "GET_ONE",
      payload: res.data,
    });
  }
  //! UPDATE

  //! DELETE
  async function deleteShoes(id) {
    await axios.delete(`${SHOES_API}/${id}`);
    getShoes();
  }
  return (
    <shoesContext.Provider
      value={{
        shoes: state.shoes,
        oneShoe: state.oneShoe,
        getShoes,
        getOneShoe,
        addShoes,
        deleteShoes,
      }}>
      {children}
    </shoesContext.Provider>
  );
};

export default ShoesContextProvider;
