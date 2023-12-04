"use client";
import React from "react";
import BooksImage from "./BooksImage";
import { motion } from "framer-motion";

const Books = () => {
  return (
    <div className="w-full h-2/3 flex relative">
      <motion.div
        className="bg-primary-color h-1/5 self-center w-full"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      >
        <p className="text-black justify-center text-4xl font-bold h-full w-full flex items-center">
          Books I have read or reading
        </p>
      </motion.div>
      <motion.div
        className="absolute h-full w-full flex px-4 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <BooksImage className="" />
      </motion.div>
    </div>
  );
};

export default Books;
