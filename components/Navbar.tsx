"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Header from "./Header";
import Navigation from "./Navigation";

const Navbar = () => {
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
      className={`flex mb-10 my-4 ${
        pathname === "/" ? "justify-end" : "justify-between"
      } `}
    >
      <Link href="./">
        <Header className={` ${pathname === "/" ? "hidden" : ""}`} />
      </Link>
      <Navigation routes={routes} />
      <div className="hidden md:flex gap-8">
        {routes.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={` hover:text-primary-color
              ${
                item.active
                  ? "text-primary-color font-normal"
                  : "text-secondary-color font-light"
              }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
