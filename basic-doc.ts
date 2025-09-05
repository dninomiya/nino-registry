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
        title: "MCP",
        id: "mcp",
        description:
          "MCP と nino/registry を連携させることでAI経由で操作できます。",
      },
      {
        title: "マーケティング",
        id: "marketing",
        description:
          "マーケティング向けのコンポーネントとフックをまとめています。",
      },
    ],
  },
];
