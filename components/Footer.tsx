"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Header from "./Header";
import { Brush, Mail, SquareCode, User } from "lucide-react";

const Footer = () => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "About",
        href: "/",
        active: pathname === "/",
        icon: <User />,
      },
      {
        label: "Projects",
        href: "/projects",
        active: pathname === "/projects",
        icon: <SquareCode />,
      },
      {
        label: "Interests",
        href: "/interests",
        active: pathname === "/interests",
        icon: <Brush />,
      },
      {
        label: "Contact",
        href: "/contact",
        active: pathname === "/contact",
        icon: <Mail />,
      },
    ],
    [pathname]
  );

  return (
    <div className="flex fixed bottom-0 py-2 px-3 w-full border-secondary-color justify-between lg:hidden bg-black border-t-[1px]  z-20 ">
      {routes.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={` text-xs items-center flex flex-col gap-1 font-sans
              ${item.active ? "text-primary-color " : "text-secondary-color "}`}
        >
          {item.icon}
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Footer;
