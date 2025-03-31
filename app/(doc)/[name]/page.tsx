import { RegistryItemHeader } from "@/components/registry-item-header";
import { getRegistryItem } from "@/lib/registry";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const { name } = await params;
  const item = await getRegistryItem(name);
  return {
    title: item?.title,
    description: item?.description,
  };
};

export default async function DocPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const Doc = (await import(`@/docs/${name}/doc.mdx`)).default;

  return (
    <article className="container prose dark:prose-invert py-12 w-full">
      <RegistryItemHeader itemName={name} />
      <Doc />
    </article>
  );
}
