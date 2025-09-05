import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
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

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu />
          <span className="sr-only">メニューを開く/閉じる</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        {navs.map((nav) => (
          <Button asChild key={nav.title} variant="ghost" className="w-full">
            <Link href={nav.href}>{nav.title}</Link>
          </Button>
        ))}
      </SheetContent>
    </Sheet>
  );
}
