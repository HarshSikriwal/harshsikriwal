import ProjectCarousel from "@/components/ProjectCarousel";
import ProjectForMobile from "@/components/ProjectForMobile";
import ProjectNames from "@/components/ProjectNames";

const Projects = () => {
  return (
    <>
<<<<<<< HEAD
      <div className="hidden md:flex justify-between py-10 grow gap-8">
        <div className="basis-2/3 relative">
          <ProjectCarousel />
        </div>
        <div className="h-full relative grow">
          <ProjectNames />
        </div>
      </div>
=======
      <div className="md:hidden">
        <ProjectForMobile />
      </div>
      <div className="hidden md:flex justify-between py-10 grow gap-8">
        <div className="basis-2/3 relative">
          <ProjectCarousel />
        </div>
        <div className="h-full relative grow">
          <ProjectNames />
        </div>
      </div>
>>>>>>> 72b6c7e0426965f26a4c08c8b8a756289c3a78ec
    </>
  );
};

export default Projects;
