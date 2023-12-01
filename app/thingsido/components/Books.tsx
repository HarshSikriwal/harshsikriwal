"use client";

import { useState } from "react";
import Card from "./Card";
import Image from "next/image";

let images = ["/books/freakonomics.png", "/books/thinking_fast_and_slow.png"];
const Books = () => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const updateState = (name: string) =>
    setSelected((p) => {
      if (selected)
        images = [selected, ...images.filter((name) => selected !== name)];
      return name;
    });
  return (
    <div
      className="relative  px-8  flex justify-between items-center group w-fit"
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {images
        .map((image, i, a) => ({
          degree: 2 * (i - Math.floor(a.length / 2)),
          name: image,
        }))
        .map(({ name, degree }, index) => {
          return (
            <Card
              key={degree}
              name={name}
              updateState={updateState}
              className={`
              ${
                selected === name
                  ? "translate-x-[140%] h-full border-none w-[500px]"
                  : "h-[300px]"
              }
              `}
              style={
                selected !== name
                  ? {
                      rotate: active ? `${2 * degree}deg` : `${degree}deg`,
                      translate: active
                        ? `${1 * degree}rem`
                        : `${degree * 0.5}rem`,
                    }
                  : {}
              }
            >
              <div>
                <Image
                  src={images[index]}
                  fill
                  alt="Books"
                  objectFit="contain"
                />
              </div>
            </Card>
          );
        })}
    </div>
  );
};

export default Books;
