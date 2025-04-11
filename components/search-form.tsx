"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";
import { DocSchema } from "@/lib/types";
import { useRouter } from "next/navigation";

export function SearchForm({ docSchema }: { docSchema: DocSchema }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <SidebarGroup className="py-0">
      <SidebarGroupContent className="relative">
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-md border w-full px-3 py-1.5 text-sm hover:bg-accent"
        >
          <Search className="size-4" />
          <span>検索</span>
          <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="ドキュメントを検索..." />
          <CommandList>
            <CommandEmpty>検索結果が見つかりませんでした。</CommandEmpty>
            {docSchema.map((section) => (
              <CommandGroup key={section.title} heading={section.title}>
                {section.items.map((item) => (
                  <CommandItem
                    onSelect={() => {
                      router.push(item.url);
                      setOpen(false);
                    }}
                    key={item.url}
                  >
                    {item.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </CommandDialog>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
