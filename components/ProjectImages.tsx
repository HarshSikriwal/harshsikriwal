import { ProjectContext } from "@/context/ProjectContext";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";

const ProjectImages = () => {
  const { myProject } = useContext(ProjectContext);
  const { images } = myProject;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length),
      3000
    ); // Change image every 2 seconds

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [images]);

  return (
    <motion.div className="relative grow">
      <Image
        className="project-grayscale object-fit-contain "
        src={images[currentImageIndex]}
        alt={`Project Image`}
        fill
        loading="eager"
        style={{ objectFit: "contain" }}
      />
    </motion.div>
  );
};

export default ProjectImages;
