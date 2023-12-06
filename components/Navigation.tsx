import { Menu } from "lucide-react";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type routesType = {
  label: string;
  href: string;
  active: boolean;
};

const Navigation = ({ routes }: { routes: routesType[] }) => {
  return (
    <Popover>
      <PopoverTrigger className="self-start md:hidden">
        <Menu />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col w-auto mr-2 py-2 bg-black">
        {routes.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`  hover:text-primary-color
              ${
                item.active
                  ? "text-primary-color font-normal"
                  : "text-secondary-color font-light"
              }`}
          >
            <li className="">{item.label}</li>
            {/* <p className="text-2xl">.</p> */}
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default Navigation;
