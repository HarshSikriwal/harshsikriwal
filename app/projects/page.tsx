import ProjectCarousel from "@/components/ProjectCarousel";
import ProjectNames from "@/components/ProjectNames";

const Projects = () => {
  return (
    <div className="flex justify-between py-8 px-32 grow gap-8">
      <div className="basis-2/3 relative">
        <ProjectCarousel />
      </div>
      <div className="h-full relative grow">
        <ProjectNames />
      </div>
    </div>
  );
};

export default Projects;
