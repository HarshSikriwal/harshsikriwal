import { ProjectContext } from "@/context/ProjectContext";
import Image from "next/image";
import { useContext } from "react";

const ProjectDetails = () => {
  const { myProject } = useContext(ProjectContext);
  return (
    <div className="flex flex-col justify-end h-full">
      <Image
        className="object-cover"
        src={myProject.image[0]}
        alt="Project Images"
        width={500}
        height={300}
      />
      <p className="w-[500px] text-secondary-color text-lg">
        {myProject.description}
      </p>
      <div className="w-[500px] border-2 px-4 border-secondary-color text-secondary-color truncate">
        {myProject.tech}
      </div>
    </div>
  );
};

export default ProjectDetails;
