"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

let images = [
  "/football-images/Football_1.jpg",
  "/football-images/Football_2.jpg",
  "/football-images/Football_3.jpg",
  "/football-images/Football_4.jpg",
  "/football-images/Football.jpg",
  "/football-images/Football_1.jpg",
  "/football-images/Football_2.jpg",
  "/football-images/Football_3.jpg",
  "/football-images/Football_4.jpg",
  "/football-images/Football.jpg",
];
const BooksImage = ({ className }: { className: string }) => {
  const fadeVariants = {
    initial: { opacity: 0 },
    animate: (index: number) => ({
      opacity: 1,

      transition: {
        delay: 0.2 * index,
      },
    }),
  };

  return (
    <div className="flex space-x-8 w-max whitespace-nowrap">
      <motion.div
        className="space-x-8 inline-flex items-center whitespace-nowrap"
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          // repeatType: "mirror",
        }}
      >
        {images.map((image, index) => (
          <motion.div key={index}>
            <Image
              src={image}
              alt="Image"
              width={350}
              height={200}
              objectFit="contain"
              className="rounded-xl"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BooksImage;
