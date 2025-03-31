import { Button } from "@/components/ui/button";
import { getRegistry } from "@/lib/registry";
import { ActiveLink } from "@/registry/new-york/active-link/active-link";

export default async function Home() {
  const registry = await getRegistry();

  return (
    <div>
      <h1>Registry</h1>
      {registry.items.map((item) => (
        <div key={item.name}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <Button asChild variant="outline">
            <ActiveLink href="/" className="aria-[current=page]:text-red-500">
              Home
            </ActiveLink>
          </Button>
        </div>
      ))}
    </div>
  );
}
