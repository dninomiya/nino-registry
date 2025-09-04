import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Logo } from "@/components/sidebar-logo/logo";
import { getDocSchema } from "@/lib/doc";

const docSchema = await getDocSchema();

export default function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar className="h-full" docSchema={docSchema} />
      <SidebarInset>
        <div className="md:hidden flex items-center gap-2 px-4 py-2">
          <SidebarTrigger />
          <Logo />
        </div>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
