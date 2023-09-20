import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Count from "./components/Count";
import Count2 from "./components/Count2";

function App() {
  const count = useSelector((state) => state.count);
  return (
    <div className="App">
      <h1>Redux Lesson</h1>
      <p>count: {count}</p>
      <Count />
      <Count2 />
    </div>
  );
}

export default App;
