import { getRegistry } from "./registry";

export type Registry = Awaited<ReturnType<typeof getRegistry>>;

export type RegistryItem = Registry["items"][number];

export type DocItem = {
  id: string;
  title: string;
  description: string;
  categories?: string[];
  meta?: {
    docs: {
      title: string;
      url: string;
    }[];
  };
};

export type DocSchema = {
  title: string;
  items: DocItem[];
}[];
