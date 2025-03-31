import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import logoImage from "./logo.jpg";
import Link from "next/link";

export function SidebarLogo() {
  return (
    <Link
      href="/"
      className="flex p-2 items-center gap-2 hover:bg-sidebar-accent rounded-md"
    >
      <Image src={logoImage} alt="" className="size-8 rounded-md" />
      <span className="font-bold">{APP_NAME}</span>
    </Link>
  );
}
