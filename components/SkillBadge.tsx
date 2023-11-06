import { Badge } from "@/components/ui/badge";

export function SkillBadge({ skills }: { skills: string | undefined }) {
  return (
    <div className="w-2/3">
      {skills?.split(",").map((skill) => (
        <Badge
          className="mr-2 text-secondary-color bg-stone-900"
          key={skill}
          variant="outline"
        >
          {skill}
        </Badge>
      ))}
    </div>
  );
}
