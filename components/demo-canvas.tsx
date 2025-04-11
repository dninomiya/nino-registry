import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DemoCanvas({
  children,
}: {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <Tabs defaultValue="preview">
      <TabsList className="not-prose">
        <TabsTrigger value="preview">プレビュー</TabsTrigger>
        <TabsTrigger value="code">コード</TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
}

export function DemoPreview({
  children,
  center,
  className,
}: {
  children: React.ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <TabsContent value="preview">
      <div
        className={cn(
          "p-4 border rounded-md not-prose",
          center && "flex items-center justify-center",
          className,
        )}
      >
        {children}
      </div>
    </TabsContent>
  );
}

export function DemoCode({ children }: { children: React.ReactNode }) {
  return (
    <TabsContent value="code" className="[&_pre]:my-0">
      {children}
    </TabsContent>
  );
}
