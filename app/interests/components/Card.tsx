import { motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  className,
  style,
  name,
  updateState,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  name: string;
  updateState: (name: string) => void;
  children: React.ReactNode;
}) => {
  const handleClick = () => updateState(name);
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
