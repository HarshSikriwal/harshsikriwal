"use client";
import { useContext, useEffect, useRef, useState } from "react";

import ProjectNames from "@/components/ProjectNames";
import ProjectCarousel from "@/components/ProjectCarousel";
import { projectDetails } from "@/projectDetails";
import { ProjectContext } from "@/context/ProjectContext";

const Projects = () => {
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
    <div className="flex justify-between py-8 px-32 grow gap-8">
      <div className="basis-2/3">
        <ProjectCarousel />
      </div>
      <div className="h-full relative grow">
        <ProjectNames />
      </div>
    </div>
  );
};

export default Projects;
