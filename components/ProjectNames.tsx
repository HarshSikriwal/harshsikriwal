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
        className="h-[450px] gap-6 flex flex-col justify-between w-1/3 custom-scrollbar overflow-y-scroll fixed right-3"
      >
        {projectDetails.map((project, index) => (
          <SingleProject key={project.name} index={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectNames;
