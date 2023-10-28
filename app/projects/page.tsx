"use client";
import { useEffect, useState } from "react";

import { projectDetails } from "@/projectDetails";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectNames from "@/components/ProjectNames";

const Projects = () => {
  return (
    <div className="flex justify-between mt-8">
      <div className="basis-2/3">
        <ProjectDetails />
      </div>
      <div className="h-[500px] relative grow">
        <ProjectNames />
      </div>
    </div>
  );
};

export default Projects;
