import React, { createContext, useContext, useReducer, useMemo, useEffect } from "react";
import { recipes as staticRecipes } from "../assets/exampleRecipes";
import { getBookmarkedFromLocal, setBookmarkedToLocal } from "../utils/storage";

/**
 * RecipeContext manages all recipe data, search, selection, bookmarks, modal control.
 */
const RecipeContext = createContext();

/**
 * Reducer for state management.
 */
function reducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "OPEN_DETAIL":
      return { ...state, selectedRecipe: action.payload, showDetail: true };
    case "CLOSE_DETAIL":
      return { ...state, showDetail: false, selectedRecipe: null };
    case "TOGGLE_BOOKMARK": {
      const recipeId = action.payload;
      const updated = state.bookmarked.includes(recipeId)
        ? state.bookmarked.filter(id => id !== recipeId)
        : [...state.bookmarked, recipeId];
      setBookmarkedToLocal(updated); // Persist
      return { ...state, bookmarked: updated };
    }
    case "INIT_BOOKMARKED": {
      return { ...state, bookmarked: action.payload };
    }
    default:
      return state;
  }
}

// derive searchable info
function filterRecipes(recipes, search) {
  if (!search) return recipes;
  const s = search.toLowerCase();
  return recipes.filter(
    r =>
      r.title.toLowerCase().includes(s) ||
      r.category.toLowerCase().includes(s) ||
      r.ingredients.join(" ").toLowerCase().includes(s)
  );
}

/**
 * PUBLIC_INTERFACE
 * Context Provider for global recipe state.
 */
export function RecipeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    search: "",
    recipes: staticRecipes,
    showDetail: false,
    selectedRecipe: null,
    bookmarked: []
  });

  useEffect(() => {
    // On app mount, initialize from local storage
    const stored = getBookmarkedFromLocal();
    dispatch({ type: "INIT_BOOKMARKED", payload: stored });
  }, []);

  const filteredRecipes = useMemo(
    () => filterRecipes(state.recipes, state.search),
    [state.recipes, state.search]
  );
  const recipesById = useMemo(() => {
    let map = {};
    state.recipes.forEach(r => {
      map[r.id] = r;
    });
    return map;
  }, [state.recipes]);

  // Context actions:
  const value = useMemo(() => ({
    search: state.search,
    setSearch: query => dispatch({ type: "SET_SEARCH", payload: query }),
    showDetail: state.showDetail,
    selectedRecipe: state.selectedRecipe,
    openRecipeDetail: recipe => dispatch({ type: "OPEN_DETAIL", payload: recipe }),
    closeRecipeDetail: () => dispatch({ type: "CLOSE_DETAIL" }),
    toggleBookmark: id => dispatch({ type: "TOGGLE_BOOKMARK", payload: id }),
    isBookmarked: id => state.bookmarked.includes(id),
    bookmarked: state.bookmarked,
    filteredRecipes,
    recipesById
  }), [
    state,
    filteredRecipes,
    recipesById
  ]);

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
}

/**
 * PUBLIC_INTERFACE
 * Hook to use recipe context.
 */
export function useRecipeContext() {
  return useContext(RecipeContext);
}
