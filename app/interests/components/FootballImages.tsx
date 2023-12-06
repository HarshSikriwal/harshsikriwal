"use client";
import { AnimatePresence, Variants, motion } from "framer-motion";
import Image from "next/image";

let images = [
  "/football-images/Football_1.jpg",
  "/football-images/Football.jpg",
  "/football-images/Football_2.jpg",
  "/football-images/Football_4.jpg",
  "/football-images/Football_3.jpg",
  "/football-images/Football_1.jpg",
  "/football-images/Football.jpg",
  "/football-images/Football_2.jpg",
  "/football-images/Football_4.jpg",
  "/football-images/Football_3.jpg",
];
const BooksImage = () => {
  return (
    <div className="flex gap-8 w-max z-10">
      <motion.div
        className="gap-8 inline-flex items-center"
        animate={{ x: "-50%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
