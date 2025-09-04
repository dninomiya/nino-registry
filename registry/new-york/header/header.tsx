import Logo from "@/registry/new-york/logo/logo";

export default function Header() {
  return (
    <header className="h-16 md:px-8 flex items-center gap-4 border-b sticky top-0 bg-background z-20">
      <Logo />
      <span className="flex-1"></span>
    </header>
  );
}
