"use client";
import { useEffect, useState } from "react";

import { projectDetails } from "@/projectDetails";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectNames from "@/components/ProjectNames";

const Projects = () => {
  return (
    <div className="flex justify-between py-8 grow">
      <div className="basis-2/3">
        <ProjectDetails />
      </div>
      <div className="h-full relative grow">
        <ProjectNames />
      </div>
    </div>
  );
};

export default Projects;
