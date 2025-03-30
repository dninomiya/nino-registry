import Link from "next/link"
import { usePathname } from "next/navigation";

export function ActiveLink({ href, children, className, isExact }: { href: string; children: React.ReactNode, className?: string, isExact?: boolean }) {
  const pathname = usePathname()
  const isRoot = href === "/"
  const isActive = isExact ? pathname === href : isRoot ? pathname === href : pathname.startsWith(href)

  return <Link href={href} aria-current={isActive ? "page" : undefined} className={className}>{children}</Link>
}