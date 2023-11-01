import { ProjectContext } from "@/context/ProjectContext";
import Image from "next/image";
import { useContext } from "react";
import ProjectImages from "./ProjectImages";
import { projectDetails } from "@/projectDetails";

const ProjectAbout = () => {
  const { myProject } = useContext(ProjectContext);
  return (
    <div className=" flex flex-col h-full w-full border-1 relative">
      {projectDetails.map((project) => (
        <ProjectImages key={project.name} project={project} />
      ))}
    </div>
  );
};

export default ProjectAbout;
