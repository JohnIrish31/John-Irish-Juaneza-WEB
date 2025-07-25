"use client";

import {
  AppBar,
  Box,
  Toolbar,
  useMediaQuery,
  useTheme,
  IconButton,
  Stack,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

import icon1 from "../../Images/nav-icon1.svg";
import icon2 from "../../Images/nav-icon2.svg";
// import icon3 from "../../Images/nav-icon3.svg";

export default function MainAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorElMobileApp, setAnchorElMobileApp] =
    useState<null | HTMLElement>(null);

  const handleClickMobileApp = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMobileApp(event.currentTarget);
  };

  const handleCloseMobileApp = () => {
    setAnchorElMobileApp(null);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      handleCloseMobileApp();
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: 1201,
        backgroundColor: "#000000",
        py: "1rem",
      }}
    >
      <Box sx={{ px: isMobile ? "" : "5rem" }}>
        <Toolbar
          sx={{
            background: "#00000",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "var(--font-merriweather)",
              fontWeight: "bold",
              color: "white",
              cursor: "pointer",
            }}
          >
            DevJohn
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {!isMobile && (
              <Stack
                direction="row"
                spacing={4}
                alignItems="center"
                justifyContent="center"
              >
                {["ABOUT ME", "EXPERIENCE", "PROJECT", "CONTACT"].map(
                  (item) => (
                    <Typography
                      key={item}
                      onClick={() =>
                        scrollToSection(item.toLowerCase().replace(" ", "-"))
                      }
                      variant="h6"
                      sx={{
                        fontFamily: "var(--font-merriweather)",
                        cursor: "pointer",
                        letterSpacing: "0.5px",
                        fontWeight: 500,
                        color: "#F0E8DD",
                        transition: "color 0.1s ease-in-out",
                        "&:hover": {
                          color: "white",
                        },
                      }}
                    >
                      {item}
                    </Typography>
                  )
                )}

                <Stack direction="row" spacing={2}>
                  {[
                    {
                      icon: icon1,
                      url: "https://www.linkedin.com/in/johnirishjuaneza/",
                    },
                    {
                      icon: icon2,
                      url: "https://www.facebook.com/Juaneza.JohnIrish",
                    },
                    // { icon: icon3, url: "" },
                  ].map((item, index) => (
                    <Box
                      key={index}
                      onClick={() => window.open(item.url, "_blank")}
                      sx={{
                        display: "inline-block",
                        position: "relative",
                        width: 42,
                        height: 42,
                        borderRadius: "50%",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        backgroundColor: "rgba(217, 217, 217, 0.1)",
                        overflow: "hidden",
                        cursor: "pointer",
                        transition: "all 0.3s ease-in-out",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          width: 42,
                          height: 42,
                          top: 0,
                          left: 0,
                          backgroundColor: "#ffffff",
                          borderRadius: "50%",
                          transform: "scale(0)",
                          transition: "transform 0.3s ease-in-out",
                          zIndex: 0,
                        },
                        "&:hover::before": {
                          transform: "scale(1)",
                        },
                        "&:hover img": {
                          filter:
                            "brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%) contrast(86%)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          height: "100%",
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        <Image
                          src={item.icon}
                          alt={`navIcon${index + 1}`}
                          width={18}
                          height={18}
                          style={{
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                    </Box>
                  ))}
                </Stack>
                <Button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1GZlgiAGZ7z-chDZEAGDhT0X0Sk1KdNTu/view?usp=drive_link",
                      "_blank"
                    )
                  }
                  className="connect-btn"
                >
                  <span>MY RESUME</span>
                </Button>
              </Stack>
            )}

            {/* Mobile: Menu Icon */}
            {isMobile && (
              <IconButton color="inherit" onClick={handleClickMobileApp}>
                <FaBars />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Box>

      <Menu
        anchorEl={anchorElMobileApp}
        open={Boolean(anchorElMobileApp)}
        onClose={handleCloseMobileApp}
        PaperProps={{
          sx: {
            mt: 1,
            boxShadow: 3,
            borderRadius: 2,
            width: "90vw",
            backgroundColor: "#111",
            px: 2,
            py: 2,
          },
        }}
      >
        {["ABOUT ME", "EXPERIENCE", "PROJECT", "CONTACT"].map((item, idx) => (
          <MenuItem
            key={idx}
            onClick={() =>
              scrollToSection(item.toLowerCase().replace(" ", "-"))
            }
            sx={{
              color: "#eee",
              fontWeight: 500,
              fontSize: "1rem",
              borderRadius: 1,
              "&:hover": {
                backgroundColor: "#222",
              },
            }}
          >
            {item}
          </MenuItem>
        ))}

        <Box sx={{ mt: 2 }}>
          <Typography
            variant="body2"
            sx={{ color: "#aaa", mb: 1, fontWeight: "bold" }}
          >
            SOCIAL LINKS
          </Typography>

          <Stack direction="row" spacing={2}>
            {[
              {
                icon: icon1,
                url: "https://www.linkedin.com/in/johnirishjuaneza/",
              },
              {
                icon: icon2,
                url: "https://www.facebook.com/Juaneza.JohnIrish",
              },
              // { icon: icon3, url: "" },
            ].map((item, index) => (
              <Box
                key={index}
                onClick={() => window.open(item.url, "_blank")}
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.3)",
                  backgroundColor: "#1a1a1a",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "#00FFD1",
                  },
                }}
              >
                <Image
                  src={item.icon}
                  alt={`icon-${index}`}
                  width={16}
                  height={16}
                />
              </Box>
            ))}
          </Stack>
        </Box>

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1GZlgiAGZ7z-chDZEAGDhT0X0Sk1KdNTu/view?usp=drive_link",
                "_blank"
              )
            }
            variant="outlined"
            sx={{
              color: "#00FFD1",
              borderColor: "#00FFD1",
              fontWeight: 600,
              px: 4,
              "&:hover": {
                backgroundColor: "#00FFD1",
                color: "#000",
              },
            }}
          >
            MY RESUME
          </Button>
        </Box>
      </Menu>
    </AppBar>
  );
}
