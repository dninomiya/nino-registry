import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { getRegistry } from "./registry"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateRegistryItemMetadata = async (name: string) => {
  const registry = await getRegistry();
  const item = registry.items.find((item) => item.name === name);

  if (!item) {
    return null;
  }

  return {
    title: item.title,
  };
};
