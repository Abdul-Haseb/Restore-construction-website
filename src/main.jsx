import { render } from "preact";
import "./index.css";
import App from "./app";
import Header from "./component/HeaderAndHero/Header";
import Footer from "./component/Footer/Footer";

render(
  <>
    <App />
  </>,
  document.getElementById("app")
);
