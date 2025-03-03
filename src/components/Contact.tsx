import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Alert,
  Stack,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  setContactStatus,
  setContactError,
  selectContactState,
} from "../store/store";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ContactFormData } from "../store/types";
import { sendContactEmail } from "../service/EmailService";

const Contact: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector(selectContactState);

  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);

  const [containerHeight, setContainerHeight] = useState<number | undefined>(
    undefined,
  );

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const syncHeight = () => {
      if (cardsContainerRef.current) {
        const cardsHeight = cardsContainerRef.current.clientHeight;
        setContainerHeight(cardsHeight);
      }
    };

    syncHeight();
    window.addEventListener("resize", syncHeight);
    return () => {
      window.removeEventListener("resize", syncHeight);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setContactStatus("loading"));

    try {
      const emailSuccess = await sendContactEmail(formData);
      if (emailSuccess) {
        dispatch(setContactStatus("succeeded"));
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Email service failed to send email");
      }
    } catch (err) {
      dispatch(
        setContactError(
          err instanceof Error ? err.message : "An error occurred",
        ),
      );
      dispatch(setContactStatus("failed"));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Email",
      content: "sugarr.llc@gmail.com",
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Phone",
      content: (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography color="text.secondary">
            Deontay Martinez - (719) 580-0076
          </Typography>
          <Typography color="text.secondary">
            Erica Martinez - (719) 480-4230
          </Typography>
        </Box>
      ),
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Location",
      content: "La Jara, CO",
    },
    {
      icon: <InstagramIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Instagram",
      content: (
        <a
          href="https://www.instagram.com/sugarrush.ltd?igsh=MXR4em8wd3Q2OThjdQ=="
          style={{ textDecoration: "none", color: "inherit" }}
        >
          @sugarrush.ltd
        </a>
      ),
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            mb: 2,
            color: "primary.main",
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.1rem", sm: "1.25rem" },
            mb: 6,
            color: "text.secondary",
          }}
        >
          Have questions? We'd love to hear from you. (no email set up yet)
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box ref={cardsContainerRef}>
              <Stack spacing={3}>
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    sx={{
                      textAlign: "center",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ mb: 1 }}>{info.icon}</Box>
                      <Typography variant="h6" gutterBottom>
                        {info.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {info.content}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper
              ref={formContainerRef}
              elevation={2}
              sx={{
                p: { xs: 2, sm: 3, md: 4 },
                borderRadius: 2,
                height: !isMobile ? containerHeight : "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <form onSubmit={handleSubmit} style={{ height: "100%" }}>
                <Stack
                  spacing={3}
                  sx={{ height: "100%", justifyContent: "space-between" }}
                >
                  <Box>
                    {status === "failed" && (
                      <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                      </Alert>
                    )}
                    {status === "succeeded" && (
                      <Alert severity="success" sx={{ mb: 2 }}>
                        Message sent successfully! We'll get back to you soon.
                      </Alert>
                    )}

                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                    </Grid>
                  </Box>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size={isMobile ? "medium" : "large"}
                    disabled={status === "loading"}
                    sx={{ alignSelf: "flex-start" }}
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
