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
      // key={project.name}
      // layoutId={project.name}
      className={` cursor-pointer flex items-center justify-end gap-4 w-full h-full  relative ${
        project.name === myProject?.name
          ? "text-primary-color"
          : "text-secondary-color "
      }`}
      onClick={() => setMyProject(project)}
    >
      <p
        className={`text-right italic  text-3xl ${
          myProject?.name === project.name ? "" : ""
        }`}
      >
        {project.name}
      </p>
      {/* <p>-</p> */}
      <p
        className={`italic basis-1/5 self-end
          ${
            myProject?.name === project.name
              ? "text-xs text-white/80"
              : "text-xs"
          }`}
      >
        {project.duration}
      </p>
    </motion.div>
  );
}

export default SingleProject;
