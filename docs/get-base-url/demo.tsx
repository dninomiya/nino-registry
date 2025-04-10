"use client";

import { getBaseURL } from "@/registry/new-york/get-base-url/get-base-url";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

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
          <div className="flex items-center space-x-2">
            <Switch
              id="use-commit-url"
              checked={useCommitURL}
              onCheckedChange={setUseCommitURL}
            />
            <Label htmlFor="use-commit-url">コミットURLを使用</Label>
          </div>

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
