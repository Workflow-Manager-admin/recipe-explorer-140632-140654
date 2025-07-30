import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InfoIcon from "@mui/icons-material/Info";
import { useRecipeContext } from "../state/RecipeContext";

const cardSx = {
  transition: "transform 0.2s",
  ":hover": {
    boxShadow: 6,
    transform: "scale(1.025)"
  }
};

/**
 * PUBLIC_INTERFACE
 * Card representing a single recipe in the grid/list.
 */
export default function RecipeCard({ recipe }) {
  const { openRecipeDetail, isBookmarked, toggleBookmark } = useRecipeContext();

  return (
    <Card sx={cardSx}>
      <CardHeader
        title={recipe.title}
        subheader={recipe.category || ""}
        sx={{
          "& .MuiCardHeader-title": {
            fontFamily: "inherit",
            color: "primary.main",
            fontWeight: 600
          },
          "& .MuiCardHeader-subheader": {
            color: "secondary.main",
            fontWeight: 400
          }
        }}
      />
      <CardMedia
        component="img"
        height="170"
        image={recipe.image}
        alt={recipe.title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ minHeight: 72 }}>
        <Typography variant="body2" color="text.secondary" noWrap>
          {recipe.description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="show details"
          onClick={() => openRecipeDetail(recipe)}
        >
          <InfoIcon color="primary" />
        </IconButton>
        <IconButton
          aria-label="bookmark"
          onClick={() => toggleBookmark(recipe.id)}
        >
          {isBookmarked(recipe.id) ? (
            <FavoriteIcon sx={{ color: "accent.main" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
}
