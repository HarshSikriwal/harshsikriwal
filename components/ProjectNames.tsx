import { ProjectContext } from "@/context/ProjectContext";
import { projectDetails } from "@/projectDetails";
import clsx from "clsx";
import { AnimatePresence, Variants, animate, motion, useAnimate } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";

const ProjectNames = () => {
  const [trio, setTrio] = useState([0,1,2])
  const containerRef = useRef<HTMLDivElement>(null)


  // const handleScroll = () => {
  //   const container = document.getElementById("list-container");
  //   if (!container) {
  //     return;
  //   }

  //   // if (container.scrollTop >= 360) {
  //   //   setVisibleNames()
  //   // }
  // };


  

  const onDown = () => {
    setTrio(p => p.map(i => checkIndex(i-1)))
  }
const onUp = () => {

    setTrio(p => p.map(i => checkIndex(i+1)))
  }

  return (
    <>
      <div
        // onScroll={handleScroll}
        id="list-container"
        ref={containerRef}
        className=" h-full flex flex-col items-end justify-between w-full"
        // onScroll={handleScroll}
      >
        <ChevronUp onClick={onUp}/>
        <SingleProject projectIndex={trio[0]} variant="before"/>
        <SingleProject projectIndex={trio[1]} variant="spotlight"/>
        <SingleProject projectIndex={trio[2]} variant="after"/>
       
        <ChevronDown onClick={onDown}/>
        {/* {visibleNames.map((project) => (
          <div key={project.name} className="project snap-always snap-center">
            <p className="text-3xl">{project.name}</p>
            <p className="text-sm">
              {project.type}/{project.duration}
            </p>
          </div>
        ))} */}
      </div>
    </>
  );
};


function checkIndex(p: number) {
  if (p < 0) {
    return projectDetails.length -1
  }
  if (p === projectDetails.length) {
    return 0
  }
  return p
}

const items:Variants = {
  "spotlight": {
    y: 0
  },
  "before": {
    y: 0
  },
"after": {
    y: 0
  },

}

function SingleProject({projectIndex, variant}:{projectIndex: number, variant: "before"|"after"|"spotlight"}) {
  const [project, setProject] = useState(projectDetails.at(projectIndex)!)

  useEffect(() => {
    setProject(projectDetails.at(projectIndex)!)
  }, [projectIndex])


  return (

  <AnimatePresence mode="popLayout">
<motion.div  className={clsx("project relative", 
  {
    "text-gray-500 ": variant === "before" || variant === "after",
    "text-gray-100 ": variant === "spotlight"
  }
  
  
)}

  // animate={variant}
  // variants={items}
initial={{y:-100, opacity:0}} animate={{y:0, opacity:1}} exit={{y:100,opacity:0}} key={project.name}
>

{/* <motion.div className="" >  */}
<p className={clsx("text-3xl truncate")}>{project.name}</p>
            <p className="text-sm">
              {project.type}/{project.duration}
            </p>
    {/* </motion.div> */}
            
          </motion.div>
  </AnimatePresence>
  )
}

const variantToInitialY = {
  "before": -100

}


export default ProjectNames;
