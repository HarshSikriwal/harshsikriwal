"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Header from "./Header";

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
      { label: "Info", href: "/info", active: pathname === "/info" },
    ],
    [pathname]
  );

  return (
    <div
      className={`flex mb-10 ${
        pathname === "/" ? "justify-end" : "justify-between"
      } `}
    >
      <Link href="./">
        <Header className={pathname === "/" ? "hidden" : ""} />
      </Link>
      <div className="flex gap-8">
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
