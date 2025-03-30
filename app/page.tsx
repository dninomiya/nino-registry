import { getRegistry } from "@/lib/registry";

export default async function Home() {
  const registry = await getRegistry()

  return (
    <div>
      <h1>Registry</h1>
      {registry.items.map((item) => (
        <div key={item.name}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
