import React from "react";
import { twMerge } from "tailwind-merge";

const Header = ({ className }: any) => {
  return (
    <div className={twMerge("text-primary-color", className)}>
      <h1 className="font-bold text-5xl lg:font-light">Harsh Sikriwal</h1>
      <p className="text-primary-color lg:pl-1 max-lg:leading-none">
        Web-Developer
      </p>
    </div>
  );
};

export default Header;
