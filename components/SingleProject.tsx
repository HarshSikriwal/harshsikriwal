import { ProjectContext } from "@/context/ProjectContext";
import { projectDetails } from "@/projectDetails";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

import { useContext, useEffect, useState } from "react";

function SingleProject({
  element,
  variant,
  index,
  handleClick,
  up,
}: {
  element: number;
  variant:
    | "first"
    | "before"
    | "after"
    | "last"
    | "spotlight"
    | "top"
    | "bottom";
  index: number;
  handleClick: (index: number) => void;
  up: boolean;
}) {
  const { myProject, setMyProject } = useContext(ProjectContext);
  const [project, setProject] = useState(projectDetails.at(element)!);

  const upOrDown = {
    up: {
      y: "100%",
    },
    down: { y: "-100%" },
  };

  useEffect(() => {
    setProject(projectDetails.at(element)!);

    if (variant === "spotlight") {
      if (myProject?.name === projectDetails[element].name) return;
      setMyProject(projectDetails[element]);
    }
  }, [element, variant]);

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        onClick={() => handleClick(index)}
        key={project.name}
        // layoutId={project.name}
        // initial={up ? { y: "200%", x: "200%" } : { y: "-150%", x: "-200%" }}
        // animate={{ y: "0%" }}
        transition={{
          duration: 0.7,
          opacity: { duration: 0 },
          fontSize: { duration: 0 },

          type: "spring",
          ease: "backOut",
        }}
        layoutId={project.name}
        className={index > 4 ? "hidden" : ""}
      >
        <div
          className={clsx(
            `text-right cursor-pointer`,
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

export default SingleProject;
