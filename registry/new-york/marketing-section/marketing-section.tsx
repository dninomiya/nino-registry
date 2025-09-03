export default function MarketingSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="py-16 px-8">{children}</section>;
}

export function MarketingSectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h2 className="text-3xl font-bold text-center mb-12">{children}</h2>;
}

export function MarketingSectionContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-6xl mx-auto">{children}</div>;
}
