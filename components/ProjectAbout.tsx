import { ProjectContext } from "@/context/ProjectContext";
import Image from "next/image";
import { useContext, useState } from "react";
import ProjectImages from "./ProjectImages";
import { projectDetails } from "@/projectDetails";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

const ProjectAbout = () => {
  const { myProject } = useContext(ProjectContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    if (myProject) {
      setCurrentIndex(
        (prev) => (prev - 1 + myProject.images.length) % myProject.images.length
      );
    }
  };
  const handleRight = () => {
    if (myProject) {
      setCurrentIndex((prev) => (prev + 1) % myProject?.images?.length);
    }
  };

  return (
    <div className=" flex flex-col h-full w-full border-1 relative">
      <ChevronLeft onClick={handleLeft} className="absolute top-64 z-50" />
      {projectDetails.map((project) => (
        <ProjectImages
          key={project.name}
          project={project}
          currentIndex={currentIndex}
        />
      ))}
      <ChevronRight
        onClick={handleRight}
        className="absolute top-64 right-0 z-50"
      />
    </div>
  );
};

export default ProjectAbout;
