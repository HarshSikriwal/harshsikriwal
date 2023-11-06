import { ProjectContext } from "@/context/ProjectContext";
import { projectDetails } from "@/projectDetails";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";

const ProjectImages = ({ currentIndex }: { currentIndex: number }) => {
  const { myProject } = useContext(ProjectContext);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={currentIndex}
        className="w-full h-full"
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: "0" }}
        exit={{ opacity: 0, x: "-100%" }}
        transition={{ duration: 0.5, type: "spring", bounce: 0 }}
      >
        <Image
          src={myProject?.images[currentIndex]!}
          alt="image"
          fill
          style={{ objectFit: "contain" }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectImages;
