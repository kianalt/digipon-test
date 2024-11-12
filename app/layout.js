"use client";
import "./globals.css";
import BottomNav from "../components/BottomNav/BottomNav";
import Header from "@/components/Header/Header";
import { TitleProvider, useTitle } from "./TitleContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TitleProvider>
          <MainLayout>{children}</MainLayout>
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
