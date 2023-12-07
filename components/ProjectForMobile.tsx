import { projectDetails } from "@/projectDetails";
import React from "react";
import ProjectImagesForMobile from "./ProjectImagesForMobile";

const ProjectForMobile = () => {
  return (
    <div>
      {projectDetails.map((project, index) => (
        <div key={project.name}>
          <p className="text-4xl">{project.name}</p>
          <ProjectImagesForMobile images={project.images} />
        </div>
      ))}
    </div>
  );
};

export default ProjectForMobile;
