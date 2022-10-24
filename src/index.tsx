import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Router>
    <App />
  </Router>
);
