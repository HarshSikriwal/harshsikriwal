"use client";

import { projectDetails } from "@/projectDetails";

import { ChevronDown, ChevronUp } from "lucide-react";
import {
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import SingleProject from "./SingleProject";
import { ProjectContext } from "@/context/ProjectContext";

const variants = ["first", "before", "spotlight", "after", "last"] as const;

const ProjectNames = () => {
  const { myProject, setMyProject } = useContext(ProjectContext);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();
      if (event.key === "ArrowDown") {
        const index = projectDetails.indexOf(myProject!);

        if (index >= 0 && index < projectDetails.length - 1) {
          setMyProject(projectDetails[index + 1]);
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      event.preventDefault();
      if (event.key === "ArrowUp") {
        const index = projectDetails.indexOf(myProject!);

        if (index > 0 && index < projectDetails.length) {
          setMyProject(projectDetails[index - 1]);
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [myProject, setMyProject]);
  return (
    <div
      id="list-container"
      className="h-[450px] gap-6 flex flex-col justify-between w-1/3 custom-scrollbar overflow-y-scroll fixed right-3"
    >
      {projectDetails.map((project, index) => (
        <SingleProject key={project.name} index={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectNames;
