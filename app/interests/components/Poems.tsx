"use client";

import { useState } from "react";
import Card from "./Card";
import Image from "next/image";
import { poemDetails } from "@/poemDetails";
import { motion } from "framer-motion";

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
  return (
    <div className="relative w-full h-full flex items-center mb-10">
      <motion.div
        className="bg-primary-color h-1/5 self-center w-full absolute"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-black justify-center text-4xl font-bold h-full w-full flex items-center">
          Writings!
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true, amount: 0.6 }}
        className="relative hidden md:flex justify-between items-center group w-full h-full"
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
                ? "translate-x-[150%] h-full border-none w-[500px]"
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
                    : {}
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
                  className="h-full min-h-0 w-full justify-center items-center text-lg text-center font-medium my-auto rounded-md overflow-y-auto custom-scrollbar bg-black/50 leading-7 [&>p]:my-4 py-auto"
                  dangerouslySetInnerHTML={{
                    __html:
                      selected === name
                        ? content
                        : `<div class='flex justify-center text-3xl items-center w-full h-full'>${name}</div>`,
                  }}
                ></div>
              </Card>
            );
          })}
      </motion.div>
    </div>
  );
};

export default Poems;
