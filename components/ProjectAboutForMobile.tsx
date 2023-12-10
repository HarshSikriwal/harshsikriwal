import { projectDetails } from "@/projectDetails";
import React from "react";
import { SkillBadge } from "./SkillBadge";

const ProjectAboutForMobile = ({
  project,
}: {
  project: (typeof projectDetails)[0];
}) => {
  return (
    <div className="flex flex-col gap-4 my-6">
      <p className="text-secondary-color text-xl mb-3 font-semibold">
        {project.description}
      </p>
      <SkillBadge skills={project.tech} />
    </div>
  );
};

export default ProjectAboutForMobile;
