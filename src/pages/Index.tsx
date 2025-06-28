
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { TopHeader } from "@/components/layout/TopHeader";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { InventoryManagement } from "@/components/inventory/InventoryManagement";
import { InboundReceiving } from "@/components/inbound/InboundReceiving";
import { OutboundFulfillment } from "@/components/outbound/OutboundFulfillment";
import { WarehouseConfig } from "@/components/warehouse/WarehouseConfig";
import { UserManagement } from "@/components/users/UserManagement";
import { ReportsAlerts } from "@/components/reports/ReportsAlerts";

const Index = () => {
  const [activeModule, setActiveModule] = useState("dashboard");
  const [currentUser] = useState({
    name: "John Smith",
    role: "Admin",
    warehouse: "Main Warehouse"
  });

  const renderActiveModule = () => {
    switch (activeModule) {
      case "dashboard":
        return <Dashboard />;
      case "inventory":
        return <InventoryManagement />;
      case "inbound":
        return <InboundReceiving />;
      case "outbound":
        return <OutboundFulfillment />;
      case "warehouse":
        return <WarehouseConfig />;
      case "users":
        return <UserManagement />;
      case "reports":
        return <ReportsAlerts />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-gray-50">
        <AppSidebar 
          activeModule={activeModule}
          onModuleChange={setActiveModule}
        />
        <div className="flex-1 flex flex-col">
          <TopHeader user={currentUser} />
          <main className="flex-1 p-6">
            {renderActiveModule()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
