import Link from "next/link";
import { usePathname } from "next/navigation";

export function ActiveLink({
  href,
  children,
  className,
  exact,
  ref,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  exact?: boolean;
  ref?: React.Ref<HTMLAnchorElement>;
}) {
  const pathname = usePathname();
  const isRoot = href === "/";
  const isActive = exact
    ? pathname === href
    : isRoot
      ? pathname === href
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={className}
      ref={ref}
    >
      {children}
    </Link>
  );
}
