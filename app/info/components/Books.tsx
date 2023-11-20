"use client";

import { useState } from "react";
import Card from "./Card";

const Books = () => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(0);
  return (
    <div
      className="relative  [&>*]:h-[300px]  flex justify-between items-center group w-fit"
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {Array.from({ length: 3 })
        .map((_, i, a) => 2 * (i - Math.floor(a.length / 2)))
        .map((degree) => {
          return (
            <Card
              key={degree}
              // className={`rotate-[${degree}deg]`}
              style={{
                rotate: active ? `${2 * degree}deg` : `${degree}deg`,
                translate: active ? `${1 * degree}rem` : `${degree * 0.5}rem`,
              }}
            />
          );
        })}
    </div>
  );
};

export default Books;
