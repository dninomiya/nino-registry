"use client";

import { useFormGuard } from "@/registry/new-york/use-form-guard/use-form-guard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { useState } from "react";

export default function Demo() {
  const [isDirty, setIsDirty] = useState(false);

  useFormGuard(isDirty);

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>フォームガードデモ</CardTitle>
          <CardDescription>
            フォームを変更してからページを離れようとすると警告が表示されます
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Info className="size-4" />
            <AlertDescription>
              フォームの状態: {isDirty ? "変更あり" : "変更なし"}
            </AlertDescription>
          </Alert>

          <form
            className="space-y-4"
            onChange={() => setIsDirty(true)}
            onSubmit={(e) => {
              e.preventDefault();
              setIsDirty(false);
              alert("フォームが送信されました");
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="name">名前</Label>
              <Input id="name" autoComplete="off" placeholder="名前を入力" />
            </div>

            <div className="flex justify-end">
              <Button type="submit">送信</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
