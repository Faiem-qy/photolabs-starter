import React from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";

// add variable to reuse photos template
const photos = new Array(3).fill(0);

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute/>
    </div>
  );
};

export default App;
