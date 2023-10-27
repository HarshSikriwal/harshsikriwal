"use client";
import { useState } from "react";

import { projectDetails } from "@/projectDetails";
import ProjectName from "@/components/ProjectName";
import ProjectDetails from "@/components/ProjectDetails";

const Projects = () => {
  return (
    <div className="flex justify-between mt-8">
      <div className="basis-2/3">
        <ProjectDetails />
      </div>
      <div className="h-[500px] pr-4 overflow-y-scroll custom-scrollbar">
        {projectDetails.map((project) => (
          <ProjectName key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
