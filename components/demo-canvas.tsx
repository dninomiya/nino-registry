import { cn } from "@/lib/utils";

export function DemoCanvas({
  children,
  className,
  center = false,
}: {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <div
      className={cn(
        "p-4 border rounded not-prose",
        center && "flex items-center justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
}
