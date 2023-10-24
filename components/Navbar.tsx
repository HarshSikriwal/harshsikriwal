"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

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
    <div className="flex justify-end">
      <div className="flex gap-8">
        {routes.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={
              item.active
                ? "text-primary-color sub-font font-bold"
                : "text-secondary-color sub-font"
            }
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
