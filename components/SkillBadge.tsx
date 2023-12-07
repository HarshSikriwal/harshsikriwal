import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function SkillBadge({ skills }: { skills: string | undefined }) {
  const logoPath: { [key: string]: string } = {
    React: "/tech-logos/react.svg",
    NextJs: "/tech-logos/next-js.svg",
    Tailwind: "/tech-logos/tailwindcss.svg",
    TypeScript: "/tech-logos/typescript.svg",
    JavaScript: "/tech-logos/javascript.svg",
    CSS: "/tech-logos/css.svg",
    HTML: "/tech-logos/html.svg",
    PostgreSQL: "/tech-logos/postgresql.svg",
    "Framer-Motion": "/tech-logos/framermotion.svg",
    DaisyUI: "/tech-logos/daisyui.svg",
    "Shadcn/UI": "/tech-logos/shadcn.svg",
    Firebase: "/tech-logos/firebase.svg",
    "Observable Plot": "/tech-logos/observablehq.svg",
    Supabase: "/tech-logos/supabase.svg",
    Stripe: "/tech-logos/stripe.svg",
    Vite: "/tech-logos/vite.svg",
    "React-Router": "/tech-logos/react-router.svg",
    Bootstrap: "/tech-logos/bootstrap.svg",
  };

  return (
    <div className="md:w-2/3 flex flex-wrap gap-2 ">
      {skills?.split(", ").map((skill) => (
        <Badge
          key={skill}
          className="flex gap-2 mb-0 border-none text-gray-200 bg-stone-700"
          variant="outline"
        >
          {logoPath[`${[skill]}`] && (
            <Image
              src={logoPath[`${skill}`]}
              width={15}
              height={15}
              alt="icon"
            />
          )}
          {skill}
        </Badge>
      ))}
    </div>
  );
}
