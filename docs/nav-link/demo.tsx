import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavLink } from "@/registry/new-york/active-link/nav-link";

const links = [
  { href: "/", label: "Home" },
  { href: "/nav-link", label: "Nav Link", exact: true },
  { href: "/nav-link/nested", label: "Nested" },
];

export function Demo() {
  return (
    <div className="flex gap-2">
      {links.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "aria-[current=page]:font-bold",
          )}
          exact={link.exact}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}
