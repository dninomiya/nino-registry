"use client";

import { Badge } from "@/components/ui/badge";
import { useIsActivePath } from "@/hooks/use-is-active-path";
import { usePathname, useRouter } from "next/navigation";

const pathes = [
  "/use-is-active-path",
  "/use-is-active-path/demo",
  "/dashboard",
];

export function Demo() {
  const isActivePath = useIsActivePath();
  const pathname = usePathname();

  return (
    <div className="space-y-4 rounded-lg border p-4">
      <p className="text-sm text-muted-foreground">
        現在のパス:{" "}
        <code className="rounded bg-muted px-2 py-1">{pathname}</code>
      </p>

      <div className="space-y-2">
        {pathes.map((path) => {
          const isActive = isActivePath(path);
          return (
            <div key={path} className="flex items-center gap-2">
              <code className="rounded bg-muted px-2 py-1 text-sm">{path}</code>
              <Badge
                variant={isActive ? "default" : "outline"}
                className="animate-in fade-in"
              >
                {isActive ? "アクティブ" : "非アクティブ"}
              </Badge>
            </div>
          );
        })}
      </div>
    </div>
  );
}
