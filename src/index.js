import ReactDOM from 'react-dom';

function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

function init() {
    ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<h1>Hello, world!</h1>); 
}

ready(init);
