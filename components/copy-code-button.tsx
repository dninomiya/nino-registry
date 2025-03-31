"use client";

import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

export function CopyCodeButton() {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <Button
      variant="outline"
      size="icon"
      className="size-7"
      onClick={(e) => {
        const container = e.currentTarget.closest("[data-code-container]");
        const pre = container?.querySelector("pre");

        if (!pre) return;

        navigator.clipboard.writeText(pre.textContent ?? "");
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
      }}
    >
      {isCopied ? (
        <CheckIcon className="w-4 h-4" />
      ) : (
        <CopyIcon className="w-4 h-4" />
      )}
    </Button>
  );
}
