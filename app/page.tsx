import { getRegistry } from "@/lib/registry";
import Link from "next/link";

export default async function Home() {
  const registry = await getRegistry();

  return (
    <div className="container mx-auto">
      <h1>Registry</h1>
      {registry.items.map((item) => (
        <div key={item.name}>
          <h2>
            <Link href={`/${item.name}`}>{item.name}</Link>
          </h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
