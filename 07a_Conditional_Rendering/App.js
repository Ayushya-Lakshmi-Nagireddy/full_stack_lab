import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  let isLoggedIn = true;
  return (
    <h2>
      {isLoggedIn ? "Welcome User" : "Please login"}
    </h2>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
