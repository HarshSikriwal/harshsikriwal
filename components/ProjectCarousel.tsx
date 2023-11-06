import { ProjectContext } from "@/context/ProjectContext";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";
import { useContext, useEffect, useState, useTransition } from "react";
import ProjectAbout from "./ProjectAbout";
import ProjectImages from "./ProjectImages";

const ProjectCarousel = () => {
  const { myProject } = useContext(ProjectContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [left, setLeft] = useState(false);
  const [_, start] = useTransition();
  // const [right, setRight] = useState(false);

  const handleLeft = () => {
    setLeft(true);

    start(() => {
      if (myProject?.images.length === 0) {
        setCurrentIndex(0);
      }
      if (myProject) {
        setCurrentIndex(
          (prev) =>
            (prev - 1 + myProject.images.length) % myProject.images.length
        );
      }
    });
    // setRight(false);
  };
  const handleRight = () => {
    setLeft(false);
    start(() => {
      if (myProject?.images.length === 0) {
        setCurrentIndex(0);
      }
      if (myProject) {
        setCurrentIndex((prev) => (prev + 1) % myProject?.images?.length);
      }
    });

    // setRight(true);
  };

  useEffect(() => {
    if (myProject === null) return;
    setCurrentIndex(0);
  }, [myProject]);

  return (
    <div className="flex h-full justify-between gap-4">
      <ChevronLeft
        onClick={handleLeft}
        className={
          myProject?.images.length === 1
            ? "invisible"
            : "self-center text-secondary-color hover:text-primary-color hover:scale-105"
        }
      />
      <div className="flex flex-col w-full h-full items-center justify-center gap-2">
        <div className="relative h-full w-full flex items-center overflow-hidden group">
          <ProjectImages currentIndex={currentIndex} left={left} />
          <ProjectAbout />
        </div>
        <div className=" flex z-[500]">
          {myProject?.images?.map((_, i) => (
            <Circle
              className={`h-3 transition-all duration-500  ${
                i === currentIndex ? "fill-white scale-[1.3]" : ""
              }`}
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

export default ProjectCarousel;
