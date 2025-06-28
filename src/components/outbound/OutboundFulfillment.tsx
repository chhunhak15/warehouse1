
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Send, Plus, Package, Truck, CheckCircle, Clock } from "lucide-react";

const salesOrders = [
  {
    orderNumber: "SO-2024-001",
    customer: "ABC Electronics",
    orderDate: "2024-01-12",
    items: 3,
    totalValue: "$1,250.00",
    status: "Ready to Pick",
    priority: "High"
  },
  {
    orderNumber: "SO-2024-002",
    customer: "Tech Solutions Ltd",
    orderDate: "2024-01-11",
    items: 7,
    totalValue: "$3,450.00",
    status: "Picking",
    priority: "Medium"
  },
  {
    orderNumber: "SO-2024-003",
    customer: "Digital Corp",
    orderDate: "2024-01-10",
    items: 2,
    totalValue: "$890.00",
    status: "Packed",
    priority: "Low"
  },
  {
    orderNumber: "SO-2024-004",
    customer: "Innovation Inc",
    orderDate: "2024-01-09",
    items: 5,
    totalValue: "$2,100.00",
    status: "Shipped",
    priority: "Medium"
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Shipped":
      return <CheckCircle className="h-4 w-4 text-green-600" />;
    case "Packed":
      return <Package className="h-4 w-4 text-blue-600" />;
    case "Picking":
      return <Clock className="h-4 w-4 text-orange-600" />;
    case "Ready to Pick":
      return <Clock className="h-4 w-4 text-purple-600" />;
    default:
      return <Clock className="h-4 w-4 text-gray-600" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Shipped":
      return "bg-green-100 text-green-800";
    case "Packed":
      return "bg-blue-100 text-blue-800";
    case "Picking":
      return "bg-orange-100 text-orange-800";
    case "Ready to Pick":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-800";
    case "Medium":
      return "bg-yellow-100 text-yellow-800";
    case "Low":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function OutboundFulfillment() {
  const [activeTab, setActiveTab] = useState("sales-orders");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Outbound & Fulfillment</h1>
          <p className="text-gray-600">Manage sales orders and shipping processes</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Create Sales Order
        </Button>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("sales-orders")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "sales-orders"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Sales Orders
          </button>
          <button
            onClick={() => setActiveTab("picking")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "picking"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Picking Queue
          </button>
          <button
            onClick={() => setActiveTab("packing")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "packing"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Packing & Dispatch
          </button>
        </nav>
      </div>

      {/* Sales Orders Tab */}
      {activeTab === "sales-orders" && (
        <Card>
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Sales Orders</h3>
              <div className="flex items-center space-x-2">
                <Send className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">{salesOrders.length} orders</span>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order Number</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Order Date</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total Value</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {salesOrders.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{order.orderNumber}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.orderDate}</TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell className="font-medium">{order.totalValue}</TableCell>
                    <TableCell>
                      <Badge className={getPriorityColor(order.priority)}>
                        {order.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${getStatusColor(order.status)} flex items-center space-x-1`}>
                        {getStatusIcon(order.status)}
                        <span>{order.status}</span>
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">View</Button>
                        <Button variant="ghost" size="sm">Pick</Button>
                        <Button variant="ghost" size="sm">Track</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      )}

      {/* Picking Queue Tab */}
      {activeTab === "picking" && (
        <Card className="p-6">
          <div className="text-center py-12">
            <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Picking Queue</h3>
            <p className="text-gray-600 mb-6">Process picking lists and collect items for orders</p>
            <Button className="bg-orange-600 hover:bg-orange-700">
              Start Picking Process
            </Button>
          </div>
        </Card>
      )}

      {/* Packing & Dispatch Tab */}
      {activeTab === "packing" && (
        <Card className="p-6">
          <div className="text-center py-12">
            <Truck className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Packing & Dispatch</h3>
            <p className="text-gray-600 mb-6">Pack orders and prepare for shipment</p>
            <Button className="bg-green-600 hover:bg-green-700">
              Start Packing Process
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
