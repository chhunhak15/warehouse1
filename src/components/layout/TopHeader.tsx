
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TopHeaderProps {
  user: {
    name: string;
    role: string;
    warehouse: string;
  };
}

export function TopHeader({ user }: TopHeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4 flex-1">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search products, orders, locations..."
            className="pl-10 bg-gray-50"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
        </Button>

        <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
          <div className="flex items-center justify-center h-8 w-8 bg-blue-100 rounded-full">
            <User className="h-4 w-4 text-blue-600" />
          </div>
          <div className="text-sm">
            <div className="font-medium text-gray-900">{user.name}</div>
            <div className="text-gray-500">{user.role} • {user.warehouse}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
