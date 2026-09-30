"use client";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import icon1 from "../../Images/nav-icon1.svg";
import icon2 from "../../Images/nav-icon2.svg";
import icon3 from "../../Images/nav-icon3.svg";

const navigation = [
  { label: "About", id: "about-me" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "project" },
  { label: "Personal Projects", id: "personal-projects" },
  { label: "Contact", id: "contact" },
];

const socialLinks = [
  { icon: icon1, label: "LinkedIn", url: "https://www.linkedin.com/in/johnirishjuaneza/" },
  { icon: icon2, label: "Facebook", url: "https://www.facebook.com/Juaneza.JohnIrish" },
  { icon: icon3, label: "GitHub", url: "https://github.com/JohnIrish31" },
];

export default function MainAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuAnchor(null);
  };

  const openResume = () =>
    window.open(
      "https://drive.google.com/file/d/1J6oSAeX9AAHmPjRqtWdPCkVZmvpaxyvq/view?usp=drive_link",
      "_blank",
      "noopener,noreferrer"
    );

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "rgba(6,11,18,.92)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: 66, md: 72 },
          maxWidth: 1440,
          width: "100%",
          mx: "auto",
          px: { xs: 2.5, md: 6 },
        }}
      >
        <Box
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          sx={{ cursor: "pointer", minWidth: { md: 190 } }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-merriweather)",
              fontWeight: 700,
              color: "#f1fbfa",
              fontSize: { xs: ".95rem", md: "1.05rem" },
            }}
          >
            John Irish<span style={{ color: "#00ffd1" }}>.</span>
          </Typography>
        </Box>

        {!isMobile && (
          <Stack direction="row" spacing={3.5} sx={{ flex: 1, justifyContent: "center" }}>
            {navigation.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                sx={{
                  color: "rgba(241,251,250,.7)",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: ".82rem",
                  p: 0,
                  minWidth: 0,
                  "&:hover": { color: "#00ffd1", bgcolor: "transparent" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        )}

        {!isMobile ? (
          <Box
            sx={{
              minWidth: 230,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 0.2,
            }}
          >
            {socialLinks.map((item) => (
              <IconButton
                key={item.label}
                onClick={() => window.open(item.url, "_blank", "noopener,noreferrer")}
                aria-label={item.label}
                size="small"
                sx={{ width: 30, height: 30, "&:hover": { bgcolor: "rgba(0,255,209,.1)" } }}
              >
                <Image src={item.icon} alt="" width={15} height={15} />
              </IconButton>
            ))}
            <Button
              onClick={openResume}
              variant="outlined"
              sx={{
                ml: 0.8,
                color: "#00ffd1",
                borderColor: "rgba(0,255,209,.5)",
                borderRadius: 1.25,
                textTransform: "none",
                px: 1.5,
                py: 0.65,
                fontSize: ".75rem",
                fontWeight: 700,
                "&:hover": { borderColor: "#00ffd1", bgcolor: "rgba(0,255,209,.08)" },
              }}
            >
              Resume
            </Button>
          </Box>
        ) : (
          <Box sx={{ ml: "auto" }}>
            <IconButton
              onClick={(event) => setMenuAnchor(event.currentTarget)}
              sx={{ color: "#eaf7f5" }}
              aria-label="Open navigation"
            >
              <FaBars size={18} />
            </IconButton>
          </Box>
        )}
      </Toolbar>

      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={() => setMenuAnchor(null)}
        PaperProps={{
          sx: {
            mt: 1,
            width: "calc(100vw - 28px)",
            bgcolor: "#0b151e",
            border: "1px solid rgba(255,255,255,.1)",
            borderRadius: 2,
            p: 0.75,
          },
        }}
      >
        {navigation.map((item) => (
          <MenuItem
            key={item.id}
            onClick={() => scrollTo(item.id)}
            sx={{ color: "#eaf7f5", borderRadius: 1.25, py: 1.25 }}
          >
            {item.label}
          </MenuItem>
        ))}
        <MenuItem
          onClick={openResume}
          sx={{ color: "#00ffd1", fontWeight: 700, borderRadius: 1.25, py: 1.25 }}
        >
          View resume
        </MenuItem>
        <Stack direction="row" spacing={1} sx={{ px: 1.5, py: 1 }}>
          {socialLinks.map((item) => (
            <IconButton
              key={item.label}
              onClick={() => window.open(item.url, "_blank", "noopener,noreferrer")}
              aria-label={item.label}
              size="small"
            >
              <Image src={item.icon} alt="" width={16} height={16} />
            </IconButton>
          ))}
        </Stack>
      </Menu>
    </AppBar>
  );
}
