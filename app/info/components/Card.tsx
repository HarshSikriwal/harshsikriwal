import React, { Dispatch, SetStateAction, useState } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  className,
  style,
  index,
  updateState,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  index: number;
  updateState: (index: number) => void;
  children: React.ReactNode;
}) => {
  const handleClick = () => updateState(index);
  return (
    <div
      className={twMerge(
        `w-[400px]
        absolute bg-black border-[1px] border-stone-700 h-full rounded-lg transition-all`,
        className
      )}
      style={style}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Card;
