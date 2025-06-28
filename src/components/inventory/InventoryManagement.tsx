
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Package, AlertTriangle, CheckCircle, Clock } from "lucide-react";

const inventoryData = [
  {
    sku: "SKU-001234",
    name: "Premium Headphones",
    barcode: "1234567890123",
    quantity: 145,
    location: "WH-A > Zone-1 > Bin-A12",
    batch: "B2024001",
    expiry: "2025-06-15",
    status: "In Stock"
  },
  {
    sku: "SKU-005678",
    name: "Wireless Mouse",
    barcode: "1234567890124",
    quantity: 12,
    location: "WH-A > Zone-2 > Bin-B05",
    batch: "B2024002",
    expiry: "N/A",
    status: "Low Stock"
  },
  {
    sku: "SKU-009012",
    name: "USB Cable",
    barcode: "1234567890125",
    quantity: 0,
    location: "WH-A > Zone-1 > Bin-C08",
    batch: "B2024003",
    expiry: "N/A",
    status: "Out of Stock"
  },
  {
    sku: "SKU-003456",
    name: "Bluetooth Speaker",
    barcode: "1234567890126",
    quantity: 87,
    location: "WH-B > Zone-3 > Bin-D15",
    batch: "B2024004",
    expiry: "2026-03-20",
    status: "In Stock"
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "In Stock":
      return <CheckCircle className="h-4 w-4 text-green-600" />;
    case "Low Stock":
      return <AlertTriangle className="h-4 w-4 text-orange-600" />;
    case "Out of Stock":
      return <AlertTriangle className="h-4 w-4 text-red-600" />;
    default:
      return <Clock className="h-4 w-4 text-gray-600" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "In Stock":
      return "bg-green-100 text-green-800";
    case "Low Stock":
      return "bg-orange-100 text-orange-800";
    case "Out of Stock":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function InventoryManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInventory = inventoryData.filter(item =>
    item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.barcode.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-600">Track products, locations, and stock levels</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by SKU, name, or barcode..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">Filter by Location</Button>
          <Button variant="outline">Filter by Status</Button>
        </div>
      </Card>

      {/* Inventory Table */}
      <Card>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Current Inventory</h3>
            <div className="flex items-center space-x-2">
              <Package className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-600">{filteredInventory.length} items</span>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SKU</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Barcode</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Batch/Lot</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInventory.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.sku}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="font-mono text-sm">{item.barcode}</TableCell>
                  <TableCell>
                    <span className={`font-medium ${
                      item.quantity === 0 ? 'text-red-600' : 
                      item.quantity < 20 ? 'text-orange-600' : 'text-green-600'
                    }`}>
                      {item.quantity}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm">{item.location}</TableCell>
                  <TableCell>{item.batch}</TableCell>
                  <TableCell>{item.expiry}</TableCell>
                  <TableCell>
                    <Badge className={`${getStatusColor(item.status)} flex items-center space-x-1`}>
                      {getStatusIcon(item.status)}
                      <span>{item.status}</span>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm">Move</Button>
                      <Button variant="ghost" size="sm">Audit</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
