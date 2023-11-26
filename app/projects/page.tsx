"use client";
import { useEffect, useState } from "react";

import ProjectNames from "@/components/ProjectNames";
import ProjectCarousel from "@/components/ProjectCarousel";

const Projects = () => {
  return (
    <div className="flex justify-between py-8 grow gap-8">
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
