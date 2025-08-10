"use client";

import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";

export default function BannerSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        height: "auto",
        marginTop: "110px",
        position: "relative",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "start",
        px: isMobile ? 3 : 15,
        py: isMobile ? 2 : "5rem",
      }}
    >
      <Stack spacing={isMobile ? 1 : 1}>
        <Typography
          sx={{
            fontFamily: "var(--font-geistSans)",
            letterSpacing: 2,
            fontWeight: 300,
          }}
          variant={isMobile ? "body1" : "h6"}
          color="#C0C0C0"
        >
          Hi, my name is
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Merriweather', serif",
            letterSpacing: 3,
          }}
          variant={isMobile ? "h6" : "h2"}
          color="#C0C0C0"
          fontWeight="bold"
        >
          John Irish Juaneza
        </Typography>
        <Typography
          variant={isMobile ? "body1" : "h3"}
          sx={{
            fontFamily: "var(--font-geistSans)",
            fontWeight: 400,
            color: "#00FFD1",
            mt: 1,
          }}
        >
          <Typewriter
            words={["FULL STACK SOFTWARE ENGINEER"]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </Typography>
        <Typography
          color="#C0C0C0"
          sx={{ pr: isMobile ? "0px" : "20rem" }}
          variant={isMobile ? "body2" : "h6"}
        >
          I am a Software Engineer specializing in building scalable back-office
          dashboards and business analytics systems. I work with React, Next.js,
          TypeScript, Node.js, Express, and MySQL, and use tools like MUI,
          Redux, Chart.js, Docker, and Git to create intuitive and efficient
          user and admin interfaces. I also have hands-on experience with Python
          Django for API development and React Native for mobile apps.
        </Typography>
      </Stack>
    </Box>
  );
}
