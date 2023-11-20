import React from "react";
import Poems from "./components/Poems";
import Football from "./components/Football";
import Books from "./components/Books";

const info = () => {
  return (
    <div className="flex flex-col gap-10 [&>*]:h-[400px]">
      <Poems />
      <Football />
      <Books />
    </div>
  );
};

export default info;
