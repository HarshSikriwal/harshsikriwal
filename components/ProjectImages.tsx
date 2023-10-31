import Image from "next/image";
import React from "react";

const ProjectImages = ({ images }: { images: string[] }) => {
  return (
    <div className="relative grow">
      <Image
        className="project-grayscale"
        src={images[0]}
        alt="Project Images"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default ProjectImages;
