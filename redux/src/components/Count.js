import React from "react";
import { connect } from "react-redux";

function Count({ count }) {
  return (
    <>
      <div>Countコンポーネント: {count}</div>
    </>
  );
}

const mapStateToProps = (one) => {
  return { count: one.count };
};

export default connect(mapStateToProps)(Count);
