import React from "react";
import Poems from "./components/Poems";
import Football from "./components/Football";
import Books from "./components/Books";

const info = () => {
  return (
    <div className="flex flex-col  gap-28 min-[1280px]:gap-36 min-[1280px]:[&>*]:h-[400px]">
      <Books />
      <Football />
      <Poems />
    </div>
  );
};

export default info;
