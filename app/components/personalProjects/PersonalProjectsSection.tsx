"use client";

import {
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { FiExternalLink, FiGlobe, FiImage } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

// Add your next personal project here — same shape, `featured: true` gets the
// large showcase treatment, anything else renders as a compact card below it.
const personalProjects = [
  {
    title: "Kinitako",
    tagline: "Sari-sari store management, digitized — POS, utang, at kita in one app.",
    description:
      "A subscription SaaS I designed and built end-to-end (frontend + backend architecture) to help Filipino sari-sari store owners run their business digitally instead of a paper notebook: point-of-sale checkout, inventory with live cost/profit-per-unit calculation, a digital utang/lista ledger for customer credit, and a real-time kita (profit) analytics dashboard with trend charts, top-product, and payment-mix reporting. It's offline-first — installable as a PWA, keeps working through spotty barangay internet, and syncs automatically once back online. Includes role-based staff accounts and a self-service subscription flow where owners submit GCash/cash payment proof for admin review and approval.",
    tech: [
      "React 19",
      "TypeScript",
      "Vite",
      "Mantine UI",
      "Zustand",
      "TanStack Query",
      "React Hook Form + Zod",
      "IndexedDB / Offline Sync",
      "PWA",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy + Alembic",
      "Redis",
      "WebSockets",
      "JWT + RBAC",
      "Docker",
      "Caddy",
      "Cloudflare R2",
      "DigitalOcean",
      "GitHub Actions CI/CD",
    ],
    status: "Live",
    websiteUrl: "https://www.kinitako.store",
    appUrl: "https://app.kinitako.store",
    sourceUrl: "", // TODO: replace with a repo link if/when you want it public
    image: "/projects/kinitako-banner.png",
    featured: true,
  },
];

function ProjectImage({ image, title }: { image?: string; title: string }) {
  if (image) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          minHeight: 200,
          bgcolor: "#fffbf5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
    );
  }
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={1}
      sx={{ width: "100%", height: "100%", color: "rgba(0,255,209,.55)" }}
    >
      <FiImage size={30} />
      <Typography variant="caption" sx={{ color: "rgba(237,248,247,.45)" }}>
        Screenshot coming soon
      </Typography>
    </Stack>
  );
}

export default function PersonalProjectsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const featured = personalProjects.filter((project) => project.featured);
  const rest = personalProjects.filter((project) => !project.featured);

  return (
    <Box
      id="personal-projects"
      sx={{
        px: { xs: 3, md: 15 },
        py: { xs: 7, md: 11 },
        maxWidth: 1500,
        mx: "auto",
        width: "100%",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65 }}
      >
        <Chip
          label="BUILT ON MY OWN TIME"
          size="small"
          sx={{
            mb: 1.5,
            color: "#00ffd1",
            border: "1px solid rgba(0,255,209,.4)",
            bgcolor: "rgba(0,255,209,.06)",
          }}
        />
        <Typography
          variant={isMobile ? "h4" : "h3"}
          sx={{ fontFamily: "var(--font-merriweather)", fontWeight: 700, mb: 1.5 }}
        >
          Personal{" "}
          <Box component="span" sx={{ color: "#00ffd1" }}>
            Projects.
          </Box>
        </Typography>
        <Typography color="rgba(237,248,247,.62)" maxWidth={560} lineHeight={1.7} mb={5}>
          Things I&apos;ve designed and built end-to-end, start to finish, because I wanted them to
          exist — not client work. No NDA here, so the real product, screenshots, and thinking
          behind it are all fair game.
        </Typography>

        <Stack spacing={4}>
          {featured.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Box
                sx={{
                  borderRadius: 3,
                  border: "1px solid rgba(0,255,209,.28)",
                  bgcolor: "rgba(12,24,33,.82)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  transition: "border-color .3s, box-shadow .3s",
                  "&:hover": {
                    borderColor: "rgba(0,255,209,.55)",
                    boxShadow: "0 18px 40px rgba(0,0,0,.25)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", md: 420 },
                    minHeight: { xs: 200, md: "auto" },
                    flexShrink: 0,
                    bgcolor: "rgba(0,255,209,.05)",
                    borderBottom: { xs: "1px dashed rgba(0,255,209,.3)", md: "none" },
                    borderRight: { md: "1px dashed rgba(0,255,209,.3)" },
                    display: "flex",
                  }}
                >
                  <ProjectImage image={project.image} title={project.title} />
                </Box>

                <Box sx={{ p: { xs: 2.75, md: 4 }, flex: 1 }}>
                  <Stack direction="row" alignItems="center" flexWrap="wrap" gap={1} mb={1.5}>
                    <Chip
                      label="Featured"
                      size="small"
                      sx={{
                        color: "#00120f",
                        bgcolor: "#00ffd1",
                        fontWeight: 700,
                        fontSize: ".68rem",
                      }}
                    />
                    <Chip
                      label={project.status}
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: "rgba(0,255,209,.4)",
                        color: "rgba(237,248,247,.75)",
                        fontSize: ".68rem",
                      }}
                    />
                  </Stack>

                  <Typography
                    variant={isMobile ? "h5" : "h4"}
                    sx={{ fontFamily: "var(--font-merriweather)", fontWeight: 700, mb: 0.75 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    sx={{ color: "#78e8d5", fontWeight: 600, mb: 2, fontSize: ".95rem" }}
                  >
                    {project.tagline}
                  </Typography>
                  <Typography
                    sx={{ color: "rgba(232,244,244,.68)", lineHeight: 1.75, mb: 2.5, fontSize: ".93rem" }}
                  >
                    {project.description}
                  </Typography>

                  <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                    {project.tech.map((tech) => (
                      <Chip
                        key={tech}
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
                  </Stack>

                  <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                    {project.websiteUrl && (
                      <Button
                        onClick={() => window.open(project.websiteUrl, "_blank", "noopener,noreferrer")}
                        startIcon={<FiGlobe />}
                        variant="contained"
                        sx={{
                          bgcolor: "#00ffd1",
                          color: "#00120f",
                          fontWeight: 700,
                          textTransform: "none",
                          borderRadius: 1.5,
                          "&:hover": { bgcolor: "#00e6bc" },
                        }}
                      >
                        Visit Website
                      </Button>
                    )}
                    {project.appUrl && (
                      <Button
                        onClick={() => window.open(project.appUrl, "_blank", "noopener,noreferrer")}
                        startIcon={<FiExternalLink />}
                        variant="outlined"
                        sx={{
                          color: "#00ffd1",
                          borderColor: "rgba(0,255,209,.5)",
                          textTransform: "none",
                          borderRadius: 1.5,
                          "&:hover": { borderColor: "#00ffd1", bgcolor: "rgba(0,255,209,.08)" },
                        }}
                      >
                        Open App
                      </Button>
                    )}
                    {project.sourceUrl && (
                      <Button
                        onClick={() => window.open(project.sourceUrl, "_blank", "noopener,noreferrer")}
                        startIcon={<FaGithub />}
                        variant="outlined"
                        sx={{
                          color: "#eaf7f5",
                          borderColor: "rgba(255,255,255,.24)",
                          textTransform: "none",
                          borderRadius: 1.5,
                          "&:hover": { borderColor: "#00ffd1", color: "#00ffd1" },
                        }}
                      >
                        Source
                      </Button>
                    )}
                  </Stack>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Stack>

        {rest.length > 0 && (
          <Grid container spacing={3} sx={{ mt: 0.5 }}>
            {rest.map((project, index) => (
              <Grid key={project.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      borderRadius: 2.5,
                      border: "1px solid rgba(255,255,255,.09)",
                      bgcolor: "rgba(12,24,33,.82)",
                      p: 3,
                      transition: "transform .3s, border-color .3s",
                      "&:hover": { transform: "translateY(-6px)", borderColor: "rgba(0,255,209,.4)" },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: "#eaf7f5", mb: 1 }}
                    >
                      {project.title}
                    </Typography>
                    <Typography sx={{ color: "rgba(232,244,244,.64)", fontSize: ".88rem", mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={0.75}>
                      {project.tech.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{ borderColor: "rgba(0,255,209,.24)", color: "#92ecdc", fontSize: ".7rem" }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}
      </motion.div>
    </Box>
  );
}
