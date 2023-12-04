import React from "react";
import BooksImage from "./BooksImage";

const Books = () => {
  return (
    <div className="w-full h-2/3 flex relative">
      <div className="bg-primary-color h-1/5 self-center w-full">
        <p className="text-black justify-center text-4xl font-bold h-full w-full flex items-center">
          Books I have read or reading
        </p>
      </div>
      <div className="absolute h-full w-full flex px-4 items-center">
        <BooksImage className="" />
      </div>
    </div>
  );
};

export default Books;
