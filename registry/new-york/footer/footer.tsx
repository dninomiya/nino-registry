import { Button } from "@/components/ui/button";
import Logo from "@/registry/new-york/logo/logo";
import { SiGithub, SiX, SiYoutube } from "@icons-pack/react-simple-icons";
import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import ToggleTheme from "../toggle-theme/toggle-theme";

const socialLinks = [
  {
    title: "GitHub",
    href: "",
    icon: <SiGithub />,
  },
  {
    title: "YouTube",
    href: "",
    icon: <SiYoutube />,
  },
  {
    title: "X",
    href: "",
    icon: <SiX />,
  },
];

const APP_NAME = "DemoApp";

const navs = [
  {
    title: "サービス",
    items: [
      {
        title: "サービス1",
        href: "/",
      },
      {
        title: "サービス2",
        href: "/about",
      },
      {
        title: "サービス3",
        href: "/contact",
      },
    ],
  },
  {
    title: "会社",
    items: [
      {
        title: "会社概要",
        href: "/compnay",
      },
      {
        title: "お知らせ",
        href: "/news",
      },
      {
        title: "お問い合わせ",
        href: "/contact",
      },
    ],
  },
  {
    title: "法務",
    items: [
      {
        title: "特定商法表記",
        href: "/legal",
      },
      {
        title: "プライバシーポリシー",
        href: "/privacy",
      },
      {
        title: "サービス利用規約",
        href: "/terms",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="py-10 lg:py-20 container flex flex-col lg:flex-row gap-12 justify-between">
        <div className="space-y-4 max-w-xs">
          <Logo />
          <p className="text-muted-foreground text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <div className="flex items-center gap-2 mt-4">
            {socialLinks.map((link) => (
              <Button asChild key={link.title} variant="ghost" size="icon">
                <Link href={link.href} className="text-muted-foreground">
                  <Slot className="size-5">{link.icon}</Slot>
                  <span className="sr-only">{link.title}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-36">
          {navs.map((nav) => (
            <div key={nav.title}>
              <h3 className="font-semibold mb-6">{nav.title}</h3>
              <div className="space-y-4 text-[15px]">
                {nav.items.map((item) => (
                  <div key={item.title} className="text-muted-foreground">
                    <Link
                      href={item.href}
                      className="hover:text-secondary-foreground"
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t py-4 md:py-4">
        <div className="container flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {APP_NAME}
          </p>
          <ToggleTheme />
        </div>
      </div>
    </footer>
  );
}
