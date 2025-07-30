import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link, useLocation } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Top navigation bar of the recipe app.
 */
export default function NavigationBar() {
  const location = useLocation();
  return (
    <AppBar position="static" sx={{ bgcolor: "primary.main", height: 64 }}>
      <Toolbar>
        <MenuBookIcon sx={{ mr: 1, color: "secondary.main", fontSize: 32 }}/>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#fff",
            flexGrow: 1,
            letterSpacing: "0.03em"
          }}
        >
          Recipe Explorer
        </Typography>
        <Button
          component={Link}
          to="/"
          sx={{
            color: location.pathname === "/" ? "secondary.main" : "#fff",
            mx: 1
          }}
          size="large"
        >
          All Recipes
        </Button>
        <Button
          component={Link}
          to="/favorites"
          sx={{
            color: location.pathname === "/favorites" ? "secondary.main" : "#fff",
            mx: 1
          }}
          size="large"
        >
          Favorites
        </Button>
      </Toolbar>
    </AppBar>
  );
}
