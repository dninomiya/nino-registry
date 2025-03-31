"use client";

import { Button } from "@/components/ui/button";
import { Check, Terminal } from "lucide-react";
import { useState } from "react";

export function CommandCopyButton({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    setCopied(true);
    navigator.clipboard.writeText(command);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex flex-1 h-7 items-center gap-1 rounded-md border p-[2px]">
      <Button
        variant="ghost"
        className="items-center justify-start whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground text-xs hidden h-[22px] w-full flex-1 gap-1 rounded-sm px-2 md:flex lg:w-auto"
        onClick={handleClick}
      >
        {copied ? (
          <Check className="size-4" />
        ) : (
          <Terminal className="size-4" />
        )}
        <span className="hidden lg:inline">{command}</span>
      </Button>
    </div>
  );
}
