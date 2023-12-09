import React from "react";
import Poems from "./components/Poems";
import Football from "./components/Football";
import Books from "./components/Books";

const info = () => {
  return (
    <div className="flex flex-col  gap-36 [&>*]:h-[400px]  overflow-y-scroll">
      <Books />
      <Football />
      <Poems />
    </div>
  );
};

export default info;
