import { allDocItems } from "@/lib/doc";
import { redirect } from "next/navigation";

export default async function Home() {
  const items = await allDocItems();
  const firstItem = items[0];

  redirect(`/${firstItem.id}`);

  return null;
}
