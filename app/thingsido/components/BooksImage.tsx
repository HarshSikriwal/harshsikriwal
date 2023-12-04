import Image from "next/image";
import React from "react";

let images = ["/books/freakonomics.png", "/books/thinking_fast_and_slow.png"];
const BooksImage = ({ className }: { className: string }) => {
  return (
    <div className="flex gap-10">
      {images.map((image: string) => (
        <div key={image} className="">
          <Image src={image} height={300} width={200} alt="book image" />
        </div>
      ))}
    </div>
  );
};

export default BooksImage;
