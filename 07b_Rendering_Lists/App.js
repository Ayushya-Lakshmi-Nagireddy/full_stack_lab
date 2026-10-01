import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const students = ["Katyayani", "Parimala", "Hemanth"];
  return (
    <div>
      <h2>Students</h2>
      {students.map((student) => (
        <p key={student}>{student}</p>
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
