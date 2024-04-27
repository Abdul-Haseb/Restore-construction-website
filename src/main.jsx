import { render } from "preact";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

render(
  <>
    <App />
  </>,
  document.getElementById("app")
);
