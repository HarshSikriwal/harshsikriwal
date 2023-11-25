import { projectDetails } from "@/projectDetails";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useRef, useState } from "react";
import SingleProject from "./SingleProject";

const variants = ["first", "before", "spotlight", "after", "last"] as const;

const ProjectNames = () => {
  const [up, setUp] = useState(false);
  const [projectIndex, setProjectIndex] = useState(
    projectDetails.map((_, i) => i)
  );

  const onDown = () => {
    setUp(false);
    setProjectIndex((p) => p.map((i) => checkIndex(i - 1)));
  };
  const onUp = () => {
    setUp(true);
    setProjectIndex((p) => p.map((i) => checkIndex(i + 1)));
  };
  const handleClick = (index: number) => {
    if (index > 2) {
      setProjectIndex((p) => p.map((i) => checkIndex(i + index - 2)));
    }
    if (index < 2) {
      setProjectIndex((p) => p.map((i) => checkIndex(i - (2 - index))));
    }
  };

  return (
    <>
      <div
        id="list-container"
        className="h-full gap-6 flex flex-col items-end justify-between w-full overflow-hidden relative"
      >
        <ChevronUp onClick={onUp} />
        {projectIndex.map((element, index) => (
          <SingleProject
            element={element}
            index={index}
            handleClick={handleClick}
            up={up}
            variant={(() => {
              if (index < 5) return variants[index];
              if (index === 5) return "bottom";
              if (index === projectIndex.length - 1) return "top";
              return "top";
            })()}
            key={element}
          />
        ))}

        <ChevronDown onClick={onDown} />
      </div>
    </>
  );
};

function checkIndex(p: number) {
  if (p < 0) {
    return projectDetails.length + p;
  }
  if (p >= projectDetails.length) {
    return p % projectDetails.length;
  }
  return p;
}

export default ProjectNames;
