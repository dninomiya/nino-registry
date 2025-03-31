import type { MDXComponents } from "mdx/types";
import { DemoCanvas } from "./components/demo-canvas";
import { RegistryItemHeader } from "./components/registry-item-header";
import { CopyCodeButton } from "./components/copy-code-button";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    DemoCanvas,
    RegistryItemHeader,
    pre: ({ children, ...props }) => {
      return (
        <div className="relative" data-code-container="true">
          <pre style={props.style} className={props.className}>
            {children}
          </pre>
          <div className="absolute top-2 right-2">
            <CopyCodeButton />
          </div>
        </div>
      );
    },
  };
}
