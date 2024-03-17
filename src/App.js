import React from "react";
import "./App.css"; // Import CSS file for styles
import ByDay from "./components/Filters/ByDay/ByDay";

const App = () => {
  return (
    <div className="app-container">
      <ByDay />
    </div>
  );
};

export default App;
