"use client";

import {
  Box,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import profile from "../../Images/profilePhoto.jpg";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MySQL",
  "MongoDB",
  "AWS EC2",
  "AWS RDS",
  "AWS S3",
  "AWS IAM",
  "AWS CloudFront",
  "AWS Certificate Manager",
  "SSL / TLS",
  "Docker",
  "Nginx",
];
const learningSkills = [
  "React Native",
  "Python FastAPI",
  "ORM",
  "PostgreSQL",
  "SQLAlchemy",
  "Alembic",
  "Redis",
  "AI Integration",
];

export default function AboutMeSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      id="about-me"
      component="section"
      sx={{ px: { xs: 3, md: 15 }, py: { xs: 8, md: 13 }, maxWidth: 1500, mx: "auto" }}
    >
      <Grid container spacing={{ xs: 5, md: 10 }} alignItems="center">
        <Grid size={{ xs: 12, md: 5 }}>
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <Box sx={{ position: "relative", maxWidth: 450, mx: { xs: "auto", md: 0 } }}>
              <Box
                sx={{
                  position: "absolute",
                  inset: { xs: "-14px 14px 14px -14px", md: "-20px 20px 20px -20px" },
                  border: "1px solid rgba(0,255,209,.45)",
                  borderRadius: "26px 26px 26px 5px",
                }}
              />
              <Box
                sx={{
                  position: "relative",
                  aspectRatio: "4 / 4.7",
                  overflow: "hidden",
                  borderRadius: "26px 26px 5px 26px",
                  bgcolor: "#10202a",
                  boxShadow: "20px 24px 70px rgba(0,0,0,.42)",
                  "&:after": {
                    content: '\"\"',
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 45%, rgba(3,12,17,.42))",
                    pointerEvents: "none",
                  },
                  "& img": {
                    filter: "contrast(1.04) saturate(.88)",
                    transition: "transform .6s ease",
                  },
                  "&:hover img": { transform: "scale(1.045)" },
                }}
              >
                <Image
                  src={profile}
                  alt="John Irish Juaneza"
                  fill
                  sizes="(max-width: 900px) 85vw, 450px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  right: -14,
                  bottom: 25,
                  bgcolor: "#00ffd1",
                  color: "#071015",
                  p: 2,
                  borderRadius: 2,
                  minWidth: 126,
                }}
              >
                <Typography fontSize="1.35rem" fontWeight={800}>
                  3+ years
                </Typography>
                <Typography fontSize=".68rem" fontWeight={700} letterSpacing={0.5}>
                  BUILDING SOFTWARE
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <Typography
              sx={{
                color: "#78e8d5",
                textTransform: "uppercase",
                letterSpacing: 3,
                fontWeight: 700,
                fontSize: ".74rem",
                mb: 1.4,
              }}
            >
              About me
            </Typography>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{
                fontFamily: "var(--font-merriweather)",
                lineHeight: 1.2,
                fontWeight: 700,
                maxWidth: 650,
              }}
            >
              From the sea to{" "}
              <Box component="span" sx={{ color: "#00ffd1" }}>
                software systems.
              </Box>
            </Typography>
            <Divider sx={{ width: 58, my: 3, borderColor: "#00ffd1", borderBottomWidth: 2 }} />
            <Stack
              spacing={2.1}
              sx={{
                color: "rgba(232,244,244,.72)",
                lineHeight: 1.82,
                fontSize: { xs: ".96rem", md: "1.05rem" },
              }}
            >
              <Typography>
                I&apos;m a former seafarer turned Full Stack Software Engineer. I bring calm,
                ownership, and a systems-first mindset to every product I build.
              </Typography>
              <Typography>
                My work spans warehouse operations, back-office platforms, analytics dashboards,
                CRMs, and automation. I enjoy making the complicated feel simple for the teams who
                rely on it every day.
              </Typography>
              <Typography>
                Beyond application development, I deploy and maintain production environments with
                AWS, Linux, Docker, Nginx, and secure HTTPS configuration.
              </Typography>
            </Stack>
            <Box
              sx={{
                mt: 4,
                p: 2.5,
                borderLeft: "2px solid #00ffd1",
                bgcolor: "rgba(0,255,209,.045)",
              }}
            >
              <Typography color="rgba(232,244,244,.84)" fontStyle="italic">
                “I care about the details behind a dependable product: clear architecture, secure
                deployment, and a useful experience.”
              </Typography>
            </Box>
            <Typography sx={{ mt: 4, mb: 1.5, fontWeight: 700, letterSpacing: 0.2 }}>
              Core toolkit
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  size="small"
                  sx={{
                    color: "#bafcf0",
                    bgcolor: "rgba(0,255,209,.06)",
                    border: "1px solid rgba(0,255,209,.18)",
                    borderRadius: 1,
                    fontSize: ".72rem",
                  }}
                />
              ))}
            </Stack>
            <Box
              sx={{
                mt: 3.5,
                p: { xs: 2, sm: 2.5 },
                borderRadius: 2,
                background: "linear-gradient(100deg, rgba(0,255,209,.11), rgba(0,255,209,.025))",
                border: "1px solid rgba(0,255,209,.25)",
              }}
            >
              <Typography
                sx={{
                  color: "#00ffd1",
                  textTransform: "uppercase",
                  letterSpacing: 2.1,
                  fontWeight: 800,
                  fontSize: ".7rem",
                  mb: 0.7,
                }}
              >
                Currently learning & building toward
              </Typography>
              <Typography
                sx={{
                  color: "rgba(232,244,244,.68)",
                  fontSize: ".88rem",
                  mb: 1.6,
                  lineHeight: 1.6,
                }}
              >
                I&apos;m actively developing these skills and confident in applying them to upcoming
                projects.
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {learningSkills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      color: "#e8fffb",
                      bgcolor: "rgba(0,255,209,.12)",
                      border: "1px solid rgba(0,255,209,.38)",
                      borderRadius: 1,
                      fontWeight: 700,
                      fontSize: ".72rem",
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
