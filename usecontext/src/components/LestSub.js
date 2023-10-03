import React, { useContext } from "react";
import DataContext from "../store/data-context";

const LeftSub = () => {
  const ctx = useContext(DataContext);
  return <p>{ctx.textLeft}</p>;
};

export default LeftSub;
