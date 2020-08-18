import React from "react";
import "./App.css";
import { TreeSelect } from "./components/treeSelect/TreeSelect";
import { data } from "./components/treeSelect/data";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <TreeSelect tree={data.tree} />
          <br />
        </div>
      </div>
    </div>
  );
}

export default App;
