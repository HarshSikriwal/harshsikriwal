"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

let images = [
  "/football-images/Football_1.jpg",
  "/football-images/Football_2.jpg",
  "/football-images/Football_3.jpg",
  "/football-images/football_4.jpg",
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
    <div className="flex space-x-4 w-full h-auto overflow-x-scroll custom-scrollbar items-center pb-2">
      {images.map((image, index) => (
        <motion.div
          key={image}
          className="flex-none"
          transition={{ duration: 0.5 }}
          variants={fadeVariants}
          initial="initial"
          whileInView="animate"
          custom={index}
          viewport={{ once: true }}
        >
          <Image
            src={image}
            alt="book image"
            width={400}
            height={200}
            objectFit="contain"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BooksImage;
