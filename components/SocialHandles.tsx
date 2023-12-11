import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";
import ResumeIcon from "../public/file-cv.svg";
import Image from "next/image";
import Link from "next/link";
import { ImProfile } from "react-icons/im";

const SocialHandles = () => {
  return (
    <div className="flex w-full items-center justify-center gap-8 mt-4">
      <Link
        href="https://github.com/HarshSikriwal"
        target="_blank"
        className="text-secondary-color hover:text-primary-color hover:scale-105 active:scale-95"
      >
        <Github />
      </Link>
      <Link
        href="https://www.linkedin.com/in/harsh-sikriwal-491094192/"
        target="_blank"
        className="text-secondary-color hover:text-primary-color hover:scale-105 active:scale-95"
      >
        <Linkedin />
      </Link>
      <Link
        href="https://twitter.com/harshsikriwal01"
        target="_blank"
        className="text-secondary-color hover:text-primary-color hover:scale-105 active:scale-95"
      >
        <Twitter />
      </Link>
      <Link href="https://tinyurl.com/harshsikriwalcv" target="_blank">
        <ImProfile className="text-secondary-color text-xl hover:text-primary-color hover:scale-105 active:scale-95" />
        {/* <Image
          src={ResumeIcon}
          alt="resume-icon"
          width={28}
          height={25}
          className="fill-secondary-color hover:fill-primary-color"
        /> */}
      </Link>
    </div>
  );
};

export default SocialHandles;
