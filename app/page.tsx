"use client";

import { Box, Typography, useMediaQuery } from "@mui/material";
import CursorSpotlight from "./components/cursorEffect/CursorSpotLight";
import MainAppBar from "./components/topBar/MainAppBar";
import BannerSection from "./components/banner/BannerSection";
import AboutMeSection from "./components/aboutme/AboutMeSection";
import WorkExperienceSection from "./components/workExperience/WorkExperienceSection";
import WorkProjectsSection from "./components/work/WorkProjectsSection";
import ContactMeSection from "./components/contact/ContactMeSection";
import PersonalSection from "./components/personal/PersonalSection";
import PersonalProjectsSection from "./components/personalProjects/PersonalProjectsSection";

export default function Home() {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        px: isMobile ? "0px" : ".875rem",
      }}
    >
      <CursorSpotlight />
      <MainAppBar />
      <BannerSection />
      <AboutMeSection />
      <WorkExperienceSection />
      <WorkProjectsSection />
      <PersonalProjectsSection />
      <PersonalSection />
      <ContactMeSection />
      <Box
        component="footer"
        sx={{
          py: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ color: "#777" }}>
          Designed and built by{" "}
          <Typography
            onClick={() => window.open("https://github.com/JohnIrish31", "_blank")}
            component="span"
            sx={{ color: "#00FFD1", fontWeight: "bold", cursor: "pointer" }}
          >
            John Irish Juaneza
          </Typography>{" "}
          © 2025
        </Typography>
      </Box>
    </Box>
  );
}
