"use client";
import React from "react";
import BooksImage from "./BooksImage";
import { Variants, motion } from "framer-motion";
import FootballImages from "./FootballImages";

const Football = () => {
  return (
    <div className="w-full h-2/3 flex relative">
      <motion.div
        className="bg-primary-color h-1/5 self-center w-full"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-black justify-center text-4xl font-bold h-full w-full flex items-center">
          Football!
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.7 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute h-full w-full overflow-hidden"
      >
        <FootballImages />
      </motion.div>
    </div>
  );
};

export default Football;
