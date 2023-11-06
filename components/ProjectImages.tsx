import { ProjectContext } from "@/context/ProjectContext";
import { projectDetails } from "@/projectDetails";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";

const ProjectImages = ({
  currentIndex,
  left,
}: // right,
{
  currentIndex: number;
  left: boolean;
  // right: boolean;
}) => {
  const { myProject } = useContext(ProjectContext);

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
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={currentIndex}
        className="w-full h-full flex flex-col justify-center items-center relative group"
        initial={left ? "enterLeft" : "enterRight"}
        animate={{ opacity: 1, x: "0" }}
        exit={left ? "exitRight" : "exitLeft"}
        transition={{ duration: 0.5, type: "spring", bounce: 0 }}
        variants={directionVariants}
      >
        <div className="h-full w-full flex flex-col px-8 py-24 gap-6 text-2xl  z-[200] bg-black bg-opacity-90 invisible group-hover:visible">
          <p className="w-2/3">{myProject?.description}</p>
          <p className="text-sm">{myProject?.tech}</p>
          {myProject?.websiteLink && (
            <Link
              href={myProject?.websiteLink}
              className="border-2 rounded-md border-secondary-color text-secondary-color hover:text-primary-color hover:scale-105 hover:border-primary-color w-28"
            >
              Live Link
            </Link>
          )}
        </div>
        <Image
          src={myProject?.images[currentIndex]!}
          alt="image"
          fill
          style={{ objectFit: "contain" }}
          priority={true}
          loading="eager"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectImages;
