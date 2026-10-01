import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Student(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root"))
  .render(<Student name="Katyayani" />);
