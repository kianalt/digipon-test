"use client";
import { createContext, useContext, useState } from "react";

const TitleContext = createContext();

export function TitleProvider({ children }) {
  const [title, setTitle] = useState("Default Title");

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
}

export function useTitle() {
  return useContext(TitleContext);
}
