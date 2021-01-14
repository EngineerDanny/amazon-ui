import React, { createContext, useReducer, useContext } from "react";

//Create the context of the data layer
export const StateContext = createContext();

//Create the provider component with the context
export const StateProvider = ({ reducer, initialState, children }) => {
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>;
};

//This gives the functionality of using the state inside a component
export const useStateValue = () => useContext(StateContext);
