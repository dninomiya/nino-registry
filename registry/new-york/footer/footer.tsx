import { Button } from "@/components/ui/button";
import Logo from "@/registry/new-york/logo/logo";
import { SiGithub, SiX, SiYoutube } from "@icons-pack/react-simple-icons";
import Link from "next/link";

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
    title: "Home",
    items: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "About",
    items: [
      {
        title: "About",
        href: "/about",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="px-8 py-20 grid grid-cols-4 gap-6">
        <div>
          <Logo />
          <div className="flex items-center gap-2 mt-4">
            {socialLinks.map((link) => (
              <Button asChild key={link.title} variant="ghost" size="icon">
                <Link href={link.href}>
                  {link.icon}
                  <span className="sr-only">{link.title}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {navs.map((nav) => (
          <div key={nav.title}>
            <h3 className="font-semibold mb-6">{nav.title}</h3>
            <div className="space-y-4 text-[15px]">
              {nav.items.map((item) => (
                <div key={item.title} className="text-muted-foreground">
                  <Link href={item.href}>{item.title}</Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground border-t p-8">
        &copy; {new Date().getFullYear()} {APP_NAME}
      </p>
    </footer>
  );
}
