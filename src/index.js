import ReactDOM from "react-dom/client";
import Root from "./components/Root";

function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function init() {
  const el = document.getElementById("root");
  ReactDOM.createRoot(el).render(<Root />);
}

ready(init);
