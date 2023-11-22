"use client";

import { useState } from "react";
import Card from "./Card";
import Image from "next/image";

const Poems = () => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const updateState = (index: number) => setSelected(index);
  return (
    <div
      className="relative px-8 flex justify-between items-center group w-fit"
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {Array.from({ length: 3 })
        .map((_, i, a) => 2 * (i - Math.floor(a.length / 2)))
        .map((degree, index) => {
          return (
            <Card
              key={degree}
              index={index}
              updateState={updateState}
              className={`
              ${
                selected === index
                  ? "translate-x-[140%] h-full border-none w-[500px]"
                  : "h-[300px]"
              }
              `}
              style={
                selected !== index
                  ? {
                      rotate: active ? `${2 * degree}deg` : `${degree}deg`,
                      translate: active
                        ? `${1 * degree}rem`
                        : `${degree * 0.5}rem`,
                    }
                  : {}
              }
            >
              <div>Poems</div>
            </Card>
          );
        })}
    </div>
  );
};

export default Poems;
