import React, { useContext } from "react";
import DataContext from "../store/data-context";

const RightSub = () => {
  const ctx = useContext(DataContext);
  return <p>{ctx.textRight}</p>;
};

export default RightSub;
