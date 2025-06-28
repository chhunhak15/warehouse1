
import { Card } from "@/components/ui/card";
import { Package, Truck, Send, AlertTriangle, TrendingUp, Users } from "lucide-react";

const stats = [
  {
    title: "Total Inventory",
    value: "12,847",
    change: "+2.5%",
    icon: Package,
    color: "text-blue-600 bg-blue-100"
  },
  {
    title: "Pending Inbound",
    value: "234",
    change: "+12%",
    icon: Truck,
    color: "text-green-600 bg-green-100"
  },
  {
    title: "Orders to Ship",
    value: "89",
    change: "-5%",
    icon: Send,
    color: "text-orange-600 bg-orange-100"
  },
  {
    title: "Low Stock Alerts",
    value: "23",
    change: "+8%",
    icon: AlertTriangle,
    color: "text-red-600 bg-red-100"
  }
];

const recentActivity = [
  { action: "Stock received", item: "SKU-001234", quantity: "500 units", time: "2 min ago" },
  { action: "Order shipped", item: "Order #12345", quantity: "25 items", time: "15 min ago" },
  { action: "Low stock alert", item: "SKU-005678", quantity: "12 units left", time: "1 hour ago" },
  { action: "New purchase order", item: "PO-2024-001", quantity: "1,000 units", time: "2 hours ago" },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Overview of your warehouse operations</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last week
                </p>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <TrendingUp className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.item} • {activity.quantity}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            <Users className="h-5 w-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 text-left bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <Package className="h-6 w-6 text-blue-600 mb-2" />
              <p className="font-medium text-gray-900">Add New Product</p>
              <p className="text-sm text-gray-600">Create SKU & stock</p>
            </button>
            <button className="p-4 text-left bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Truck className="h-6 w-6 text-green-600 mb-2" />
              <p className="font-medium text-gray-900">Receive Stock</p>
              <p className="text-sm text-gray-600">Process inbound</p>
            </button>
            <button className="p-4 text-left bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              <Send className="h-6 w-6 text-orange-600 mb-2" />
              <p className="font-medium text-gray-900">Create Order</p>
              <p className="text-sm text-gray-600">New sales order</p>
            </button>
            <button className="p-4 text-left bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <AlertTriangle className="h-6 w-6 text-purple-600 mb-2" />
              <p className="font-medium text-gray-900">View Alerts</p>
              <p className="text-sm text-gray-600">Check notifications</p>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
