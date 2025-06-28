
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { 
  Warehouse, 
  Package, 
  TruckIcon as Truck, 
  Send, 
  Settings, 
  Users, 
  BarChart3,
  Home
} from "lucide-react";

interface AppSidebarProps {
  activeModule: string;
  onModuleChange: (module: string) => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "inventory", label: "Inventory", icon: Package },
  { id: "inbound", label: "Inbound & Receiving", icon: Truck },
  { id: "outbound", label: "Outbound & Fulfillment", icon: Send },
  { id: "warehouse", label: "Warehouse Config", icon: Warehouse },
  { id: "users", label: "User Management", icon: Users },
  { id: "reports", label: "Reports & Alerts", icon: BarChart3 },
];

export function AppSidebar({ activeModule, onModuleChange }: AppSidebarProps) {
  return (
    <Sidebar className="w-64 border-r border-gray-200">
      <SidebarHeader className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Warehouse className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">WMS Pro</h1>
            <p className="text-sm text-gray-500">Enterprise</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onModuleChange(item.id)}
                    className={`w-full justify-start ${
                      activeModule === item.id
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <Settings className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-600">Settings</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
