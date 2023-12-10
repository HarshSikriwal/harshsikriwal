"use client";
import React from "react";
import BooksImage from "./BooksImage";
import { Variants, motion } from "framer-motion";
import FootballImages from "./FootballImages";

const Football = () => {
  return (
    <div className="w-full grow h-full min-[1280px]:h-2/3 flex flex-col gap-16 min-[1280px]:flex-row relative">
      <motion.div
        className="bg-primary-color h-1/5 self-center w-full"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 1 }}
      >
        <p className="text-black justify-center text-3xl py-1 min-[1280px]:text-4xl font-bold h-full w-full flex items-center">
          Football
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="min-[1280px]:absolute h-full w-full flex flex-col justify-center overflow-hidden"
      >
        <FootballImages />
      </motion.div>
    </div>
  );
};

export default Football;
