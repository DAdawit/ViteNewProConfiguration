import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import Content from "../InternalComponents/Content";
import Navbar from "@/InternalComponents/common/Navbar";
import { useEffect } from "react";
import useUserStore from "@/Store/useUserStore";
import AppSidebar from "@/InternalComponents/AppSidebar";

const Home = () => {
  const fetchUser = useUserStore((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="[--header-height:calc(--spacing(16))]">
      <SidebarProvider
        className="flex flex-col h-full"
        style={{
          "--sidebar-width": "288px",
          "--sidebar-collapsed-width": "64px",
        }}
      >
        <div className="w-full bg-right-sidebar">
          <div className="flex flex-1  gap-5">
            <AppSidebar />
            <SidebarInset className="w-full flex flex-col min-h-0 flex-1 overflow-hidden bg-neutral-50">
              <Navbar />
              <Content />
            </SidebarInset>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Home;
