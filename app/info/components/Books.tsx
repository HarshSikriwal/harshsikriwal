import React from "react";

const Books = () => {
  return (
    <div className="h-[400px] flex gap-4 mx-16 my-8 justify-between items-center">
      <div className="relative basis-2/5 h-80 group">
        <div
          className="
        absolute bg-secondary-color border-2 border-red-500 h-full w-full rounded-lg -translate-x-4 -rotate-2 transition-all
        group-hover:-translate-x-10 group-hover:-rotate-6
        "
        ></div>
        <div className="absolute bg-secondary-color border-2 border-primary-color h-full w-full rounded-lg transition-all group-hover:rotate-1"></div>
        <div className="absolute bg-secondary-color border-2 border-red-500 h-full w-full rounded-lg translate-x-2 rotate-2 group-hover:translate-x-10 group-hover:rotate-6 transition-all"></div>
      </div>
      <p className="text-2xl text-primary-color text-center ">Poems(Hindi)</p>
    </div>
  );
};

export default Books;
