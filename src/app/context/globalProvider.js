/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { createContext, useContext, useState } from "react";
import themes from './theme';

// Provide default values for contexts
export const GlobalContext = createContext(); 
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children })=>{
  const [SelectedTheme, setSelectedTheme] = useState(0);
  const theme = themes[SelectedTheme];

  return (
    <GlobalContext.Provider value={{theme}}>
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};
export  const useGlobalState = ()=> useContext(GlobalContext);
export const useGlobalUpdate = ()=> useContext(GlobalUpdateContext);
