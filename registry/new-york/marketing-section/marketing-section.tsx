import { cn } from "@/lib/utils";

export default function MarketingSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section className={cn("py-10 lg:py-20 odd:bg-muted", className)} id={id}>
      {children}
    </section>
  );
}

export function MarketingSectionHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex flex-col items-center gap-2 py-8 text-center md:py-16 lg:py-20 xl:gap-4">
      {children}
    </div>
  );
}

export function MarketingSectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-primary leading-tighter text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-4xl xl:tracking-tighter max-w-4xl">
      {children}
    </h2>
  );
}

export function MarketingSectionDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-foreground max-w-3xl text-base text-balance sm:text-lg">
      {children}
    </p>
  );
}

export function MarketingSectionContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container">{children}</div>;
}
