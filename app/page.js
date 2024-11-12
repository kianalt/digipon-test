"use client";
import { useEffect } from "react";
import { useTitle } from "./TitleContext";
import { Container } from "@mui/material";
//Component
import MyCode from "../components/MyCode/MyCode";

export default function Home() {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("کدهای من");
  }, [setTitle]);
  return (
    <main>
      <Container maxWidth="lg">
        <MyCode />
      </Container>
    </main>
  );
}
