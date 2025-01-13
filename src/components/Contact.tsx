import React, { useState } from "react";
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

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector(selectContactState);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setContactStatus("loading"));

    try {
      // SIMULATING SUCCESSFUL SUBMISSION
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(setContactStatus("succeeded"));
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
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
      content: "[PUT IN EMAIL HERE]",
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Phone",
      content: "[PUT IN PHONE # HERE]",
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Location",
      content: "[PUT IN LOCALE HERE]",
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
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper
              elevation={2}
              sx={{
                p: { xs: 2, sm: 3, md: 4 },
                borderRadius: 2,
              }}
            >
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  {status === "failed" && (
                    <Alert severity="error">{error}</Alert>
                  )}
                  {status === "succeeded" && (
                    <Alert severity="success">
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

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size={isMobile ? "medium" : "large"}
                    disabled={status === "loading"}
                    sx={{ mt: 2 }}
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
