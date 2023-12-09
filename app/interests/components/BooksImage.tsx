"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

let images = ["/books/freakonomics.png", "/books/thinking_fast_and_slow.png"];
const BooksImage = ({ className }: { className: string }) => {
  const fadeVariants = {
    initial: { opacity: 0 },
    animate: (index: number) => ({
      opacity: 1,

      transition: {
        delay: 0.5 + 0.2 * index,
      },
    }),
  };

  return (
    <div className="flex gap-4 lg:gap-10">
      {images.map((image, index) => (
        <motion.div
          key={image}
          transition={{ duration: 0.5 }}
          variants={fadeVariants}
          initial="initial"
          whileInView="animate"
          custom={index}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Image src={image} height={300} width={200} alt="book image" />
        </motion.div>
      ))}
    </div>
  );
};

export default BooksImage;
