import React from "react";
import ReactDOM from "react-dom/client";

function Welcome() {
  return <h2>Welcome to ReactJS</h2>;
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My React Application</h1>
        <Welcome />
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
