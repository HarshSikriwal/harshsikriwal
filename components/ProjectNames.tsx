import { ProjectContext } from "@/context/ProjectContext";
import { projectDetails } from "@/projectDetails";
import clsx from "clsx";
import {
  AnimatePresence,
  Variants,
  animate,
  motion,
  useAnimate,
} from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRef, useState } from "react";
import SingleProject from "./SingleProject";

const ProjectNames = () => {
  const [trio, setTrio] = useState([0, 1, 2, 3, 4]);
  const containerRef = useRef<HTMLDivElement>(null);

  const [animationStarted, setAnimationStarted] = useState(false);

  const onDown = () => {
    setTrio((p) => p.map((i) => checkIndex(i - 1)));
    if (!animationStarted) {
      setAnimationStarted(true);
    }
  };
  const onUp = () => {
    setTrio((p) => p.map((i) => checkIndex(i + 1)));
  };

  return (
    <>
      <div
        id="list-container"
        ref={containerRef}
        className=" h-full flex flex-col items-end justify-between w-full overflow-hidden"
      >
        {/* <ChevronUp onClick={onUp} /> */}
        <SingleProject
          projectIndex={trio[0]}
          variant="first"
          animationStarted={animationStarted}
        />
        <SingleProject projectIndex={trio[1]} variant="before" />
        <SingleProject projectIndex={trio[2]} variant="spotlight" />
        <SingleProject projectIndex={trio[3]} variant="after" />
        <SingleProject projectIndex={trio[4]} variant="last" />

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
