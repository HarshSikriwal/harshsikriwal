"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Header from "./Header";

const Footer = () => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "About",
        href: "/",
        active: pathname === "/",
      },
      {
        label: "Projects",
        href: "/projects",
        active: pathname === "/projects",
      },
      {
        label: "Interests",
        href: "/interests",
        active: pathname === "/interests",
      },
      { label: "Contact", href: "/contact", active: pathname === "/contact" },
    ],
    [pathname]
  );

  return (
    <div
      className={`flex py-3 px-2 w-full justify-between lg:hidden bg-primary-color z-20 `}
    >
      {routes.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={` text-lg
              ${
                item.active
                  ? "text-black font-semibold"
                  : "text-stone-700 font-light"
              }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Footer;
