// RootLayout.js
"use client";
import "./globals.css";
import BottomNav from "../components/BottomNav/BottomNav";
import Header from "@/components/Header/Header";
import { useTitle } from "./TitleContext";
import { TitleProvider } from "./TitleContext";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="en">
      <body>
        <TitleProvider>
          {isClient ? <MainLayout>{children}</MainLayout> : null}
        </TitleProvider>
      </body>
    </html>
  );
}

function MainLayout({ children }) {
  const { title } = useTitle();

  return (
    <>
      <Header title={title} />
      {children}
      <BottomNav />
    </>
  );
}
