export default function BasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="container max-w-4xl prose dark:prose-invert py-12 w-full">
      {children}
    </article>
  );
}
