import { ProjectContext } from "@/context/ProjectContext";
import { projectDetails } from "@/projectDetails";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Circle, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { SkillBadge } from "./SkillBadge";

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
        <div className="h-full w-full flex flex-col px-8 py-24 gap-6 z-[200] bg-black bg-opacity-90 invisible group-hover:visible">
          <div>
            <h3 className="text-4xl font-semibold">{myProject?.name}</h3>
          </div>
          <div>
            <p className="w-2/3 text-2xl mb-4 leading-7">
              {myProject?.description}
            </p>
            <SkillBadge skills={myProject?.tech} />
          </div>
          <div className="flex gap-4">
            {myProject?.websiteLink && (
              <Link
                target="_blank"
                href={myProject?.websiteLink}
                className="
                border-2 px-2 py-1 
                rounded-lg w-20 
                text-center border-secondary-color 
                text-secondary-color text-sm 
                hover:text-primary-color hover:scale-105 
                hover:border-primary-color
                "
              >
                <div className="flex justify-center gap-1 items-center">
                  <span>Live</span>
                  <MoveUpRight className="h-4" />
                </div>
              </Link>
            )}
            {myProject?.gitHubLink && (
              <Link
                target="_blank"
                href={myProject?.gitHubLink}
                className="
                 border-2 px-2 py-1
                 text-sm w-20 text-center rounded-lg 
                 border-secondary-color text-secondary-color 
                 hover:text-primary-color hover:scale-105 
                 hover:border-primary-color
                 "
              >
                <div className="flex justify-between items-center">
                  <span>GitHub</span>
                  <MoveUpRight className="h-4" />
                </div>
              </Link>
            )}
          </div>
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
