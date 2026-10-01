import React from "react";
import ReactDOM from "react-dom/client";

function Child(props) {
  return <h2>Student Name: {props.name}</h2>;
}

function App() {
  return (
    <div>
      <h1>Student Details</h1>
      <Child name="Katyayani" />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
