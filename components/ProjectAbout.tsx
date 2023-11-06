import { ProjectContext } from "@/context/ProjectContext";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { SkillBadge } from "./SkillBadge";

const ProjectAbout = () => {
  const { myProject } = useContext(ProjectContext);

  return (
    <div className="absolute h-full w-full flex flex-col px-8 py-24 gap-6 z-[20000] bg-black bg-opacity-90 invisible group-hover:visible">
      <div>
        <h3 className="text-4xl font-semibold">{myProject?.name}</h3>
      </div>
      <div>
        <p className="w-2/3 text-2xl mb-4 leading-7">
          {myProject?.description}
        </p>
        <SkillBadge skills={myProject?.tech} />
      </div>
      <div className="flex gap-4">
        {myProject?.websiteLink && (
          <Link
            target="_blank"
            href={myProject?.websiteLink}
            className="
                border-2 px-2 py-1 
                rounded-lg w-20 
                text-center border-secondary-color 
                text-secondary-color text-sm 
                hover:text-primary-color hover:scale-[0.95]
                hover:border-primary-color
                "
          >
            <div className="flex justify-center gap-1 items-center">
              <span>Live</span>
              <MoveUpRight className="h-4" />
            </div>
          </Link>
        )}
        {myProject?.gitHubLink && (
          <Link
            target="_blank"
            href={myProject?.gitHubLink}
            className="
                 border-2 px-2 py-1
                 text-sm w-20 text-center rounded-lg 
                 border-secondary-color text-secondary-color 
                 hover:text-primary-color hover:scale-[0.95] 
                 hover:border-primary-color
                 "
          >
            <div className="flex justify-between items-center">
              <span>GitHub</span>
              <MoveUpRight className="h-4" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectAbout;
