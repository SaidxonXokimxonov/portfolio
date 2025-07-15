import React from "react";

import Fixed from "./components/fixed";
import Content from "./components/content";

function App() {
  return (
    <div className="w-full lg:flex border-red-500 justify-end"> 
      <Fixed />
      <Content />
    </div>
  );
}

export default App;
