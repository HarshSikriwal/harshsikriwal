import React from "react";
import Poems from "./components/Poems";
import Football from "./components/Football";
import Books from "./components/Books";

const info = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-36 md:[&>*]:h-[400px]">
      <Books />
      <Football />
      <Poems />
    </div>
  );
};

export default info;
