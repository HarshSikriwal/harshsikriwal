import { projectDetails } from "@/projectDetails";
import React from "react";
import ProjectImagesForMobile from "./ProjectImagesForMobile";
import ProjectAboutForMobile from "./ProjectAboutForMobile";

const ProjectForMobile = () => {
  return (
    <div className="flex flex-col gap-8">
      {projectDetails.map((project, index) => (
        <div key={project.name} className="w-full  overflow-hidden">
          <p className="text-3xl font-bold my-4">{project.name}</p>
          <ProjectImagesForMobile images={project.images} />
          <ProjectAboutForMobile project={project} />
          <Links live={project.websiteLink} github={project.gitHubLink} />
        </div>
      ))}
    </div>
  );
};

export default ProjectForMobile;
