import { projectDetails } from "@/projectDetails";
import React from "react";
import ProjectImagesForMobile from "./ProjectImagesForMobile";
import ProjectAboutForMobile from "./ProjectAboutForMobile";
import Links from "./Links";

const ProjectForMobile = () => {
  return (
    <div className="flex flex-col gap-10">
      {projectDetails.map((project, index) => (
        <div
          key={project.name}
          className="w-full relative py-6 overflow-hidden rounded-lg shadow-2xl"
        >
          <div
            className={`absolute w-full h-full  -z-20 blur-2xl opacity-20`}
            style={{ backgroundColor: project?.bgColor }}
          ></div>
          <div className="flex flex-col items-center justify-between">
            <p className="text-3xl font-bold my-4 leading-[0.1]">
              {project.name}
            </p>
            <p className="text-secondary-color text-sm">{project.duration}</p>
          </div>
          <ProjectImagesForMobile images={project.images} />
          <ProjectAboutForMobile project={project} />
          <Links live={project.websiteLink} github={project.gitHubLink} />
        </div>
      ))}
    </div>
  );
};

export default ProjectForMobile;
