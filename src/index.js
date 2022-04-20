import ReactDOM from "react-dom";
import Root from "./components/Root";

function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function init() {
  ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
}

ready(init);
