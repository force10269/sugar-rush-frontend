import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
  useTheme,
  useMediaQuery,
  Alert,
  AlertTitle,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Menu: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [pdfExists, setPdfExists] = useState<boolean | null>(null);

  // Use import.meta.env for Vite environment variables
  const MENU_PDF_PATH = "/sugar-rush-menu.pdf";

  useEffect(() => {
    // Check if PDF exists
    const checkPdfExists = async () => {
      try {
        const response = await fetch(MENU_PDF_PATH, { method: "HEAD" });
        setPdfExists(response.ok);
      } catch (error) {
        console.error("Error checking PDF:", error);
        setPdfExists(false);
      }
    };

    checkPdfExists();
  }, []);

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = MENU_PDF_PATH;
    link.download = "Sugar-Rush-Menu.pdf";
    link.click();
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            mb: 2,
            color: "primary.main",
            fontWeight: 700,
          }}
        >
          Our Menu
        </Typography>
        <Typography
          variant="h2"
          color="text.secondary"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.25rem" },
            mb: 4,
            fontWeight: 400,
          }}
        >
          View our complete menu with current prices and seasonal offerings
        </Typography>
      </Box>

      <Alert
        severity="success"
        sx={{
          mb: 4,
          borderRadius: 2,
          "& .MuiAlert-message": {
            fontSize: "1rem",
          },
        }}
      >
        <AlertTitle sx={{ fontWeight: 600 }}>Full Menu PDF</AlertTitle>
        Download our complete menu for your convenience and easy reference.
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDownloadPDF}
            startIcon={<DownloadIcon />}
            size="medium"
            sx={{ fontWeight: 600 }}
          >
            Download Menu PDF
          </Button>
        </Box>
      </Alert>

      <Paper
        elevation={3}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          minHeight: { xs: "500px", md: "700px" },
          position: "relative",
          bgcolor: "grey.50",
        }}
      >
        {pdfExists === null ? (
          <Box
            sx={{
              width: "100%",
              height: { xs: "500px", md: "700px" },
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" color="text.secondary">
              Loading menu...
            </Typography>
          </Box>
        ) : pdfExists ? (
          // PDF exists - show in iframe with fallback
          <Box
            sx={{
              width: "100%",
              height: { xs: "500px", md: "700px" },
              position: "relative",
            }}
          >
            <iframe
              src={`${MENU_PDF_PATH}#view=FitH`}
              width="100%"
              height="100%"
              style={{
                border: "none",
                borderRadius: "inherit",
              }}
              title="Sugar Rush Menu PDF"
              onError={() => {
                console.error("PDF failed to load in iframe");
                setPdfExists(false);
              }}
            />
            {/* Fallback message for browsers that don't support PDF viewing */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.paper",
                zIndex: 1,
                // Show fallback if iframe fails to load
                "@media (max-width: 600px)": {
                  display: "flex",
                },
              }}
            >
              <Box sx={{ textAlign: "center", p: 4 }}>
                <MenuBookIcon
                  sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  PDF Viewer Not Supported
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Please use the download button to view our menu.
                </Typography>
                <Button
                  variant="contained"
                  onClick={handleDownloadPDF}
                  startIcon={<DownloadIcon />}
                >
                  Download Menu
                </Button>
              </Box>
            </Box>
          </Box>
        ) : (
          // PDF doesn't exist or failed to load - show error message with download option
          <Box
            sx={{
              width: "100%",
              height: { xs: "500px", md: "700px" },
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                p: 4,
                bgcolor: "background.paper",
                borderRadius: 2,
                boxShadow: 2,
                maxWidth: "400px",
              }}
            >
              <MenuBookIcon
                sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
              />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Menu Viewer Unavailable
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                The PDF viewer is temporarily unavailable. Please download the
                menu to view our complete offerings.
              </Typography>
              <Button
                variant="contained"
                onClick={handleDownloadPDF}
                startIcon={<DownloadIcon />}
                sx={{ fontWeight: 600 }}
              >
                Download Menu PDF
              </Button>
            </Box>
          </Box>
        )}
      </Paper>

      {isMobile && pdfExists && (
        <Alert
          severity="info"
          sx={{
            mt: 3,
            borderRadius: 2,
          }}
        >
          For the best mobile viewing experience, we recommend downloading the
          menu.
        </Alert>
      )}
    </Container>
  );
};

export default Menu;
