"use client";

import {
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
} from "@mui/material";
import { MdWorkOutline } from "react-icons/md";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Automated Inventory Management System",
    description:
      "An automated warehouse inventory system that manages the full lifecycle of goods including goods receipt, withdrawal requests, and goods issuance. It also provides dashboards and inventory reports for warehouse operations. I primarily handled backend development, including infrastructure planning, database design, and API implementation, while supervising the team and managing tasks for frontend developers, contributing to UI work when needed.",

    impact:
      "A complex warehouse platform simplified into a user-friendly operational system. It manages the complete lifecycle of goods from receipt and withdrawal requests to issuance while providing data analytics, inventory dashboards, and actionable reports. I led the project, driving infrastructure planning, database architecture, API development, and frontend-team coordination. The system includes variance processing to identify and resolve inventory discrepancies, plus an intuitive attachment upload workflow for supporting documents.",
    tech: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Node.js",
      "Express",
      "REST API",
      "AWS RDS (MySQL)",
      "AWS S3",
      "AWS EC2",
      "AWS Cloudfront",
      "AWS SES",
      "MUI",
      "PrimeReact",
      "CSV Export",
      "PDF Upload",
      "Attachment Upload",
      "Variance Processing",
      "Data Analytics",
      "CSV Upload",
    ],
  },
  {
    title: "GVI Consolidated Operations & Inventory Platform",
    description:
      "A centralized web platform for managing field operations, inventory, reporting, and operational workflows in a single application. Built with a scalable full-stack architecture and deployed on AWS with containerized services and CI/CD automation.",
    tech: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "AWS S3",
      "AWS EC2",
      "AWS CloudFront",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "Insurance Back Office",
    description:
      "A multi-role back-office system with dedicated views and permissions for finance, admin, cashiers, and customer service teams. Features include cash flow tracking, admin dashboards, KYC management, customer registration, and manual cashiering all in one centralized platform.",
    tech: [
      "Next.js",
      "typescript",
      "Redux",
      "Node.js",
      "Express",
      "REST API",
      "Tailwind",
      "MySQL",
      "MUI",
      "Prime-react",
      "CSV Export",
      "Image Import",
    ],
  },
  {
    title: "Marketing Affiliate System",
    description:
      "An affiliate partnership platform built for tracking customer acquisitions and commission earnings. Includes detailed dashboards for affiliate performance, customer management, and real-time marketing insights.",
    tech: [
      "Next.js",
      "typescript",
      "Redux",
      "Node.js",
      "Express",
      "REST API",
      "MySQL",
      "MUI",
      "CSV Export",
    ],
  },
  {
    title: "Executive Business Intelligence Dashboard",
    description:
      "A centralized platform for company core members to monitor real-time performance through sales analytics, operational reports, and visual dashboards. Designed to give clear insights into business health, growth trends, and strategic KPIs all in one system.",
    tech: ["Next.js", "Node.js", "Express", "REST API", "MUI", "CSV Export"],
  },
  {
    title: "Mortgage CRM & Buyer Management System",
    description:
      "A comprehensive CRM platform tailored for home mortgage operations. Manages buyer profiles, uploaded documents, and transaction progress, while providing dashboards, reports, and insights for internal teams. Enables efficient customer handling from inquiry to closing.",
    tech: ["Next.js", "MySQL", "REST API", "MUI", "CSV Export", "File Upload"],
  },
  {
    title: "Angkasangga Back Office",
    description:
      "An internal platform for managing and monitoring supporter registrations for a political party list. Includes dashboards for visualizing member distribution across regions, residency tracking, and real-time insights into campaign reach.",
    tech: ["React", "Node.js", "Express", "MUI", "MySQL"],
  },
  {
    title: "E-commerce",
    description:
      "Using MySQL Workbench, I created a stored procedure with logical conditions tailored for an e-commerce platform and transformed it into an API endpoint, allowing the front-end to consume and display the data dynamically.",
    tech: ["React", "Node.js", "Express", "MUI", "MySQL"],
  },
  {
    title: "Game Admin System",
    description:
      "A secure admin dashboard designed for managing live game rounds from initiating and declaring winners via livestream, to closing rounds and monitoring activities. Includes access to transactions, dashboards, and registration with role-based access control.",
    tech: ["React", "Node.js", "MySQL", "Bootstrap", "Chart js", "Socket IO", "VS Code"],
  },
  {
    title: "Personal Chat App",
    description:
      "I developed a full-stack chat application using the MERN stack (MongoDB, Express, React, Node.js). MongoDB was used as the database to store user information and chat messages.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket IO"],
  },
  // {
  //   title: "New Project  Coming Soon",
  //   description:
  //     "Use this card for your next featured project. Add the project name, a short problem-to-solution story, and a link or screenshot when it is ready.",
  //   tech: ["Add stack", "Add link", "Add screenshot"],
  //   placeholder: true,
  // },
];

// const AccentLine = styled(Divider)(({ theme }) => ({
//   backgroundColor: "#00FFD1",
//   height: "3px",
//   width: "100%",
//   margin: "1rem 0",
// }));

export default function WorkProjectsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      id="project"
      sx={{
        px: isMobile ? 0 : 15,
        pb: isMobile ? 0 : "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            px: { xs: 2, md: 6 },
            py: { xs: 6, md: 10 },
            backgroundColor: "transparent",
            color: "white",
            minHeight: "100vh",
          }}
        >
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
            Projects & Systems
          </Typography>
          <Typography
            sx={{ color: "rgba(232,244,244,.58)", maxWidth: 620, mb: 4, lineHeight: 1.7 }}
          >
            A selection of internal platforms and operational systems built for real business
            workflows.
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid key={index} size={{ xs: 12, md: 6 }} display="flex">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "rgba(12, 24, 33, .82)",
                      border: "1px solid rgba(255,255,255,.09)",
                      borderRadius: 2.5,
                      boxShadow: "none",
                      transition: "transform .3s, border-color .3s, box-shadow .3s",
                      "&:hover": {
                        transform: "translateY(-7px)",
                        borderColor: "rgba(0,255,209,.44)",
                        boxShadow: "0 18px 35px rgba(0,0,0,.22)",
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: { xs: 2.5, md: 3.2 } }}>
                      <Typography
                        sx={{
                          color: "rgba(0,255,209,.64)",
                          fontSize: ".68rem",
                          fontWeight: 700,
                          letterSpacing: 2,
                          mb: 2,
                        }}
                      >
                        {/* {project.placeholder
                          ? "IN DEVELOPMENT"
                          : `PROJECT ${String(index + 1).padStart(2, "0")}`} */}
                        PROJECT {String(index + 1).padStart(2, "0")}
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                        <MdWorkOutline style={{ color: "#00FFD1" }} />
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: "bold", color: "#eaf7f5", lineHeight: 1.35 }}
                        >
                          {project.title}
                        </Typography>
                      </Stack>

                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(232,244,244,.64)",
                          mb: 2,
                          fontSize: ".92rem",
                          lineHeight: 1.7,
                        }}
                      >
                        {project.impact ?? project.description}
                      </Typography>

                      {/* {project.placeholder && (
                        <Chip
                          label="Project placeholder"
                          size="small"
                          sx={{ mb: 2, color: "#00FFD1", bgcolor: "rgba(0,255,209,.09)" }}
                        />
                      )} */}

                      <Stack direction="row" flexWrap="wrap" gap={1} sx={{ rowGap: 1.2 }}>
                        {project.tech.map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            variant="outlined"
                            size="small"
                            sx={{
                              borderColor: "rgba(0,255,209,.24)",
                              color: "#92ecdc",
                              bgcolor: "rgba(0,255,209,.04)",
                              fontSize: "0.75rem",
                            }}
                          />
                        ))}

                        <Typography
                          variant="caption"
                          sx={{
                            color: "rgba(232,244,244,.42)",
                            display: "block",
                            width: "100%",
                            pt: 2,
                          }}
                        >
                          ⚠️ Visuals and data are confidential and not shown due to NDA.
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>
    </Box>
  );
}
