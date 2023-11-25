import { ProjectContext } from "@/context/ProjectContext";
import { projectDetails } from "@/projectDetails";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

import { useContext, useEffect, useState } from "react";

function SingleProject({
  projectIndex,
  variant,
  index,
}: {
  projectIndex: number;
  variant:
    | "first"
    | "before"
    | "after"
    | "last"
    | "spotlight"
    | "top"
    | "bottom";
  index: number;
}) {
  const { myProject, setMyProject } = useContext(ProjectContext);
  const [project, setProject] = useState(projectDetails.at(projectIndex)!);

  useEffect(() => {
    setProject(projectDetails.at(projectIndex)!);
    if (variant === "spotlight") {
      if (myProject?.name === projectDetails[projectIndex].name) return;
      setMyProject(projectDetails[projectIndex]);
    }
  }, [projectIndex, variant]);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        transition={{
          duration: 0.7,
          opacity: { duration: 0 },
          fontSize: { duration: 0 },

          type: "spring",
          ease: "backOut",
        }}
        key={project.name}
        layoutId={project.name}
        className={clsx(
          (variant === "top" || variant === "bottom") && "absolute",
          variant === "top"
            ? "top-0 invisible"
            : variant === "bottom"
            ? "bottom-0 invisible"
            : ""
        )}
      >
        <div
          className={clsx(
            "text-right ",
            {
              "text-secondary-color":
                variant === "before" ||
                variant === "after" ||
                variant === "first" ||
                variant === "last",
              "text-primary-color": variant === "spotlight",
            },
            {
              " text-xl [&>p:nth-child(2)]:text-xs ":
                variant === "first" || variant === "last",
              " text-2xl [&>p:nth-child(2)]:text-md":
                variant === "before" || variant === "after",
              " text-4xl leading-[50px] [&>p:nth-child(2)]:text-lg [&>p:nth-child(2)]:text-stone-400":
                variant === "spotlight",
            }
          )}
        >
          <p className={clsx("truncate")}>{project.name}</p>
          <p className="text-sm">
            {project.type}/{project.duration}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

const variantToInitialY = {
  before: -100,
};

export default SingleProject;
