import { ProjectContext } from "@/context/ProjectContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import ProjectImages from "./ProjectImages";
import { projectDetails } from "@/projectDetails";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

const ProjectAbout = () => {
  const { myProject } = useContext(ProjectContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    if (myProject?.images.length === 0) {
      setCurrentIndex(0);
    }
    if (myProject) {
      setCurrentIndex(
        (prev) => (prev - 1 + myProject.images.length) % myProject.images.length
      );
    }
  };
  const handleRight = () => {
    if (myProject?.images.length === 0) {
      setCurrentIndex(0);
    }
    if (myProject) {
      setCurrentIndex((prev) => (prev + 1) % myProject?.images?.length);
    }
  };

  useEffect(() => {
    if (myProject === null) return;
    setCurrentIndex(0);
  }, [myProject]);

  return (
    <div className="flex h-full justify-between gap-4 pb-10">
      <ChevronLeft
        onClick={handleLeft}
        className={
          myProject?.images.length === 1
            ? "invisible"
            : "self-center text-secondary-color hover:text-primary-color hover:scale-105"
        }
      />
      <div className="relative h-full w-full flex flex-col">
        {projectDetails.map((project) => (
          <ProjectImages
            key={project.name}
            project={project}
            currentIndex={currentIndex}
          />
        ))}
        <div className="absolute -bottom-8 self-center flex">
          {myProject?.images?.map((_, i) => (
            <Circle
              className={`h-3 ${i === currentIndex ? "fill-white" : ""}`}
              key={i}
            />
          ))}
        </div>
      </div>

      <ChevronRight
        onClick={handleRight}
        className={
          myProject?.images.length === 1
            ? "invisible"
            : "self-center right-0 text-secondary-color hover:text-primary-color hover:scale-105"
        }
      />
    </div>
  );
};

export default ProjectAbout;
