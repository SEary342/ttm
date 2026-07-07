import type { Route } from "./+types/home";
import { Container, Typography, Box, Button } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tactical Team Manager" },
    { name: "description", content: "The missing tech lead/PM tool for Gitlab" },
  ];
}

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Tactical Team Manager
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph textAlign="center">
          Welcome to your new MUI-powered frontend!
        </Typography>
        <Button variant="contained" startIcon={<DashboardIcon />}>
          Get Started
        </Button>
      </Box>
    </Container>
  );
}
