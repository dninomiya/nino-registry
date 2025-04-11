"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigationGuard } from "@/hooks/use-navigation-guard";
import { cn } from "@/lib/utils";
import { Shield } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Demo() {
  const [isDirty, setIsDirty] = useState(false);

  useNavigationGuard(isDirty);

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
          <Alert
            className={cn(
              isDirty
                ? "border-sky-500 text-sky-500 duration-500"
                : "text-muted-foreground",
              "transition",
            )}
          >
            <Shield className="size-4" />
            <AlertDescription className="text-current transition-colors duration-500">
              ガードの状態: {isDirty ? "有効" : "無効"}
            </AlertDescription>
          </Alert>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/">ホームに戻る</Link>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.reload()}
            >
              ブラウザリロード
            </Button>
          </div>

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
