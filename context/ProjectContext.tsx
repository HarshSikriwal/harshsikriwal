"use client";
import { projectDetails } from "@/projectDetails";
import { createContext, useState } from "react";

export const ProjectContext = createContext<{
  myProject: (typeof projectDetails)[0] | null;
  setMyProject: React.Dispatch<
    React.SetStateAction<(typeof projectDetails)[0]>
  >;
}>({
  myProject: projectDetails[0],
  setMyProject: () => null,
});

const ProjectsProvider = ({ children }: { children: React.ReactNode }) => {
  const [myProject, setMyProject] = useState<(typeof projectDetails)[0]>(
    projectDetails[0]
  );
  return (
    <ProjectContext.Provider value={{ myProject, setMyProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
export default ProjectsProvider;
