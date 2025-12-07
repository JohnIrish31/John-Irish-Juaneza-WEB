"use client";

import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
  Divider,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ExperienceContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(6, 4),
  display: "flex",
  justifyContent: "center",
}));

const TimelineItemBase = styled(Paper)(({ theme }) => ({
  backgroundColor: "#12181D",
  borderLeft: "4px solid #00FFD1",
  padding: theme.spacing(3),
  position: "relative",
  boxShadow: "0 8px 20px rgba(0, 255, 209, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  borderRadius: "12px",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 12px 25px rgba(0, 255, 209, 0.3)",
  },
}));

const TimelineDot = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "-12px",
  top: "20px",
  width: "16px",
  height: "16px",
  borderRadius: "50%",
  backgroundColor: "#00FFD1",
  border: "2px solid #00FFD1",
}));

const experiences = [
  {
    company: "Global Visions Inc.",
    role: "Senior Full Stack Software Engineer",
    duration: "October 2024 – Present",
    description:
      "Responsible for designing and building core systems that support the company’s warehouse logistics operations. My work focuses on AWS infrastructure planning, database architecture, stored procedures, and API development, with occasional frontend contributions when needed. I collaborate closely with internal teams to create scalable solutions for multi-tenant warehouse management, inventory handling, and operational process automation.",
  },
  {
    company: "Venture Protect Management and Consultancy Inc.",
    role: "Senior Full Stack Software Engineer",
    duration: "July 2024 – August 2025 ( End Contract )",
    description:
      "Architected and developed full-scale systems from scratch, focusing on back-office dashboards, cash flow management, chart visualizations, and reporting tools. Led development using Next.js, Node.js, and MySQL and worked closely with DevOps for streamlined deployment on DigitalOcean.",
  },

  {
    company: "Freelance",
    role: "Full Stack Developer",
    duration: "2024",
    description:
      "Improved existing codebase for better user experience. Designed MySQL schemas, built RESTful APIs, and integrated them into the frontend to streamline client-side functionality.",
  },
  {
    company: "DFNN Inc.",
    role: "Junior Application Developer",
    duration: "July 2023 – July 2024",
    description: `Built and maintained a back-office system for game administrators at DFNN, a leading game service provider. Worked on user interfaces for admin controls, player management, and report generation. This role deepened my understanding of backend integration and real-time data handling in gaming operations.`,
  },
];

const AccentLine = styled(Divider)(({ theme }) => ({
  backgroundColor: "#00FFD1",
  height: "3px",
  width: "100%",
  margin: "1rem 0",
}));

function ExperienceItem({ exp, index }: { exp: any; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <TimelineItemBase>
        <TimelineDot />
        <Typography variant="h6" sx={{ color: "#00FFD1", fontWeight: 600 }}>
          {exp.role} @ {exp.company}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: "#B0B0B0", fontStyle: "italic", mb: 1 }}
        >
          {exp.duration}
        </Typography>
        <Typography variant="body1" sx={{ color: "#C0C0C0", lineHeight: 1.6 }}>
          {exp.description}
        </Typography>
      </TimelineItemBase>
    </motion.div>
  );
}

export default function WorkExperienceSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="experience"
      sx={{
        px: isMobile ? 0 : 15,
        pb: isMobile ? 0 : "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ExperienceContainer>
        <Box maxWidth="1000px" width="100%">
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Merriweather', serif",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #00FFD1, #00BFA5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: isMobile ? "2rem" : "2.5rem",
              textAlign: "start",
            }}
          >
            Experience
          </Typography>
          <AccentLine />

          <Stack spacing={4}>
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} index={index} />
            ))}
          </Stack>
        </Box>
      </ExperienceContainer>
    </Box>
  );
}
