import React from "react";
import "./App.css";
// ここから
import { connect } from "react-redux";
import Count from "./components/Count";

function App({ count }) {
  return (
    <div className="App">
      <h1>Redux Lesson</h1>
      <p>count: {count}</p>
      <Count />
    </div>
  );
}

const mapStateToProps = (to) => {
  return { count: to.count };
};

export default connect(mapStateToProps)(App);
