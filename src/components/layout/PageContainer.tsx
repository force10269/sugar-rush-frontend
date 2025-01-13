import React from "react";
import { Box, Container, useTheme } from "@mui/material";

interface PageContainerProps {
  children: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  disablePadding?: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  maxWidth = "lg",
  disablePadding = false,
}) => {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        width: "100%",
        minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
        paddingTop: theme.mixins.toolbar.minHeight, // Account for fixed navbar
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        maxWidth={maxWidth}
        sx={{
          flexGrow: 1,
          py: disablePadding ? 0 : { xs: 3, sm: 4, md: 5 },
          px: disablePadding ? 0 : { xs: 2, sm: 3 },
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default PageContainer;
