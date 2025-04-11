import { getRegistry } from "./registry";
import { RegistryItem } from "./types";

const filterItems = (items: RegistryItem[], type: string) => {
  return items
    .filter((item) => item.type === type)
    .map((item) => ({
      title: item.title,
      url: `/${item.name}`,
    }));
};

const basicItems = [
  {
    title: "はじめに",
    items: [{ title: "nino/ui とは", url: "/getting-started" }],
  },
];

export const getDocSchema = async () => {
  const { items } = await getRegistry();
  const componentItems = filterItems(items, "registry:component");
  const hookItems = filterItems(items, "registry:hook");
  const libItems = filterItems(items, "registry:lib");

  return [
    ...basicItems,
    {
      title: "コンポーネント",
      items: componentItems,
    },
    {
      title: "フック",
      items: hookItems,
    },
    {
      title: "ユーティリティ",
      items: libItems,
    },
  ];
};
