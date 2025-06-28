
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Warehouse, Plus, MapPin, Settings, Grid3X3 } from "lucide-react";

const warehouses = [
  {
    id: "WH-A",
    name: "Main Warehouse",
    location: "New York, NY",
    zones: 5,
    bins: 1250,
    capacity: "85%",
    status: "Active"
  },
  {
    id: "WH-B", 
    name: "West Coast Distribution",
    location: "Los Angeles, CA",
    zones: 3,
    bins: 750,
    capacity: "62%",
    status: "Active"
  },
  {
    id: "WH-C",
    name: "East Coast Hub",
    location: "Atlanta, GA",
    zones: 4,
    bins: 980,
    capacity: "71%",
    status: "Active"
  }
];

const zones = [
  {
    zoneId: "Zone-1",
    warehouse: "WH-A",
    name: "Electronics",
    type: "Standard",
    bins: 250,
    temperature: "Ambient",
    status: "Active"
  },
  {
    zoneId: "Zone-2",
    warehouse: "WH-A", 
    name: "Fragile Items",
    type: "Special Handling",
    bins: 150,
    temperature: "Climate Controlled",
    status: "Active"
  },
  {
    zoneId: "Zone-3",
    warehouse: "WH-B",
    name: "Bulk Storage",
    type: "High Density",
    bins: 300,
    temperature: "Ambient",
    status: "Active"
  }
];

export function WarehouseConfig() {
  const [activeTab, setActiveTab] = useState("warehouses");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Warehouse Configuration</h1>
          <p className="text-gray-600">Manage warehouses, zones, and storage locations</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Warehouse
        </Button>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("warehouses")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "warehouses"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Warehouses
          </button>
          <button
            onClick={() => setActiveTab("zones")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "zones"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Zones & Bins
          </button>
          <button
            onClick={() => setActiveTab("layout")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "layout"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Layout Designer
          </button>
        </nav>
      </div>

      {/* Warehouses Tab */}
      {activeTab === "warehouses" && (
        <Card>
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Warehouse Locations</h3>
              <div className="flex items-center space-x-2">
                <Warehouse className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">{warehouses.length} warehouses</span>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Warehouse ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Zones</TableHead>
                  <TableHead>Total Bins</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {warehouses.map((warehouse, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{warehouse.id}</TableCell>
                    <TableCell>{warehouse.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>{warehouse.location}</span>
                      </div>
                    </TableCell>
                    <TableCell>{warehouse.zones}</TableCell>
                    <TableCell>{warehouse.bins}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div className="w-12 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: warehouse.capacity }}
                          ></div>
                        </div>
                        <span className="text-sm">{warehouse.capacity}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">
                        {warehouse.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm">View</Button>
                        <Button variant="ghost" size="sm">Config</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      )}

      {/* Zones & Bins Tab */}
      {activeTab === "zones" && (
        <Card>
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Storage Zones</h3>
              <div className="flex items-center space-x-2">
                <Grid3X3 className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">{zones.length} zones</span>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Zone ID</TableHead>
                  <TableHead>Warehouse</TableHead>
                  <TableHead>Zone Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Total Bins</TableHead>
                  <TableHead>Temperature</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {zones.map((zone, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{zone.zoneId}</TableCell>
                    <TableCell>{zone.warehouse}</TableCell>
                    <TableCell>{zone.name}</TableCell>
                    <TableCell>{zone.type}</TableCell>
                    <TableCell>{zone.bins}</TableCell>
                    <TableCell>{zone.temperature}</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">
                        {zone.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm">Bins</Button>
                        <Button variant="ghost" size="sm">Map</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      )}

      {/* Layout Designer Tab */}
      {activeTab === "layout" && (
        <Card className="p-6">
          <div className="text-center py-12">
            <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Layout Designer</h3>
            <p className="text-gray-600 mb-6">Design and configure warehouse layouts and bin arrangements</p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Open Layout Designer
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
