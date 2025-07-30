import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import RecipeCard from "./RecipeCard";
import { useRecipeContext } from "../state/RecipeContext";

/**
 * PUBLIC_INTERFACE
 * Favorites page - shows bookmarked recipes.
 */
export default function Favorites() {
  const { bookmarked, recipesById } = useRecipeContext();

  if (!bookmarked.length) {
    return (
      <Box sx={{ pt: 5, textAlign: "center" }}>
        <Typography variant="h6" color="text.secondary">
          No favorites yet.
        </Typography>
      </Box>
    );
  }
  return (
    <>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 500 }}>
        Your Bookmarked Recipes
      </Typography>
      <Grid container spacing={3}>
        {bookmarked.map(id => {
          const recipe = recipesById[id];
          return (
            <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
              <RecipeCard recipe={recipe} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
