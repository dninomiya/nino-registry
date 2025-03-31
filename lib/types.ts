import { getRegistry } from "./registry";

export type Registry = Awaited<ReturnType<typeof getRegistry>>;