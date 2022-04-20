import ReactDOM from "react-dom/client";
import Root from "./components/Root";

import { saveDB } from "./lib/sqlite";

function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function init() {
  saveDB();

  const el = document.getElementById("root");
  ReactDOM.createRoot(el).render(<Root />);
}

ready(init);
