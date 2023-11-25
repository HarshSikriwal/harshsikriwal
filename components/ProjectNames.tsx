import { projectDetails } from "@/projectDetails";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useRef, useState } from "react";
import SingleProject from "./SingleProject";

const variants = ["first", "before", "spotlight", "after", "last"] as const;

const ProjectNames = () => {
  const [projectIndex, setProjectIndex] = useState(
    projectDetails.map((_, i) => i)
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const onDown = () => {
    setProjectIndex((p) => p.map((i) => checkIndex(i - 1)));
  };
  const onUp = () => {
    setProjectIndex((p) => p.map((i) => checkIndex(i + 1)));
  };

  return (
    <>
      <div
        id="list-container"
        ref={containerRef}
        className="h-full gap-6 flex flex-col items-end justify-between w-full overflow-hidden"
      >
        <ChevronUp onClick={onUp} />
        {projectIndex.map((i, index) => (
          <SingleProject
            projectIndex={i}
            index={index}
            variant={(() => {
              if (index < 5) return variants[index];
              if (index === 5) return "bottom";
              if (index === projectIndex.length - 1) return "top";
              return "top";
            })()}
            key={i}
          />
        ))}

        <ChevronDown onClick={onDown} />
      </div>
    </>
  );
};

function checkIndex(p: number) {
  if (p < 0) {
    return projectDetails.length - 1;
  }
  if (p === projectDetails.length) {
    return 0;
  }
  return p;
}

export default ProjectNames;
