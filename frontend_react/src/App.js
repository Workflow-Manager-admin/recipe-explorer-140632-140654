import React from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, Box, useTheme } from "@mui/material";
import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";
import RecipeGrid from "./components/RecipeGrid";
import RecipeDetailModal from "./components/RecipeDetailModal";
import Favorites from "./components/Favorites";
import { useRecipeContext } from "./state/RecipeContext";

/**
 * PUBLIC_INTERFACE
 * Main App component: Renders layout and manages top-level state (route, sidebar/modal display).
 */
export default function App() {
  const theme = useTheme();
  const { showDetail, selectedRecipe } = useRecipeContext();

  return (
    <>
      <CssBaseline />
      <Box sx={{ height: "100vh", bgcolor: theme.palette.background.default }}>
        <NavigationBar />
        <Box
          sx={{
            display: "flex",
            height: "calc(100vh - 64px)",
            bgcolor: "#fafafa"
          }}
        >
          <Sidebar />
          <Box
            sx={{
              flex: 1,
              overflow: "auto",
              padding: { xs: 1, sm: 2, md: 3 }
            }}
          >
            <Routes>
              <Route path="/" element={<RecipeGrid />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="*" element={<RecipeGrid />} />
            </Routes>
            {showDetail && selectedRecipe && (
              <RecipeDetailModal />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
