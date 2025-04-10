"use client";

import { usePathname } from "next/navigation";
import { useCallback } from "react";

/**
 * 現在のパスが指定されたパスと一致するかどうかを判定する
 */
export function useIsActivePath() {
  const pathname = usePathname();

  /**
   * 現在のパスが指定されたパスと一致するかどうかを判定する
   *
   * @param comparePath 比較するパス
   * @param options.exact 完全一致かどうか
   */
  const isActivePath = useCallback(
    (
      comparePath: string,
      options?: {
        exact?: boolean;
      },
    ) => {
      const isRoot = comparePath === "/";
      const normalizedCompare = comparePath.replace(/\/+$/, "");

      if (isRoot || options?.exact) {
        return pathname === normalizedCompare;
      }

      return pathname.startsWith(normalizedCompare);
    },
    [pathname],
  );

  return isActivePath;
}
