import { buttonVariants } from "@/components/ui/button";
import { NavLink } from "@/components/nav-link";

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
          className={buttonVariants({
            variant: "outline",
            className: "aria-[current=page]:text-sky-500",
          })}
          exact={link.exact}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}
