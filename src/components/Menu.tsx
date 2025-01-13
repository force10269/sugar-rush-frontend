import React from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

interface MenuItem {
  name: string;
  description: string;
  category: string;
}

const sampleMenu: { [key: string]: MenuItem[] } = {
  "Sweet Treats": [
    {
      name: "Cotton Candy",
      description: "Freshly spun cotton candy in various flavors",
      category: "Sweet Treats",
    },
    {
      name: "Shaved Ice",
      description: "Refreshing shaved ice with multiple syrup options",
      category: "Sweet Treats",
    },
  ],
  Beverages: [
    {
      name: "Fresh Lemonade",
      description: "Hand-squeezed lemonade, available in classic or flavored",
      category: "Beverages",
    },
  ],
  "Fried Delights": [
    {
      name: "Funnel Cake",
      description: "Classic carnival-style funnel cake with powdered sugar",
      category: "Fried Delights",
    },
  ],
};

const Menu: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDownloadPDF = () => {
    // For downloading
    window.open("/menu.pdf", "_blank");

    // Or for direct download
    const link = document.createElement("a");
    link.href = "/menu.pdf";
    link.download = "Sugar-Rush-Menu.pdf";
    link.click();
  };
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      {/* Header Section */}
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            mb: 2,
            color: "primary.main",
          }}
        >
          Our Menu
        </Typography>
        <Typography
          variant="h2"
          color="text.secondary"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.25rem" },
            mb: 3,
          }}
        >
          Sweet treats and delights for your event
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleDownloadPDF}
          sx={{ mb: 4 }}
        >
          Download PDF Menu
        </Button>
      </Box>

      {/* Menu Categories */}
      <Grid container spacing={3}>
        {Object.entries(sampleMenu).map(([category, items]) => (
          <Grid item xs={12} md={6} key={category}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                height: "100%",
                borderRadius: 2,
                bgcolor: "background.paper",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 2,
                  fontSize: { xs: "1.5rem", sm: "1.75rem" },
                  color: "primary.main",
                  borderBottom: "2px solid",
                  borderColor: "primary.main",
                  pb: 1,
                }}
              >
                {category}
              </Typography>
              <Grid container spacing={2}>
                {items.map((item, index) => (
                  <Grid item xs={12} key={index}>
                    <Card
                      sx={{
                        border: "1px solid",
                        borderColor: "divider",
                        boxShadow: "none",
                        height: "100%",
                        "&:hover": {
                          boxShadow: 1,
                        },
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" component="h4" gutterBottom>
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Note Section */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontStyle: "italic" }}
        >
          * Menu items and availability may vary by event. Contact us for
          customized offerings for your event.
        </Typography>
      </Box>
    </Container>
  );
};

export default Menu;
