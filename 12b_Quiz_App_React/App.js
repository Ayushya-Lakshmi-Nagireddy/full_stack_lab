import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Quiz() {
  const [score, setScore] = useState(0);

  function checkAnswer(answer) {
    if (answer === "ReactJS") {
      setScore(score + 1);
      alert("Correct Answer!");
    } else {
      alert("Wrong Answer!");
    }
  }

  return (
    <div>
      <h2>Quiz App</h2>
      <p>Which library is used to build UI?</p>
      <button onClick={() => checkAnswer("ReactJS")}>ReactJS</button>
      <button onClick={() => checkAnswer("MongoDB")}>MongoDB</button>
      <h3>Score: {score}</h3>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Quiz />);
