import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const highlights = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Our Food Truck",
      description:
        "A vibrant red truck bringing joy and sweetness to events across Colorado",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Our Team",
      description:
        "Passionate food enthusiasts dedicated to creating memorable experiences",
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Our Events",
      description:
        "From local fairs to private events, we bring the fun to every occasion",
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
            mb: 4,
            color: "primary.main",
          }}
        >
          About Sugar Rush LTD
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
              mb: 3,
              color: "text.primary",
            }}
          >
            Our Story
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              color: "text.secondary",
            }}
          >
            [STORY PLACEHOLDER HERE]
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {highlights.map((highlight, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>{highlight.icon}</Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                    {highlight.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {highlight.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
              mb: 3,
              color: "text.primary",
            }}
          >
            Our Values
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              color: "text.secondary",
            }}
          >
            [VALUES PLACEHOLDER HERE]
          </Typography>
        </Box>

        <Box
          sx={{
            textAlign: "center",
            bgcolor: "primary.main",
            color: "white",
            p: { xs: 3, md: 4 },
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.5rem", sm: "1.75rem" },
              mb: 2,
            }}
          >
            Want to have Sugar Rush at your next event?
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/contact"
            size={isMobile ? "medium" : "large"}
            sx={{ mt: 2 }}
          >
            Contact Us Today
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
