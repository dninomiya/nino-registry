import { basicDoc } from "@/basic-doc";
import { getRegistry } from "./registry";
import { DocItem, DocSchema, RegistryItem } from "./types";

const transformRegistryItemToDocItem = (item: RegistryItem): DocItem => {
  return {
    id: item.name,
    title: item.title,
    description: item.description,
    meta: item.meta,
  };
};

const filterRegistryItems = (items: RegistryItem[]) => {
  const componentItems = items.filter(
    (item) => item.type === "registry:component",
  );
  const hookItems = items.filter((item) => item.type === "registry:hook");
  const libItems = items.filter((item) => item.type === "registry:lib");

  return {
    componentItems,
    hookItems,
    libItems,
  };
};

export const getDocSchema = async () => {
  const { items } = await getRegistry();
  const { componentItems, hookItems, libItems } = filterRegistryItems(items);

  const schema: DocSchema = [
    ...basicDoc,
    {
      title: "コンポーネント",
      items: componentItems.map(transformRegistryItemToDocItem),
    },
    {
      title: "フック",
      items: hookItems.map(transformRegistryItemToDocItem),
    },
    {
      title: "ユーティリティ",
      items: libItems.map(transformRegistryItemToDocItem),
    },
  ];

  return schema;
};

export const allDocItems = async () => {
  const schema = await getDocSchema();
  return schema.flatMap((section) => section.items);
};

export const getDoc = async (id: string) => {
  const allItems = await allDocItems();
  return allItems.find((item) => item.id === id);
};
