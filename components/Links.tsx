import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Links = ({ live, github }: { live?: string; github?: string }) => {
  return (
    <div className="flex gap-4">
      {live && (
        <Link
          target="_blank"
          href={live}
          className="
          bg-primary-color
          border-2 px-2 py-1 
          rounded-lg w-20 
          text-center border-black
          text-black text-sm 
          hover:text-black hover:scale-[0.95]
          hover:border-primary-color
          "
        >
          <div className="flex justify-center gap-1 items-center">
            <span>Live</span>
            <MoveUpRight className="h-4" />
          </div>
        </Link>
      )}
      {github && (
        <Link
          target="_blank"
          href={github}
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
  );
};

export default Links;
