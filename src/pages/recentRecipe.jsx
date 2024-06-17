import React from "react";
import Prim from "../components/Prim";
import "./recentRecipe.css";

const Recent = () => {
  return (
    <div>
      {" "}
      <Prim topting={"Recent Recipe"} heading={"Trending"} />
      <Prim heading={"Baked dishes"} />
      <Prim heading={"New Arrival"} />
      <Prim heading={"Rolls"} />
    </div>
  );
};

export default Recent;
