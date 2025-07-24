"use client";

import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
  Divider,
} from "@mui/material";
import { styled, keyframes } from "@mui/system";
import profile from "../../Images/profilePhoto.jpg";
import Image from "next/image";

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 255, 209, 0.5); }
  70% { box-shadow: 0 0 0 10px rgba(0, 255, 209, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 255, 209, 0); }
`;

const ProfileWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "300px",
  height: "300px",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  animation: `${pulse} 3s infinite`,

  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.7)",
  },

  "& img": {
    transition: "transform 0.5s ease",
  },

  "&:hover img": {
    transform: "scale(1.05)",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#00FFD1",
    mixBlendMode: "screen",
    opacity: 0.12,
    transition: "opacity 0.4s ease",
    zIndex: 2,
  },

  "&:hover::before": {
    opacity: 0.2,
  },
}));

const AccentLine = styled(Divider)(({ theme }) => ({
  backgroundColor: "#00FFD1",
  height: "3px",
  width: "100%",
  margin: "1rem 0",
}));

export default function AboutMeSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="about-me"
      sx={{
        height: "auto",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: isMobile ? 0 : 15,
        py: isMobile ? 0 : "4rem",
      }}
    >
      <Box
        id="about"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 4 },
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
        }}
      >
        <ProfileWrapper>
          <Image
            src={profile}
            alt="John Irish Juaneza"
            fill
            style={{ objectFit: "cover" }}
          />
        </ProfileWrapper>

        <Stack spacing={1} maxWidth="700px">
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Merriweather', serif",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #00FFD1, #00BFA5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: isMobile ? "2rem" : "2.5rem",
              textAlign: "end",
            }}
          >
            About Me
          </Typography>

          <AccentLine />
          <Typography variant={isMobile ? "body2" : "h6"} color="#C0C0C0">
            Hi, I’m John Irish a former seafarer who transitioned into tech and
            is now a Senior Full Stack Software Engineer.
          </Typography>
          <Typography variant={isMobile ? "body2" : "h6"} color="#C0C0C0">
            It all started when I stumbled upon a Facebook ad for a coding
            bootcamp. Out of curiosity, I clicked and that simple action sparked
            a passion I never saw coming. From the first time I saw how code
            worked, it felt like it was speaking to me “You need to study me” So
            I dove in headfirst.
          </Typography>
          <Typography variant={isMobile ? "body2" : "h6"} color="#C0C0C0">
            I enrolled in the bootcamp and gave it everything I had. I was
            determined to grow from building frontend interfaces and backend
            systems to exploring server management. In just two years, I worked
            my way up to become a senior developer.
          </Typography>
          <Typography variant={isMobile ? "body2" : "h6"} color="#C0C0C0">
            Today, my learning hasn&apos;t stopped. I&apos;m currently expanding
            my skills into networking and server management, specifically
            learning how to set up and manage Ubuntu environments on
            DigitalOcean. It&apos;s a new chapter in my journey, and I&apos;m
            excited to keep leveling up one command line at a time.{" "}
            <span style={{ fontWeight: "bolder", color: "#00FFD1" }}>
              Each day fuels my passion to keep learning and growing
            </span>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
