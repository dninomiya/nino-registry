import { DocSchema } from "./lib/types";

export const basicDoc: DocSchema = [
  {
    title: "はじめに",
    items: [
      {
        title: "nino/registry とは",
        id: "getting-started",
        description:
          "nino/registry は、Next.js と shadcn/ui をベースにしたコンポーネントとユーティリティのセットです。",
      },
      {
        title: "推奨パッケージ",
        id: "recommended-packages",
        description: "用途ごとにオススメのパッケージをまとめています。",
      },
    ],
  },
];
