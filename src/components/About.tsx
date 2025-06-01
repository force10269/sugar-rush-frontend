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
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HandshakeIcon from "@mui/icons-material/Handshake";
import StarIcon from "@mui/icons-material/Star";

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const highlights = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Our Food Truck",
      description:
        "A mobile kitchen bringing memories to people throughout the Colorado summertime",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "The Martinez Family",
      description:
        "A family-owned business dedicated to creating memorable experiences for our community",
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Our Events",
      description:
        "From local fairs to private events, we bring the fun to every occasion",
    },
  ];

  const values = [
    {
      icon: <FavoriteIcon sx={{ fontSize: 36, color: "primary.main" }} />,
      title: "Hard Work & Passion",
      description: "We strive to deliver happiness in every bite and every sip"
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 36, color: "primary.main" }} />,
      title: "Honesty & Kindness",
      description: "Always serving with a smile and commitment to quality"
    },
    {
      icon: <StarIcon sx={{ fontSize: 36, color: "primary.main" }} />,
      title: "Community Focus",
      description: "Rooted in La Jara, Colorado, bringing people together"
    }
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
            fontWeight: 700,
          }}
        >
          About Sugar Rush Ltd
        </Typography>
        
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.2rem", sm: "1.4rem" },
            mb: 6,
            color: "text.secondary",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          Creating memories, smiles, and moments of pure sweetness since 2008
        </Typography>

        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
              mb: 4,
              color: "primary.main",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Our Story
          </Typography>
          
          <Card sx={{ p: 4, mb: 4, backgroundColor: "info.main" }}>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: { xs: "1.1rem", sm: "1.2rem" },
                color: "text.primary",
                lineHeight: 1.7,
              }}
            >
              In 2008, the parents of young D, Mike, and Ace spawned the idea that their kids needed something to do in the summertime and being at home wasn't an option. Their dad bought an old frame from a pop-up camper and built a blue shaved ice shack in its place. From that point forward, D's Shaved Ice would become a staple in La Jara, Colorado each summer for all people to enjoy and look forward to.
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: { xs: "1.1rem", sm: "1.2rem" },
                color: "text.primary",
                lineHeight: 1.7,
              }}
            >
              Since then, the family has expanded to lemonades, kettle corn, and other yummy food but the shaved ice has always stayed. Now the focus has become building the best memories for people each summer and making sure they enjoy a product from the Martinez family.
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.2rem" },
                color: "text.primary",
                lineHeight: 1.7,
                fontWeight: 500,
              }}
            >
              No longer known as D's Shaved Ice but as <strong>Sugar Rush</strong>, the company is committed to producing the best food and sweet treats for many summers to come! That is why Sugar Rush is known as <em>the taste of summertime!</em>
            </Typography>
          </Card>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {highlights.map((highlight, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  p: 2,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>{highlight.icon}</Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    {highlight.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {highlight.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 6, borderColor: "primary.light", opacity: 0.3 }} />

        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
              mb: 4,
              color: "primary.main",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Our Values
          </Typography>
          
          <Card sx={{ p: 4, mb: 4, backgroundColor: "background.paper", border: `2px solid ${theme.palette.primary.light}` }}>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: { xs: "1.1rem", sm: "1.2rem" },
                color: "text.primary",
                lineHeight: 1.7,
              }}
            >
              At Sugar Rush Ltd., we believe in the power of <strong>hard work, honesty, and kindness</strong> to create the best possible experience for our customers. Rooted in La Jara, Colorado, we bring people together with refreshing lemonade, perfectly popped kettle corn, icy shaved treats, and the most satisfying melts, fries, and fried delights.
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: { xs: "1.1rem", sm: "1.2rem" },
                color: "text.primary",
                lineHeight: 1.7,
              }}
            >
              We strive to deliver happiness in every bite and every sip, always serving with a smile and a commitment to quality. Our passion for what we do drives us to be the best, whether it's perfecting our recipes, providing exceptional service, or working tirelessly to bring joy to our community.
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.2rem" },
                color: "text.primary",
                lineHeight: 1.7,
                fontWeight: 500,
                fontStyle: "italic",
              }}
            >
              At Sugar Rush Ltd., we don't just make food: <strong>we create memories, smiles, and moments of pure sweetness.</strong>
            </Typography>
          </Card>

          <Grid container spacing={3} sx={{ mt: 4 }}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Box sx={{ textAlign: "center", p: 2 }}>
                  <Box sx={{ mb: 2 }}>{value.icon}</Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: "primary.main" }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                    {value.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            textAlign: "center",
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
            color: "white",
            p: { xs: 4, md: 6 },
            borderRadius: 3,
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
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.5rem", sm: "1.75rem" },
                mb: 2,
                fontWeight: 700,
              }}
              color="white"
            >
              Want to have Sugar Rush at your next event?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: { xs: "1.1rem", sm: "1.2rem" },
                color: "rgba(255,255,255,0.9)",
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Let us bring the taste of summertime to your community event, private party, or special celebration.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/contact"
              size={isMobile ? "medium" : "large"}
              sx={{ 
                mt: 2,
                py: 1.5,
                px: 4,
                fontSize: "1.1rem",
                fontWeight: 600,
              }}
            >
              Contact Us Today
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
