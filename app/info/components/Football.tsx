"use client";

import { useMemo, useState } from "react";
import Card from "./Card";
import Image from "next/image";

let images = [
  "/football-images/Football_1.jpg",
  "/football-images/Football_2.jpg",
  "/football-images/Football_3.jpg",
  "/football-images/Football_4.jpg",
  "/football-images/Football.jpg",
];

const Football = () => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const updateState = (name: string) =>
    setSelected((p) => {
      if (selected)
        images = [selected, ...images.filter((name) => selected !== name)];
      return name;
    });
  // console.log(images);
  return (
    <div
      className="relative px-5 flex justify-between items-center group w-fit"
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
              key={index}
              name={name}
              updateState={updateState}
              className={`left-[807px]
              ${
                selected === name
                  ? "-translate-x-[165%] h-full border-none w-[500px]"
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
