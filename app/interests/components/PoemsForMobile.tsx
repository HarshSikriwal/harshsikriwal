"use client";
import { poemDetails } from "@/poemDetails";
import { AnimatePresence, motion } from "framer-motion";
import { Circle } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState, useTransition } from "react";

const PoemsForMobile = () => {
  let poems = poemDetails;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [left, setLeft] = useState(false);
  const [_, start] = useTransition();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleLeft = () => {
    setLeft(true);

    start(() => {
      if (poems.length === 0) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => (prev + 1) % poems.length);
      }
    });
  };
  const handleRight = () => {
    setLeft(false);
    start(() => {
      if (poems.length === 0) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => (prev - 1 + poems.length) % poems.length);
      }
    });

    // setRight(true);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartX) {
      return;
    }

    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 6) {
      handleLeft();
    } else if (diff < -6) {
      handleRight();
    }

    setTouchStartX(null);
  };
  const directionVariants = {
    enterLeft: {
      x: "100%",
      opacity: 0,
    },
    enterRight: {
      x: "-100%",
      opacity: 0,
    },
    exitRight: {
      x: "-100%",
      opacity: 0,
    },
    exitLeft: {
      x: "100%",
      opacity: 0,
    },
  };

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={currentIndex}
        initial={left ? "enterLeft" : "enterRight"}
        animate={{ opacity: 1, x: "0" }}
        exit={left ? "exitRight" : "exitLeft"}
        transition={{ duration: 0.1 }}
        variants={directionVariants}
        ref={sliderRef}
        className="relative overflow-hidden rounded-md w-full z-[200] h-[400px]"
        onTouchStart={(e) =>
          handleTouchStart(e as React.TouchEvent<HTMLDivElement>)
        }
        onTouchMove={(e) =>
          handleTouchMove(e as React.TouchEvent<HTMLDivElement>)
        }
      >
        <div
          className="absolute w-full h-full top-0 left-0 bg-cover bg-center blur-sm -z-10"
          style={{
            backgroundImage: `url(${poems[currentIndex].url})`,
          }}
        ></div>
        <div className="h-full w-full justify-center items-center text-md text-center font-medium rounded-md overflow-y-auto custom-scrollbar bg-black/50 leading-7">
          <p className="text-4xl m-4 ">{poems[currentIndex].title}</p>
          <div className="[&>div>p]:my-4 ">{poems[currentIndex].content}</div>
        </div>
      </motion.div>
      <div className="flex justify-center my-4">
        {poems?.map((_, i) => (
          <Circle
            className={`h-3 transition-all duration-500  ${
              i === currentIndex ? "fill-white scale-[1.3]" : ""
            }`}
            key={i}
          />
        ))}
      </div>
    </AnimatePresence>
  );
};

export default PoemsForMobile;
