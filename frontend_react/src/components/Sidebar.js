import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useRecipeContext } from "../state/RecipeContext";

/**
 * PUBLIC_INTERFACE
 * Sidebar for searching/filtering recipes.
 */
export default function Sidebar() {
  const { search, setSearch } = useRecipeContext();

  return (
    <Box
      sx={{
        width: { xs: 120, sm: 200, md: 280 },
        bgcolor: "background.paper",
        borderRight: 1,
        borderColor: "divider",
        padding: 2,
        minHeight: "100%"
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, color: "primary.main", fontWeight: 500 }}>
        Search
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        size="small"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search for recipes"
        InputProps={{
          sx: { borderRadius: 2 }
        }}
      />
    </Box>
  );
}
