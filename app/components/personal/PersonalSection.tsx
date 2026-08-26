"use client";

import { Box, Chip, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiCamera, FiLayers, FiSearch, FiTrendingUp, FiZap } from "react-icons/fi";
import { FaCarSide, FaGamepad } from "react-icons/fa";
import vietnam from "../../Images/vietnam.jpeg";
import gaming from "../../Images/gaming.jpeg";
import drive from "../../Images/drive.jpg";

const principles = [
  {
    label: "Engineering Mindset",
    icon: FiLayers,
    caption: "I care about clean architecture, maintainable code, and systems built to scale.",
  },
  {
    label: "Performance & Reliability",
    icon: FiZap,
    caption: "I build applications with performance, stability, and real-world usage in mind.",
  },
  {
    label: "Problem Solving",
    icon: FiSearch,
    caption: "I enjoy breaking complex problems into practical, reliable solutions.",
  },
  {
    label: "Continuous Learning",
    icon: FiTrendingUp,
    caption: "Always exploring better tools, technologies, and ways to improve my craft.",
  },
];
const resets = [
  {
    label: "Travel",
    icon: FiCamera,
    caption: "Exploring new places and making meaningful memories with my wife.",
    detail:
      "Travel helps me step away from the routine, see new perspectives, and come back with fresh energy.",
    accent: "rgba(0, 255, 209, .15)",
    image:
      "linear-gradient(180deg, transparent 22%, rgba(5,14,20,.8) 100%), linear-gradient(135deg, #0e5d63 0%, #237b73 32%, #e0a35a 62%, #202b35 100%)",
    photo: vietnam,
  },
  {
    label: "Gaming",
    icon: FaGamepad,
    caption: "A great way to reset, have fun, and recharge after a focused week.",
    detail:
      "Gaming gives me a fun, focused break whether it is on console, PC, or mobile before I return to the next challenge.",
    accent: "rgba(88, 142, 255, .16)",
    image:
      "linear-gradient(180deg, transparent 22%, rgba(5,14,20,.82) 100%), linear-gradient(135deg, #20285c 0%, #394a9b 38%, #9e58a1 70%, #171c38 100%)",
    photo: gaming,
  },
  {
    label: "Long-distance driving",
    icon: FaCarSide,
    caption: "Road trips, quiet drives, and destinations worth taking the scenic route for.",
    detail:
      "Long drives give me room to think, enjoy the journey, and reset before taking on the next project.",
    accent: "rgba(250, 183, 78, .14)",
    image:
      "linear-gradient(180deg, transparent 22%, rgba(5,14,20,.82) 100%), linear-gradient(135deg, #3c5060 0%, #7694a8 35%, #f2a853 72%, #1d2931 100%)",
    photo: drive,
  },
];

export default function PersonalSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeReset, setActiveReset] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  return (
    <Box
      id="life"
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
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ md: "end" }}
          gap={2}
          mb={5}
        >
          <Box>
            <Chip
              label="BEYOND THE CODE"
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
              sx={{ fontFamily: "var(--font-merriweather)", fontWeight: 700 }}
            >
              How I approach{" "}
              <Box component="span" sx={{ color: "#00ffd1" }}>
                building software.
              </Box>
            </Typography>
          </Box>
          <Typography color="rgba(237,248,247,.62)" maxWidth={470}>
            How I think, build, and continuously improve as an engineer.
          </Typography>
        </Stack>
        <Grid container spacing={2.25}>
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Grid key={index} size={{ xs: 6, md: 3 }}>
                <motion.div
                  whileHover={{ y: -7 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <Box
                    sx={{
                      minHeight: 184,
                      p: 3,
                      borderRadius: 4,
                      border: "1px dashed rgba(0,255,209,.38)",
                      bgcolor: "rgba(12,26,35,.76)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all .25s",
                      "&:hover": { bgcolor: "rgba(0,255,209,.09)", borderColor: "#00ffd1" },
                    }}
                  >
                    <Icon size={26} color="#00ffd1" />
                    <Box>
                      <Typography fontWeight={700}>{principle.label}</Typography>
                      <Typography variant="body2" color="rgba(237,248,247,.55)" mt={0.5}>
                        {principle.caption}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
        <Box
          component="section"
          sx={{
            mt: { xs: 7, md: 10 },
            pt: { xs: 5, md: 7 },
            borderTop: "1px solid rgba(255,255,255,.1)",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ md: "end" }}
            gap={2}
            mb={4}
          >
            <Box>
              <Typography
                sx={{
                  color: "#78e8d5",
                  textTransform: "uppercase",
                  letterSpacing: 2.5,
                  fontWeight: 800,
                  fontSize: ".7rem",
                  mb: 1,
                }}
              >
                Outside of work
              </Typography>
              <Typography
                variant={isMobile ? "h4" : "h3"}
                sx={{ fontFamily: "var(--font-merriweather)", fontWeight: 700 }}
              >
                How I{" "}
                <Box component="span" sx={{ color: "#00ffd1" }}>
                  recharge.
                </Box>
              </Typography>
            </Box>
            <Typography color="rgba(237,248,247,.58)" maxWidth={460} lineHeight={1.7}>
              The moments that help me reset, stay curious, and return to work with fresh energy.
            </Typography>
          </Stack>

          <Grid container spacing={2.25}>
            {resets.map((reset, index) => {
              const Icon = reset.icon;
              const isActive = activeReset === index;
              return (
                <Grid key={reset.label} size={{ xs: 12, sm: 4 }}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  >
                    <Box
                      component="button"
                      type="button"
                      onClick={() => setActiveReset(index)}
                      aria-pressed={isActive}
                      sx={{
                        width: "100%",
                        minHeight: { xs: 220, md: 270 },
                        p: 3,
                        borderRadius: 3,
                        border: "1px dashed rgba(0,255,209,.38)",
                        bgcolor: "rgba(12,26,35,.76)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        textAlign: "left",
                        cursor: "pointer",
                        color: "inherit",
                        position: "relative",
                        overflow: "hidden",
                        transition: "all .25s",
                        "&:hover": {
                          bgcolor: "rgba(0,255,209,.09)",
                          borderColor: "#00ffd1",
                        },
                        ...(isActive && {
                          bgcolor: "rgba(0,255,209,.09)",
                          borderColor: "#00ffd1",
                          borderStyle: "solid",
                        }),
                      }}
                    >
                      <Box
                        sx={{
                          width: 46,
                          height: 46,
                          borderRadius: 2,
                          bgcolor: "rgba(6,16,23,.43)",
                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        <Icon size={23} color="#b5fff1" />
                      </Box>
                      <Box>
                        <Typography fontWeight={750} fontSize="1.05rem" mb={0.6}>
                          {reset.label}
                        </Typography>
                        <Typography variant="body2" color="rgba(237,248,247,.72)" lineHeight={1.65}>
                          {reset.caption}
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={0.7} sx={{ mt: 1.6 }}>
                          <FiCamera size={13} color="#b6fff1" />
                          <Typography variant="caption" sx={{ color: "#b6fff1", fontWeight: 700 }}>
                            {isActive ? "Viewing photo" : "Click to view photo"}
                          </Typography>
                        </Stack>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>

          <AnimatePresence mode="wait">
            <motion.div
              key={resets[activeReset].label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={2.25}
                alignItems="stretch"
                sx={{ mt: 2.25 }}
              >
                <Box
                  sx={{
                    flex: 1,
                    px: { xs: 2.25, md: 3 },
                    py: 2,
                    borderRadius: 2,
                    bgcolor: "rgba(0,255,209,.06)",
                    borderLeft: "2px solid #00ffd1",
                  }}
                >
                  <Typography color="#00ffd1" fontWeight={800} fontSize=".78rem" mb={0.5}>
                    WHY IT HELPS ME RESET
                  </Typography>
                  <Typography color="rgba(237,248,247,.74)" lineHeight={1.7}>
                    {resets[activeReset].detail}
                  </Typography>
                </Box>

                {/* Photo reveal panel — clickable to enlarge */}
                <Box
                  component="button"
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  aria-label={`Enlarge ${resets[activeReset].label} photo`}
                  className="reset-photo-btn"
                  sx={{
                    position: "relative",
                    flex: { xs: "1 1 auto", md: "0 0 280px" },
                    minHeight: { xs: 200, md: "auto" },
                    borderRadius: 2,
                    overflow: "hidden",
                    border: "1px solid rgba(0,255,209,.35)",
                    boxShadow: "0 20px 45px rgba(0,0,0,.35)",
                    p: 0,
                    cursor: "pointer",
                    background: "none",
                    display: "block",
                    textAlign: "left",
                    transition: "border-color .25s, box-shadow .25s, transform .25s",
                    "&:hover": {
                      borderColor: "rgba(0,255,209,.85)",
                      boxShadow: "0 22px 50px rgba(0,0,0,.45)",
                      transform: "translateY(-3px)",
                    },
                    "&:hover .reset-photo-img": { transform: "scale(1.06)" },
                    "&:hover .reset-photo-hint": { opacity: 1, transform: "translateY(0)" },
                  }}
                >
                  <motion.div
                    initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
                  >
                    <motion.img
                      className="reset-photo-img"
                      src={resets[activeReset].photo.src}
                      alt={resets[activeReset].label}
                      initial={{ scale: 1.18, opacity: 0.4, filter: "blur(6px)" }}
                      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        width: "100%",
                        height: "100%",
                        minHeight: 200,
                        objectFit: "cover",
                        display: "block",
                        transition: "transform .4s ease",
                      }}
                    />
                  </motion.div>
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, transparent 45%, rgba(5,14,20,.8) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                  {/* Always-visible zoom icon badge, top-right */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      bgcolor: "rgba(5,14,20,.55)",
                      border: "1px solid rgba(0,255,209,.5)",
                      display: "grid",
                      placeItems: "center",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        border: "2px solid #00ffd1",
                        borderRadius: "50%",
                        position: "relative",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: 5,
                          height: 2,
                          bgcolor: "#00ffd1",
                          right: -5,
                          bottom: -1,
                          transform: "rotate(45deg)",
                        },
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      position: "absolute",
                      left: 14,
                      bottom: 12,
                      fontWeight: 800,
                      fontSize: ".8rem",
                      color: "#fff",
                      letterSpacing: 0.4,
                    }}
                  >
                    {resets[activeReset].label}
                  </Typography>
                  <Stack
                    className="reset-photo-hint"
                    direction="row"
                    alignItems="center"
                    spacing={0.6}
                    sx={{
                      position: "absolute",
                      inset: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: { xs: 1, md: 0 },
                      transform: { xs: "none", md: "translateY(6px)" },
                      transition: "opacity .25s, transform .25s",
                      bgcolor: "rgba(5,14,20,.28)",
                    }}
                  >
                    <Box
                      sx={{
                        px: 1.5,
                        py: 0.6,
                        borderRadius: 5,
                        bgcolor: "rgba(5,14,20,.75)",
                        border: "1px solid rgba(0,255,209,.6)",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.6,
                      }}
                    >
                      <Typography sx={{ color: "#00ffd1", fontWeight: 700, fontSize: ".72rem" }}>
                        Click to enlarge
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </motion.div>
          </AnimatePresence>
        </Box>
      </motion.div>

      {/* Fullscreen lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightboxOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1300,
              background: "rgba(4,10,15,.92)",
              backdropFilter: "blur(6px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              cursor: "zoom-out",
            }}
          >
            <motion.img
              key={resets[activeReset].label}
              src={resets[activeReset].photo.src}
              alt={resets[activeReset].label}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "min(90vw, 720px)",
                maxHeight: "85vh",
                width: "auto",
                height: "auto",
                borderRadius: 12,
                border: "1px solid rgba(0,255,209,.4)",
                boxShadow: "0 30px 80px rgba(0,0,0,.6)",
                objectFit: "contain",
                cursor: "default",
              }}
            />
            <Box
              onClick={() => setLightboxOpen(false)}
              sx={{
                position: "absolute",
                top: { xs: 16, md: 28 },
                right: { xs: 16, md: 28 },
                width: 40,
                height: 40,
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,.08)",
                border: "1px solid rgba(255,255,255,.25)",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
                color: "#fff",
                fontSize: "1.1rem",
                "&:hover": { bgcolor: "rgba(0,255,209,.15)", borderColor: "#00ffd1" },
              }}
            >
              ✕
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
