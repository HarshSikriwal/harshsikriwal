import React from "react";
import { twMerge } from "tailwind-merge";

const Header = ({ className }: any) => {
  return (
    <div className={twMerge("text-primary-color name-nav", className)}>
      <h1>Harsh Sikriwal</h1>
      <p className="sub-font">Web-Developer</p>
    </div>
  );
};

export default Header;
