import { projectDetails } from "@/projectDetails";
import React from "react";
import ProjectImagesForMobile from "./ProjectImagesForMobile";
import ProjectAboutForMobile from "./ProjectAboutForMobile";

const ProjectForMobile = () => {
  return (
    <div>
      {projectDetails.map((project, index) => (
        <div key={project.name} className="w-full  overflow-hidden">
          <p className="text-4xl my-4">{project.name}</p>
          <ProjectImagesForMobile images={project.images} />
          <ProjectAboutForMobile project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectForMobile;
