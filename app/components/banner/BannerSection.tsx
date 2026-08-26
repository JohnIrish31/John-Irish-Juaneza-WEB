"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";

export default function BannerSection() {
  const scrollToWork = () =>
    document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });

  return (
    <Box
      component="section"
      sx={{
        minHeight: { xs: "calc(100svh - 66px)", md: "80vh" },
        pt: { xs: 14, sm: 17, md: 22 },
        pb: { xs: 8, md: 14 },
        px: { xs: 3, sm: 5, md: 15 },
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: { xs: 360, md: 680 },
          height: { xs: 360, md: 680 },
          borderRadius: "50%",
          right: { xs: -230, md: -100 },
          top: { xs: 0, md: -180 },
          background:
            "radial-gradient(circle, rgba(31,228,195,.19), rgba(12,30,43,.08) 42%, transparent 70%)",
          filter: "blur(2px)",
          animation: "drift 8s ease-in-out infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 1,
          height: { xs: 135, md: 235 },
          left: { xs: 24, sm: 42, md: 74 },
          top: { xs: 145, sm: 175, md: 190 },
          bgcolor: "rgba(0,255,209,.48)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Stack
          spacing={{ xs: 2.3, md: 3 }}
          sx={{ position: "relative", maxWidth: 1000, pl: { xs: 3, md: 5 }, pr: { xs: 1, sm: 0 } }}
        >
          <Typography
            sx={{
              color: "#78e8d5",
              textTransform: "uppercase",
              letterSpacing: { xs: 2.2, md: 3.8 },
              fontSize: { xs: ".68rem", md: ".78rem" },
              fontWeight: 700,
            }}
          >
            Full Stack Engineer · Cloud & Product Systems
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontFamily: "var(--font-merriweather)",
              fontSize: { xs: "clamp(2.25rem, 10vw, 3.35rem)", sm: "3.7rem", md: "5.55rem" },
              lineHeight: { xs: 1.14, md: 1.04 },
              letterSpacing: { xs: -1.3, md: -3.5 },
              fontWeight: 700,
              maxWidth: 920,
            }}
          >
            Building systems that{" "}
            <Box component="span" sx={{ color: "#00ffd1" }}>
              move business forward.
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "rgba(232,244,244,.7)",
              maxWidth: 670,
              fontSize: { xs: ".98rem", md: "1.14rem" },
              lineHeight: 1.85,
            }}
          >
            I&apos;m John Irish Juaneza. I design and ship reliable internal platforms, dashboards,
            and cloud-backed tools turning complex operations into clear, scalable workflows.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            pt={1}
            alignItems={{ sm: "center" }}
          >
            <Button
              onClick={scrollToWork}
              endIcon={<FiArrowDownRight />}
              sx={{
                width: { xs: "100%", sm: "fit-content" },
                bgcolor: "#00ffd1",
                color: "#061017",
                px: 3,
                py: 1.35,
                fontWeight: 800,
                borderRadius: 1.5,
                "&:hover": { bgcolor: "#83ffe8", transform: "translateY(-2px)" },
                transition: "all .25s",
              }}
            >
              Explore my work
            </Button>
            <Typography
              sx={{
                color: "rgba(232,244,244,.5)",
                fontSize: ".85rem",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Next.js · Node.js · AWS · MySQL
            </Typography>
          </Stack>
        </Stack>
      </motion.div>
    </Box>
  );
}
