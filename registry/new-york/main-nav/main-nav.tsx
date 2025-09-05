import { Button } from "@/components/ui/button";
import Link from "next/link";

const navs = [
  {
    title: "機能",
    href: "#features",
  },
  {
    title: "料金プラン",
    href: "#pricing",
  },
  {
    title: "利用者の声",
    href: "#testimonials",
  },
  {
    title: "よくある質問",
    href: "#faq",
  },
  {
    title: "お問い合わせ",
    href: "#cta",
  },
];

export default function MainNav() {
  return (
    <div className="gap-0.5 hidden md:flex">
      {navs.map((nav) => (
        <Button asChild key={nav.title} variant="ghost">
          <Link href={nav.href}>{nav.title}</Link>
        </Button>
      ))}
    </div>
  );
}
