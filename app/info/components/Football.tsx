"use client";

import { useState } from "react";
import Card from "./Card";
import Image from "next/image";

const Football = () => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const updateState = (index: number) => setSelected(index);
  const images = [
    "/football-images/Football_1.jpg",
    "/football-images/Football_2.jpg",
    "/football-images/Football_3.jpg",
    "/football-images/Football_4.jpg",
    "/football-images/Football.jpg",
  ];

  return (
    <div
      className="relative px-5 flex justify-between items-center group w-fit"
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {images
        .map((_, i, a) => 2 * (i - Math.floor(a.length / 2)))
        .map((degree, index) => {
          return (
            <Card
              key={degree}
              index={index}
              updateState={updateState}
              className={`left-[807px]
              ${
                selected === index
                  ? "-translate-x-[165%] h-full border-none w-[500px]"
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
              <div>
                <Image
                  src={images[index]}
                  fill
                  alt="Football Images"
                  objectFit="contain"
                />
              </div>
            </Card>
          );
        })}
    </div>
  );
};

export default Football;
