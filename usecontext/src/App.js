import React from "react";

// css import

// components import
import Left from "./components/Left";
import Right from "./components/Right";
import DataContext from "./store/data-context";

function App() {
  const data = {
    textLeft: "左の要素です",
    textRight: "右の要素です",
  };
  return (
    <DataContext.Provider value={data}>
      <div className="container">
        <Left />
        <Right />
      </div>
    </DataContext.Provider>
  );
}

export default App;
