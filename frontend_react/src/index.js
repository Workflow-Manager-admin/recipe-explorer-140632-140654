import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RecipeProvider } from "./state/RecipeContext";
import "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </BrowserRouter>
);
