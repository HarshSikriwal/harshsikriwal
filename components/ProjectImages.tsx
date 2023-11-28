import { ProjectContext } from "@/context/ProjectContext";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";

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
    <AnimatePresence mode="popLayout">
      <motion.div
        key={currentIndex}
        className="w-full h-full"
        initial={left ? "enterLeft" : "enterRight"}
        animate={{ opacity: 1, x: "0" }}
        exit={left ? "exitRight" : "exitLeft"}
        transition={{ duration: 0.5, type: "spring", bounce: 0 }}
        variants={directionVariants}
      >
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
