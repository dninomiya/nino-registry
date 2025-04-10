"use client";

import { useIsActivePath } from "@/registry/new-york/use-is-active-path/use-is-active-path";

export function Demo() {
  const isActivePath = useIsActivePath();

  return (
    <div className="*:flex *:gap-2">
      <p>
        <code>/use-is-active-path</code>:
        <span>{isActivePath("/use-is-active-path") ? "true" : "false"}</span>
      </p>
      <p>
        <code>/use-is-active-path/demo</code>:
        <span>
          {isActivePath("/use-is-active-path/demo") ? "true" : "false"}
        </span>
      </p>
      <p>
        <code>/dashboard</code>:
        <span>{isActivePath("/dashboard") ? "true" : "false"}</span>
      </p>
    </div>
  );
}
