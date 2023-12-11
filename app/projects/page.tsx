import ProjectCarousel from "@/components/ProjectCarousel";
import ProjectForMobile from "@/components/ProjectForMobile";
import ProjectNames from "@/components/ProjectNames";

const Projects = () => {
  return (
    <>
      <div className="w-full overflow-x-hidden max-lg:px-2 lg:hidden">
        <ProjectForMobile />
      </div>
      <div className="hidden lg:flex justify-between py-10 grow gap-8">
        <div className="basis-2/3 relative">
          <ProjectCarousel />
        </div>
        <div className="h-full relative grow">
          <ProjectNames />
        </div>
      </div>
    </>
  );
};

export default Projects;
