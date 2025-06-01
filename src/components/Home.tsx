import React, { useState, useCallback, useMemo } from "react";
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
  Skeleton,
} from "@mui/material";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
    setImageLoaded(true);
  }, []);

  const features = useMemo(() => [
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
  ], []);

  return (
    <Box>
      {/* Hero Banner */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.info.main} 0%, ${theme.palette.info.light} 100%)`,
          color: theme.palette.info.contrastText,
          pt: { xs: 6, sm: 8, md: 10 },
          pb: { xs: 4, sm: 6, md: 8 },
          position: "relative",
          overflow: "hidden",
          borderRadius: { sm: "0 0 3rem 3rem" },
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url('/southern-colorado-mountain.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.15,
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Box sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                    fontWeight: 800,
                    mb: 3,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: 1.2,
                  }}
                >
                  Sugar Rush
                </Typography>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                    fontWeight: 500,
                    mb: 4,
                    color: theme.palette.text.primary,
                    opacity: 0.8,
                  }}
                >
                  The Taste of Summertime
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "1.2rem" },
                    mb: 4,
                    color: theme.palette.text.secondary,
                    maxWidth: "500px",
                    mx: { xs: "auto", lg: 0 },
                  }}
                >
                  Bringing sweet memories and delicious treats to Colorado communities 
                  since 2008. From shaved ice to kettle corn, we create moments of pure happiness.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", lg: "flex-start" }, flexWrap: "wrap" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/menu"
                    size="large"
                    sx={{
                      py: 1.5,
                      px: 4,
                      fontSize: "1.1rem",
                    }}
                  >
                    View Menu
                  </Button>
                  <Button
                    variant="outlined"
                    component={Link}
                    to="/contact"
                    size="large"
                    sx={{
                      py: 1.5,
                      px: 4,
                      fontSize: "1.1rem",
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        color: "white",
                      },
                    }}
                  >
                    Book Us
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box sx={{ textAlign: "center", position: "relative" }}>
                {!imageLoaded && (
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={400}
                    sx={{
                      borderRadius: "16px",
                      maxWidth: "100%",
                      mx: "auto",
                    }}
                  />
                )}
                {!imageError && (
                  <img
                    src="/placeholder.png"
                    alt="Sugar Rush - Colorado's Premier Food Truck"
                    loading="lazy"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      maxHeight: "400px",
                      objectFit: "contain",
                      borderRadius: "16px",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
                      display: imageLoaded ? "block" : "none",
                    }}
                  />
                )}
                {imageError && imageLoaded && (
                  <Box
                    sx={{
                      maxWidth: "100%",
                      height: "400px",
                      borderRadius: "16px",
                      backgroundColor: "grey.100",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      p: 4,
                    }}
                  >
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      Sugar Rush
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Colorado Food Truck
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ my: { xs: 6, sm: 8, md: 10 } }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 700,
              mb: 2,
              color: "primary.main",
            }}
          >
            Why Choose Sugar Rush?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.2rem" },
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            We're more than just a food truck – we're memory makers, bringing joy and sweetness to every event.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  p: 2,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {feature.icon}
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: { xs: 6, md: 8 },
          mt: { xs: 4, sm: 6, md: 8 },
          borderRadius: { sm: "3rem 3rem 0 0" },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mb: 3,
                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
                fontWeight: 700,
                color: "white",
              }}
            >
              Ready to sweeten your event?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: { xs: "1.1rem", sm: "1.2rem" },
                color: "rgba(255,255,255,0.9)",
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Whether it's a community fair, private party, or corporate event, 
              we'll bring the sweetness that makes memories last.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/contact"
              size={isMobile ? "medium" : "large"}
              sx={{
                py: { xs: 1.5, sm: 2 },
                px: { xs: 4, sm: 6 },
                fontSize: "1.1rem",
                fontWeight: 600,
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

export default React.memo(Home);
