"use client";
import React from "react";
import BooksImage from "./BooksImage";
import { motion } from "framer-motion";

const Books = () => {
  return (
    <div className="w-full h-2/3 flex flex-col md:flex-row relative max-md:mt-16">
      <motion.div
        className="bg-primary-color h-1/5 self-center w-full"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 1 }}
      >
        <p className="text-black justify-center text-4xl font-bold h-full w-full flex items-center">
          Readings
        </p>
      </motion.div>
      <motion.div className="md:absolute h-full w-full flex px-4 items-center">
        <BooksImage className="" />
      </motion.div>
    </div>
  );
};

export default Books;
