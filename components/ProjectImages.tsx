import { ProjectContext } from "@/context/ProjectContext";
import { projectDetails } from "@/projectDetails";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";

const ProjectImages = ({
  project,
}: {
  project: (typeof projectDetails)[0];
}) => {
  const { myProject } = useContext(ProjectContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevInterval, setPrevInterval] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    console.log(myProject?.name, project.name);

    if (myProject?.name !== project.name && prevInterval) {
      clearInterval(prevInterval);
      setPrevInterval(null);
      return;
    }
    if (myProject?.name !== project.name) return;
    setPrevInterval(
      setInterval(() => {
        setCurrentIndex((prev) => {
          console.log(prev);
          return (prev + 1) % project.images.length;
        });
      }, 2000)
    );
    return () => {
      if (prevInterval) {
        clearInterval(prevInterval);
      }
    };
  }, [myProject?.name]);

  return (
    <div
      className={project.name === myProject?.name ? "" : "invisible"}
      key={project.name}
    >
      {project.images.map((image, index) => (
        <div key={index} className={index === currentIndex ? "" : "hidden"}>
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
