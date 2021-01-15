import React, { createContext, useReducer, useContext } from "react";

//Create the context of the data layer
export const context = createContext();

//Create the provider component with the context
export const StateProvider = ({ reducer, initialState, children }) => (
  <context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </context.Provider>
);
//This gives the functionality of using the state inside a component
export const useStateValue = () => useContext(context);
