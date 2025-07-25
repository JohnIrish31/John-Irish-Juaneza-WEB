"use client";

import {
  Box,
  Paper,
  Typography,
  Stack,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactMeSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    "success" | "error" | "warning"
  >("success");

  const handleSubmit = async () => {
    if (!email.trim() || !message.trim()) {
      setSnackbarMessage("Please fill in both email and message.");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
      return;
    }

    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setEmail("");
        setMessage("");
        setSnackbarMessage("Message sent successfully!");
        setSnackbarSeverity("success");
      } else {
        setSnackbarMessage("Failed to send message.");
        setSnackbarSeverity("error");
      }

      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error sending message:", error);
      setSnackbarMessage("An unexpected error occurred.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        height: "auto",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pb: isMobile ? "2rem" : "2rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Paper
          elevation={5}
          sx={{
            backgroundColor: "#111",
            border: "1px solid #1e1e1e",
            borderRadius: 3,
            padding: 4,
            width: isMobile ? "92vw" : "50vw",
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
              textAlign: "center",
              fontSize: isMobile ? "2rem" : "2.5rem",
              pb: "1rem",
            }}
          >
            Get In Touch
          </Typography>

          <Stack spacing={3}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{ style: { color: "#ccc" } }}
              InputProps={{
                sx: {
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#444",
                  },
                },
              }}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              InputLabelProps={{ style: { color: "#ccc" } }}
              InputProps={{
                sx: {
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#444",
                  },
                },
              }}
            />
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                bgcolor: "#00FFD1",
                color: "#000",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "#00ccaa",
                },
              }}
            >
              Send Message
            </Button>
            <Typography
              variant="body1"
              sx={{ color: "#ccc", textAlign: "center", pb: 2 }}
            >
              Or reach me directly at: <br />
              <strong style={{ color: "#00FFD1" }}>
                juanezajohnirish@gmail.com
              </strong>
              <br />
              <strong style={{ color: "#00FFD1" }}>+63 976 419 9934</strong>
            </Typography>
          </Stack>
        </Paper>
      </motion.div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
