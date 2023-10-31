import { ProjectContext } from "@/context/ProjectContext";
import Image from "next/image";
import { useContext } from "react";
import ProjectImages from "./ProjectImages";

const ProjectDetails = () => {
  const { myProject } = useContext(ProjectContext);
  return (
    <div className=" flex flex-col h-full w-full border-1 relative">
      <ProjectImages />
      {/* <div className="">
        <p className="w-[500px] text-white text-2xl">{myProject.description}</p>
        <div className="w-[500px] border-2 px-4 border-secondary-color text-secondary-color truncate">
          {myProject.tech}
        </div>
      </div> */}
    </div>
  );
};

export default ProjectDetails;
