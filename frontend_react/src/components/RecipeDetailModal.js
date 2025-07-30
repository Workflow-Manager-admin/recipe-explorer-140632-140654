import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Box,
  Typography,
  IconButton,
  Chip,
  Stack
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRecipeContext } from "../state/RecipeContext";

/**
 * PUBLIC_INTERFACE
 * Modal that displays selected recipe details.
 */
export default function RecipeDetailModal() {
  const {
    showDetail,
    closeRecipeDetail,
    selectedRecipe,
    isBookmarked,
    toggleBookmark
  } = useRecipeContext();

  if (!selectedRecipe) return null;

  return (
    <Dialog open={showDetail} onClose={closeRecipeDetail} maxWidth="md" fullWidth>
      <DialogTitle sx={{ color: "primary.main", fontWeight: 600 }}>
        {selectedRecipe.title}
        <IconButton
          aria-label="close"
          onClick={closeRecipeDetail}
          sx={{ position: "absolute", right: 10, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <IconButton
          aria-label="bookmark"
          onClick={() => toggleBookmark(selectedRecipe.id)}
          sx={{ position: "absolute", right: 54, top: 8 }}
        >
          <FavoriteIcon
            sx={{
              color: isBookmarked(selectedRecipe.id) ? "accent.main" : "grey.400"
            }}
          />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
          <Box
            sx={{
              flex: "0 0 240px",
              p: 0,
              mr: { md: 3, xs: 0 },
              mb: { xs: 2, md: 0 }
            }}
          >
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.title}
              style={{
                width: "100%",
                borderRadius: 16,
                objectFit: "cover"
              }}
            />
            <Stack spacing={1} mt={2}>
              <Chip label={selectedRecipe.category} color="primary" />
            </Stack>
          </Box>
          <Box sx={{ flex: 1 }}>
            <DialogContentText>
              <Typography component="div" sx={{ color: "text.primary", mb: 2 }}>
                {selectedRecipe.description}
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 600 }}>
                Ingredients
              </Typography>
              <ul>
                {selectedRecipe.ingredients.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 600 }}>
                Steps
              </Typography>
              <ol>
                {selectedRecipe.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </DialogContentText>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
