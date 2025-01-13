import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const features = [
    {
      title: "Events & Fairs",
      description:
        "Find us at rodeos, fairs, and special events across Colorado",
      icon: <EventIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />,
    },
    {
      title: "Sweet Treats",
      description:
        "From cotton candy to shaved ice, we bring the sweetness to you",
      icon: (
        <RestaurantIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
      ),
    },
    {
      title: "Colorado Local",
      description: "Proudly serving communities throughout Colorado",
      icon: (
        <LocationOnIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
      ),
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          pt: { xs: 4, sm: 6, md: 8 },
          pb: { xs: 4, sm: 6, md: 8 },
          position: "relative",
          overflow: "hidden",
          borderRadius: { sm: "0 0 2rem 2rem" },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                mb: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/placeholder.png"
                alt="Sugar Rush"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "150px",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                fontWeight: "bold",
                mb: 2,
                color: "text.primary",
                textShadow: "none",
              }}
            >
              Sugar Rush LTD
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ my: { xs: 4, sm: 6, md: 8 } }}>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {feature.icon}
                  <Typography variant="h5" component="h2" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box
        sx={{
          bgcolor: "primary.light",
          color: "white",
          py: { xs: 6, md: 8 },
          mt: { xs: 4, sm: 6, md: 8 },
          borderRadius: { sm: "2rem 2rem 0 0" },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
              }}
            >
              Ready to sweeten your event?
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/contact"
              size={isMobile ? "medium" : "large"}
              sx={{
                py: { xs: 1, sm: 1.5 },
                px: { xs: 3, sm: 4 },
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
