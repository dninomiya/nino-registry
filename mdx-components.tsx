import type { MDXComponents } from "mdx/types";
import { DemoCanvas, DemoPreview, DemoCode } from "./components/demo-canvas";
import { RegistryItemHeader } from "./components/registry-item-header";
import { CopyCodeButton } from "./components/copy-code-button";
import { ArrowUpRight, ExternalLinkIcon } from "lucide-react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    DemoCanvas,
    DemoPreview,
    DemoCode,
    RegistryItemHeader,
    h2: ({ children, ...props }) => {
      return (
        <h2
          className="font-heading mt-16 scroll-m-20 border-b pb-4 text-xl font-semibold tracking-tight first:mt-0"
          {...props}
        >
          {children}
        </h2>
      );
    },
    a: ({ children, ...props }) => {
      const isExternal = props.href?.startsWith("http");

      return (
        <a {...props} target={isExternal ? "_blank" : undefined}>
          {children}
          {isExternal && (
            <ArrowUpRight className="ml-1 inline text-muted-foreground size-3.5 align-baseline" />
          )}
        </a>
      );
    },
    pre: ({ children, ...props }) => {
      return (
        <div className="relative" data-code-container="true">
          <pre style={props.style} className={props.className}>
            {children}
          </pre>
          <div className="absolute top-2.5 right-2.5">
            <CopyCodeButton />
          </div>
        </div>
      );
    },
  };
}
