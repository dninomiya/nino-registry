"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBaseURL } from "@/lib/get-base-url";
import { Info } from "lucide-react";
import { useEffect, useState } from "react";

export default function Demo() {
  const [useCommitURL, setUseCommitURL] = useState(false);
  const [baseURL, setBaseURL] = useState<string>("");

  useEffect(() => {
    setBaseURL(getBaseURL({ useCommitURL }));
  }, [useCommitURL]);

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>ベースURL取得デモ</CardTitle>
          <CardDescription>
            現在の環境に応じたベースURLを表示します
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Info className="size-4" />
            <AlertDescription>
              現在のベースURL:
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">
                {baseURL}
              </code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
