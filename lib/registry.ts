import 'server-only'

export const getRegistry = async () => {
  const registryData = await import("@/registry.json")
  const registry = registryData.default
  return registry
}