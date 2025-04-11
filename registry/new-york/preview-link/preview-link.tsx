import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { unfurl } from "unfurl.js";

export async function PreviewLink({ url }: { url: string }) {
  try {
    const metadata = await unfurl(url);
    const imageURL =
      metadata.open_graph.images?.[0].url ||
      metadata.twitter_card?.images?.[0].url;
    const title = metadata.open_graph.title || metadata.title;

    if (!title) {
      return <PlainLink url={url} />;
    }

    return (
      <RichLink
        url={url}
        imageURL={imageURL}
        title={title}
        description={metadata.open_graph.description}
      />
    );
  } catch (_) {
    return <PlainLink url={url} />;
  }
}

function PlainLink({ url }: { url: string }) {
  return (
    <a href={url} className="text-muted-foreground text-sm" target="_blank">
      {url}
      <ArrowUpRight className="inline ml-0.5" size={14} />
    </a>
  );
}

function RichLink({
  url,
  imageURL,
  title,
  description,
}: {
  url: string;
  imageURL: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex rounded-lg bg-card border items-center gap-3 w-full p-5 relative">
      {imageURL && (
        <div>
          <div className="aspect-square border relative w-20 shrink-0 rounded-md overflow-hidden">
            <Image
              src={imageURL}
              unoptimized
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
      <div className="flex-1 overflow-hidden">
        <h1 className="font-bold mb-2 truncate leading-none">
          <a href={url} target="_blank">
            {title}
            <span className="absolute inset-0" />
          </a>
        </h1>
        {description && (
          <p className="text-muted-foreground text-sm truncate">
            {description}
          </p>
        )}
        <p className="text-sm text-muted-foreground/60 mt-2 leading-none truncate">
          {url}
        </p>
      </div>
    </div>
  );
}
