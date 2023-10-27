import { ProjectContext } from "@/context/ProjectContext";
import { projectDetails } from "@/projectDetails";
import { useContext } from "react";

const ProjectName = ({ project }: { project: (typeof projectDetails)[0] }) => {
  const { name, type, duration } = project;

  const { myProject, setMyProject } = useContext(ProjectContext);

  return (
    <div
      onClick={() => {
        setMyProject(project);
      }}
      className={`cursor-pointer text-right mb-8

        ${
          myProject === project
            ? "text-primary-color italic font-semibold"
            : "text-secondary-color"
        }`}
    >
      <p className="text-3xl">{name}</p>
      <p className="text-sm">
        {type}/{duration}
      </p>
    </div>
  );
};

export default ProjectName;
