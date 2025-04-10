import { CommandCopyButton } from "@/components/command-copy-button";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { Separator } from "@/components/ui/separator";
import { getRegistryItem } from "@/lib/registry";

export async function RegistryItemHeader({ itemName }: { itemName: string }) {
  const item = await getRegistryItem(itemName);

  if (!item) {
    return null;
  }

  return (
    <header className="not-prose mb-4">
      <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
      <p className="text-muted-foreground mb-4">{item.description}</p>

      <div className="flex justify-end items-center gap-2">
        <CommandCopyButton
          command={`pnpx shadcn@latest add https://ui.dninomiya.com/r/${item.name}.json`}
        />
        <Separator orientation="vertical" className="!h-4" />
        <OpenInV0Button id={item.name} />
      </div>
    </header>
  );
}
