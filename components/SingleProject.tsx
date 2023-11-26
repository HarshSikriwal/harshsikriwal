import { ProjectContext } from "@/context/ProjectContext";
import { projectDetails } from "@/projectDetails";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

import { useContext, useEffect, useState } from "react";

function SingleProject({
  index,
  project,
}: {
  index: number;
  project: (typeof projectDetails)[0];
}) {
  const { myProject, setMyProject } = useContext(ProjectContext);

  return (
    <motion.div
      key={project.name}
      layoutId={project.name}
      className={`text-right  cursor-pointer ${
        project.name === myProject?.name
          ? "text-primary-color"
          : "text-secondary-color "
      }`}
      onClick={() => setMyProject(project)}
    >
      <p className={myProject?.name === project.name ? "text-4xl" : "text-xl"}>
        {project.name}
      </p>
      <p className={myProject?.name === project.name ? "text-lg" : "text-sm"}>
        {project.type}/{project.duration}
      </p>
    </motion.div>
  );
}

export default SingleProject;
