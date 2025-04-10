"use client";

import Link from "next/link";
import { useIsActivePath } from "@/registry/new-york/use-is-active-path/use-is-active-path";

export function NavLink({
  href,
  children,
  className,
  exact,
  ref,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  exact?: boolean;
  ref?: React.Ref<HTMLAnchorElement>;
} & React.ComponentProps<typeof Link>) {
  const isActivePath = useIsActivePath();

  return (
    <Link
      href={href}
      aria-current={isActivePath(href, { exact }) ? "page" : undefined}
      className={className}
      ref={ref}
      {...props}
    >
      {children}
    </Link>
  );
}
