
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Truck, Plus, CheckCircle, Clock, AlertCircle } from "lucide-react";

const purchaseOrders = [
  {
    poNumber: "PO-2024-001",
    supplier: "Tech Supplies Inc",
    expectedDate: "2024-01-15",
    items: 5,
    totalValue: "$2,450.00",
    status: "Pending"
  },
  {
    poNumber: "PO-2024-002", 
    supplier: "Electronics Corp",
    expectedDate: "2024-01-12",
    items: 12,
    totalValue: "$8,750.00",
    status: "Partially Received"
  },
  {
    poNumber: "PO-2024-003",
    supplier: "Global Components",
    expectedDate: "2024-01-10",
    items: 8,
    totalValue: "$3,200.00",
    status: "Received"
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Received":
      return <CheckCircle className="h-4 w-4 text-green-600" />;
    case "Partially Received":
      return <AlertCircle className="h-4 w-4 text-orange-600" />;
    case "Pending":
      return <Clock className="h-4 w-4 text-blue-600" />;
    default:
      return <Clock className="h-4 w-4 text-gray-600" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Received":
      return "bg-green-100 text-green-800";
    case "Partially Received":
      return "bg-orange-100 text-orange-800";
    case "Pending":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function InboundReceiving() {
  const [activeTab, setActiveTab] = useState("purchase-orders");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inbound & Receiving</h1>
          <p className="text-gray-600">Manage purchase orders and receiving processes</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Create Purchase Order
        </Button>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("purchase-orders")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "purchase-orders"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Purchase Orders
          </button>
          <button
            onClick={() => setActiveTab("receiving")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "receiving"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Receiving Queue
          </button>
          <button
            onClick={() => setActiveTab("barcode")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "barcode"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Barcode Scanner
          </button>
        </nav>
      </div>

      {/* Purchase Orders Tab */}
      {activeTab === "purchase-orders" && (
        <Card>
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Purchase Orders</h3>
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">{purchaseOrders.length} orders</span>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>PO Number</TableHead>
                  <TableHead>Supplier</TableHead>
                  <TableHead>Expected Date</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total Value</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchaseOrders.map((po, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{po.poNumber}</TableCell>
                    <TableCell>{po.supplier}</TableCell>
                    <TableCell>{po.expectedDate}</TableCell>
                    <TableCell>{po.items}</TableCell>
                    <TableCell className="font-medium">{po.totalValue}</TableCell>
                    <TableCell>
                      <Badge className={`${getStatusColor(po.status)} flex items-center space-x-1`}>
                        {getStatusIcon(po.status)}
                        <span>{po.status}</span>
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">View</Button>
                        <Button variant="ghost" size="sm">Receive</Button>
                        <Button variant="ghost" size="sm">Print</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      )}

      {/* Receiving Queue Tab */}
      {activeTab === "receiving" && (
        <Card className="p-6">
          <div className="text-center py-12">
            <Truck className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Receiving Queue</h3>
            <p className="text-gray-600 mb-6">Process incoming shipments and update inventory</p>
            <Button className="bg-green-600 hover:bg-green-700">
              Start Receiving Process
            </Button>
          </div>
        </Card>
      )}

      {/* Barcode Scanner Tab */}
      {activeTab === "barcode" && (
        <Card className="p-6">
          <div className="text-center py-12">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-xl">⎙</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Barcode Scanner</h3>
            <p className="text-gray-600 mb-6">Scan barcodes to receive items and update stock</p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Activate Scanner
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
