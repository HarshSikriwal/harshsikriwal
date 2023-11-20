import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  const [animate, setAnimate] = useState(false);
  return (
    <div
      className={twMerge(
        `w-[400px]
        absolute bg-secondary-color border-2 border-red-500 h-full rounded-lg transition-all`,
        className
      )}
      style={style}
      onClick={() => setAnimate(true)}
    ></div>
  );
};

export default Card;
