import { Badge } from "@/components/ui/badge";
import { allDocItems, getDoc } from "@/lib/doc";
import { ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const item = await getDoc(id);
  return {
    title: item?.title,
    description: item?.description,
  };
};

export default async function DocPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const Doc = (await import(`@/docs/${id}/doc.mdx`)).default;
  const item = await getDoc(id);

  if (!item) {
    notFound();
  }

  return (
    <article className="container max-w-4xl prose dark:prose-invert py-12 w-full">
      <header className="not-prose mb-8">
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
            {item.title}
          </h1>
          <p className="text-base text-muted-foreground">{item.description}</p>
        </div>

        {item.meta?.docs && item.meta?.docs.length > 0 && (
          <div className="flex items-center space-x-2 pt-4">
            {item.meta?.docs?.map((doc) => (
              <Badge key={doc.title} variant="secondary" asChild>
                <a href={doc.url} target="_blank" rel="noopener noreferrer">
                  {doc.title}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Badge>
            ))}
          </div>
        )}
      </header>
      <Doc />
    </article>
  );
}

export async function generateStaticParams() {
  const items = await allDocItems();
  return items.map((item) => ({
    id: item.id,
  }));
}
