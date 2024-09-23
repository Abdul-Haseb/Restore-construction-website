import React from "preact/compat";
import { render } from "preact";
import "./index.css";
import App from "./app";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
