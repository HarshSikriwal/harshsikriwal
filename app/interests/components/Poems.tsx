"use client";

import { useState } from "react";
import Card from "./Card";
import Image from "next/image";
import { poemDetails } from "@/poemDetails";
import { motion } from "framer-motion";
import PoemsForMobile from "./PoemsForMobile";

let poems = poemDetails;

const Poems = () => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const updateState = (name: string) =>
    setSelected((p) => {
      if (selected)
        poems = [
          poems.find((p) => p.title === selected)!,
          ...poems.filter((name) => selected !== name.title),
        ];
      return name;
    });

  const getTranslationValue = () => {
    const screenWidth = window.innerWidth;

    const translationValue = screenWidth - 780; // Subtracting 20px from screen width
    return `translateX(${translationValue}px)`;
  };

  return (
    <div className="relative w-full h-full flex flex-col gap-12 lg:flex-row items-center mb-10">
      <motion.div
        className="bg-primary-color h-1/5 self-center w-full lg:absolute"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-black justify-center text-3xl py-1 lg:text-4xl font-bold h-full w-full flex items-center">
          Writings
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true, amount: 0.6 }}
        className="relative hidden min-[1280px]:flex justify-between items-center group w-full h-full"
      >
        {poems
          .map((poem, i, a) => ({
            degree: 2 * (i - Math.floor(a.length / 2)),
            name: poem.title,
            url: poem.url,
            content: poem.content,
          }))
          .map(({ name, degree, url, content }, index) => {
            return (
              <Card
                key={degree}
                name={name}
                updateState={updateState}
                className={` 
            ${
              selected === name
                ? " lg h-full border-none w-[500px]"
                : "h-[300px] ml-8"
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
                    : { transform: getTranslationValue() }
                }
              >
                <div
                  className="absolute w-full h-full top-0 left-0 bg-cover blur-sm -z-10"
                  style={{
                    backgroundImage: `url(${url})`,
                  }}
                ></div>
                <div
                  onMouseOver={() => {
                    if (selected !== name) setActive(true);
                  }}
                  onMouseLeave={() => setActive(false)}
                  className="h-full min-h-0 w-full justify-center items-center text-lg text-center font-medium my-auto rounded-md overflow-y-auto custom-scrollbar bg-black/50 leading-7 [&>div>p]:my-4 py-auto"
                >
                  {selected === name ? (
                    content
                  ) : (
                    <div className="flex justify-center text-3xl items-center w-full h-full">
                      {name}
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative py-6 overflow-hidden rounded-lg shadow-2xl block min-[1300px]:hidden justify-between items-center w-full h-full"
      >
        <PoemsForMobile />
      </motion.div>
    </div>
  );
};

export default Poems;
