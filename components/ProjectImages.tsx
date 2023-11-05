import { ProjectContext } from "@/context/ProjectContext";
import { projectDetails } from "@/projectDetails";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";

const ProjectImages = ({
  project,
  currentIndex,
}: {
  project: (typeof projectDetails)[0];
  currentIndex: number;
}) => {
  const { myProject } = useContext(ProjectContext);

  return (
    <div
      className={` ${project.name === myProject?.name ? "" : "invisible"}`}
      key={project.name}
    >
      {project.images.map((image, index) => (
        <div key={index} className={index === currentIndex ? "" : "invisible"}>
          <Image
            src={image}
            alt="image"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectImages;
