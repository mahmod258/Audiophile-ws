import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/app.css";
import { Filter } from "./components/Conetxt/Filter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Filter>
    <App />
  </Filter>
);
