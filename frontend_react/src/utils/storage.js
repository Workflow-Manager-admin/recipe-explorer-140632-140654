// Utility functions for persisting bookmarks

const BOOKMARKS_KEY = "recipe_bookmarked";

/**
 * PUBLIC_INTERFACE
 * Get bookmarked IDs from local storage.
 */
export function getBookmarkedFromLocal() {
  try {
    const val = window.localStorage.getItem(BOOKMARKS_KEY);
    if (!val) return [];
    return JSON.parse(val);
  } catch {
    return [];
  }
}

/**
 * PUBLIC_INTERFACE
 * Set bookmarked IDs into local storage.
 */
export function setBookmarkedToLocal(array) {
  try {
    window.localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(array));
  } catch {}
}
