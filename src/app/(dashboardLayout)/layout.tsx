import { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/shared/AppSidebar";

export const metadata: Metadata = {
  title: "Check Mate",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="max-w-7xl px-5 mx-auto bg-gradient-to-t from-[#EEEFDA] to-[#D2DBDD] w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default CommonLayout;
