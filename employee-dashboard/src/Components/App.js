import React from "react";
import Dashboard from "../Components/Dashboard.js";
import "../Css/Dashboard.css";

//Main React Component which connects Dashboard to index.js for React Rendering
function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
