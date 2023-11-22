import React, { Dispatch, SetStateAction, useState } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  className,
  style,
  index,
  updateState,
}: {
  className?: string;
  style?: React.CSSProperties;
  index: number;
  updateState: (index: number) => void;
}) => {
  const handleClick = () => updateState(index);
  return (
    <div
      className={twMerge(
        `w-[400px]
        absolute bg-secondary-color border-2 border-red-500 h-full rounded-lg transition-all`,
        className
      )}
      style={style}
      onClick={handleClick}
    ></div>
  );
};

export default Card;
