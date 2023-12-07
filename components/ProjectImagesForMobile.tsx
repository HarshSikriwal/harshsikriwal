"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState, useTransition } from "react";

const ProjectImagesForMobile = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [left, setLeft] = useState(false);
  const [_, start] = useTransition();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleLeft = () => {
    setLeft(true);

    start(() => {
      if (images.length === 0) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    });
  };
  const handleRight = () => {
    setLeft(false);
    start(() => {
      if (images.length === 0) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => (prev + 1) % images?.length);
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

    if (diff > 5) {
      handleLeft();
    } else if (diff < -5) {
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
        ref={sliderRef}
        className="relative overflow-hidden"
        onTouchStart={(e) =>
          handleTouchStart(e as React.TouchEvent<HTMLDivElement>)
        }
        onTouchMove={(e) =>
          handleTouchMove(e as React.TouchEvent<HTMLDivElement>)
        }
        initial={left ? "enterLeft" : "enterRight"}
        animate={{ opacity: 1, x: "0" }}
        exit={left ? "exitRight" : "exitLeft"}
        transition={{ duration: 0.5, type: "spring", bounce: 0 }}
        variants={directionVariants}
      >
        <Image
          src={images[currentIndex]}
          alt="image"
          width={350}
          height={200}
          style={{ objectFit: "contain" }}
          priority={true}
          loading="eager"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectImagesForMobile;
