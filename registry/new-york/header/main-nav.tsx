import { Button } from "@/components/ui/button";
import Link from "next/link";

const navs = [
  {
    title: "サービス1",
    href: "/",
  },
  {
    title: "サービス2",
    href: "/about",
  },
];

export default function MainNav() {
  return (
    <nav>
      <Button asChild>
        <Link href="/">
          <span>サービス1</span>
        </Link>
      </Button>
    </nav>
  );
}
