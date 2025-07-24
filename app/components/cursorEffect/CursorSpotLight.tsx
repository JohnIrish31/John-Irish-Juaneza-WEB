"use client";

import { useEffect } from "react";
import Box from "@mui/material/Box";

const CursorSpotlight = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty(
        "--cursor-x",
        `${e.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--cursor-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Box
      sx={{
        pointerEvents: "none",
        position: "fixed",
        inset: 0,
        zIndex: 50,
        background: `radial-gradient(300px circle at var(--cursor-x) var(--cursor-y), rgba(255, 255, 255, 0.09), transparent 70%)`,
        transition: "background-position 0.1s ease",
      }}
    />
  );
};

export default CursorSpotlight;
