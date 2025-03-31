export const getRegistry = async () => {
  const registryData = await import("@/registry.json")
  const registry = registryData.default
  return registry
}

export const getRegistryItem = async (name: string) => {
  const registry = await getRegistry();
  return registry.items.find((item) => item.name === name);
};
