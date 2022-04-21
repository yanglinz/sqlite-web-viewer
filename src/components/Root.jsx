import { loadDB } from "../lib/io";

function Root() {
  return (
    <div className="Root">
      <h1>Hello world!</h1>
      <button onClick={loadDB}>Click me!</button>
    </div>
  );
}

export default Root;
