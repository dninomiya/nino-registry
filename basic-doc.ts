import { DocSchema } from "./lib/types";

export const basicDoc: DocSchema = [
  {
    title: "はじめに",
    items: [
      {
        title: "nino/ui とは",
        id: "getting-started",
        description:
          "nino/ui は、Next.js と shadcn/ui をベースにしたコンポーネントとユーティリティのセットです。",
      },
      {
        title: "推奨パッケージ",
        id: "recommended-packages",
        description: "用途ごとにオススメのパッケージをまとめています。",
      },
    ],
  },
];
