import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import RecipeCard from "./RecipeCard";
import { useRecipeContext } from "../state/RecipeContext";

/**
 * PUBLIC_INTERFACE
 * Recipe grid (main display).
 */
export default function RecipeGrid() {
  const { filteredRecipes } = useRecipeContext();

  if (!filteredRecipes.length) {
    return (
      <Box sx={{ pt: 5, textAlign: "center" }}>
        <Typography variant="h6" color="text.secondary">
          No recipes found.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {filteredRecipes.map(recipe => (
        <Grid key={recipe.id} item xs={12} sm={6} md={4} lg={3}>
          <RecipeCard recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
}
