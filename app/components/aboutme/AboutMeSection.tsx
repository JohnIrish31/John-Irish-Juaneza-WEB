"use client";

import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
  Divider,
  Chip,
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
            Hi, I&apos;m John Irish, a former seafarer who transitioned into
            tech and is now a
            <span
              style={{
                fontWeight: "bolder",
                color: "#00FFD1",
                paddingLeft: ".5em",
              }}
            >
              Full Stack Software Engineer
            </span>
            .
          </Typography>

          <Typography variant={isMobile ? "body2" : "h6"} color="#C0C0C0">
            My journey began when I discovered a coding bootcamp out of
            curiosity. What started as a simple click quickly became a long-term
            passion. I committed myself to learning software development, and
            over time, I grew from building basic interfaces to developing
            <span
              style={{
                fontWeight: "bolder",
                color: "#00FFD1",
                paddingLeft: ".5em",
              }}
            >
              full-stack systems, internal business platforms, and
              cloud-deployed applications
            </span>
            .
          </Typography>

          <Typography variant={isMobile ? "body2" : "h6"} color="#C0C0C0">
            I&apos;ve built systems such as
            <span
              style={{
                fontWeight: "bolder",
                color: "#00FFD1",
                paddingLeft: ".5rem",
              }}
            >
              warehouse management tools
            </span>
            ,
            <span style={{ fontWeight: "bolder", color: "#00FFD1" }}>
              back-office dashboards
            </span>
            ,
            <span style={{ fontWeight: "bolder", color: "#00FFD1" }}>
              analytics platforms
            </span>
            ,
            <span style={{ fontWeight: "bolder", color: "#00FFD1" }}>
              CRM modules
            </span>
            , and operational automation features. I work primarily with
            <span
              style={{
                fontWeight: "bolder",
                color: "#00FFD1",
                paddingLeft: ".5em",
              }}
            >
              Next.js, React, TypeScript, Node.js, Express, and MySQL
            </span>
            , translating complex requirements into clean and efficient
            solutions.
          </Typography>

          <Typography variant={isMobile ? "body2" : "h6"} color="#C0C0C0">
            I also handle cloud deployment and server management. I&apos;ve
            deepened my skills in
            <span
              style={{
                fontWeight: "bolder",
                color: "#00FFD1",
                paddingLeft: ".5em",
                paddingRight: ".5em",
              }}
            >
              AWS (EC2, RDS, S3, CloudFront, VPC, CloudWatch, SES)
            </span>
            and Linux systems administration. I deployed this portfolio from
            scratch on an Ubuntu server in DigitalOcean using tools like{" "}
            <span style={{ fontWeight: "bolder", color: "#00FFD1" }}>
              PuTTY, Nginx, Let&apos;s Encrypt SSL, UFW Firewall, and full
              HTTP/HTTPS setup
            </span>
            . It&apos;s been an exciting step forward, and I&apos;m continuing
            to sharpen my DevOps skills one command line at a time.{" "}
            <span style={{ fontWeight: "bolder", color: "#00FFD1" }}>
              Each day fuels my passion to keep learning and growing.
            </span>
          </Typography>

          <AccentLine />

          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              fontWeight: "bold",
              color: "#00FFD1",
              mt: 2,
            }}
          >
            Tech Stack & Skills
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
            {[
              // Frontend
              "Next.js",
              "React",
              "TypeScript",
              "JavaScript",
              "MUI",
              "Tailwind",
              "PrimeReact",
              "Bootstrap",
              "Chart.js",
              "Framer Motion",

              // Backend
              "Node.js",
              "Express",
              "REST API",
              "Socket.IO",

              // Database
              "MySQL",
              "MongoDB",

              // Features
              "CSV Export",
              "File Upload",

              // Cloud & DevOps
              "AWS EC2",
              "AWS RDS",
              "AWS S3",
              "AWS CloudFront",
              "AWS VPC",
              "AWS CloudWatch",
              "Amazon SES",
              "DigitalOcean",
              "Cloudflare",
              "Docker",
              "Nginx",
              "Let&apos;s Encrypt SSL",
              "UFW Firewall",
              "Ubuntu Server",
              "PuTTY",

              // Tools
              "Git",
              "VS Code",
            ].map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                variant="outlined"
                size="small"
                sx={{
                  borderColor: "#00FFD1",
                  color: "#00FFD1",
                  fontSize: "0.75rem",
                }}
              />
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
