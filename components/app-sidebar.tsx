"use client";

import * as React from "react";

import { SearchForm } from "@/components/search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Registry } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarLogo } from "./sidebar-logo/sidebar-logo";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function AppSidebar({
  registry,
  ...props
}: React.ComponentProps<typeof Sidebar> & { registry: Registry }) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const data = {
    navMain: [
      {
        title: "はじめに",
        url: "#",
        items: [
          {
            title: "nino/ui とは",
            url: "/getting-started",
          },
        ],
      },
      {
        title: "コンポーネント",
        url: "#",
        items: registry.items
          .filter((item) => item.type === "registry:component")
          .map((item) => ({
            title: item.title,
            url: `/${item.name}`,
          })),
      },
      {
        title: "カスタムフック",
        url: "#",
        items: registry.items
          .filter((item) => item.type === "registry:hook")
          .map((item) => ({
            title: item.title,
            url: `/${item.name}`,
          })),
      },
      {
        title: "ユーティリティ",
        url: "#",
        items: registry.items
          .filter((item) => item.type === "registry:lib")
          .map((item) => ({
            title: item.title,
            url: `/${item.name}`,
          })),
      },
    ],
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarLogo />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="size-8"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">テーマを切り替え</span>
            </Button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
