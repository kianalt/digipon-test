// app/TitleContext.js
"use client";
import { createContext, useContext, useState } from "react";

// Create the context
const TitleContext = createContext();

// Provider component to wrap the layout
export function TitleProvider({ children }) {
  const [title, setTitle] = useState("Default Title");

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
}

// Custom hook to use the TitleContext
export function useTitle() {
  return useContext(TitleContext);
}
