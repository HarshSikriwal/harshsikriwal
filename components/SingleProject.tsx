import { ProjectContext } from "@/context/ProjectContext";
import { projectDetails } from "@/projectDetails";
import { motion } from "framer-motion";

import { useContext, useEffect, useRef } from "react";

function SingleProject({
  index,
  project,
}: {
  index: number;
  project: (typeof projectDetails)[0];
}) {
  const { myProject, setMyProject } = useContext(ProjectContext);
  const projectRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (project.name === myProject?.name) {
      projectRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myProject]);

  const fadeInVariants = {
    initial: { opacity: 0 },
    animate: (index: number) => ({
      opacity: 1,

      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <motion.li
      ref={projectRef}
      key={project.name}
      transition={{ duration: 0.1 }}
      layout
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className={` cursor-pointer flex items-center justify-end gap-4 w-full h-full  relative ${
        project.name === myProject?.name
          ? "text-primary-color"
          : "text-secondary-color "
      }`}
      onClick={() => setMyProject(project)}
    >
      <p
        className={`text-right italic ${
          myProject?.name === project.name ? "text-3xl" : "text-2xl"
        }`}
      >
        {project.name}
      </p>
      {/* <p>-</p> */}
      <p
        className={` basis-1/5 self-end italic
          ${
            myProject?.name === project.name
              ? "text-xs text-white/80"
              : "text-xs"
          }`}
      >
        {project.duration}
      </p>
    </motion.li>
  );
}

export default SingleProject;
