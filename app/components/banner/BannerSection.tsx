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
          I build scalable full-stack systems including warehouse management
          systems, back-office dashboards, analytics platforms, and CRM tools
          using Next.js, React, TypeScript, Node.js, and MySQL. I also deploy
          production applications on AWS (EC2, RDS, S3, CloudFront, VPC,
          CloudWatch, SES) and manage Linux cloud servers with Nginx and Docker.
        </Typography>
      </Stack>
    </Box>
  );
}
