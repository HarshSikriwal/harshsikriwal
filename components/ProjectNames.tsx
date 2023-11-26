import { projectDetails } from "@/projectDetails";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useRef, useState } from "react";
import SingleProject from "./SingleProject";

const variants = ["first", "before", "spotlight", "after", "last"] as const;

const ProjectNames = () => {
  return (
    <>
      <div
        id="list-container"
        className="h-[450px] gap-7 flex flex-col items-end justify-between w-full pr-4 custom-scrollbar overflow-y-scroll"
      >
        {projectDetails.map((project, index) => (
          <SingleProject key={project.name} index={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectNames;
