import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
