import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello ReactJS</h1>
      <p>Welcome to JSX</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
