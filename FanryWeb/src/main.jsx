import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./nav/nav.jsx";
import { CardDefault } from "./Card.jsx";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <Navbar /> */}
      <CardDefault />
      {/* <App /> */}
    </ThemeProvider>
  </React.StrictMode>
);
