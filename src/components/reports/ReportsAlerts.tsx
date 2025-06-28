
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, AlertTriangle, FileText, Download } from "lucide-react";

const alerts = [
  {
    id: "ALT-001",
    type: "Low Stock",
    message: "SKU-005678 (Wireless Mouse) - Only 12 units remaining",
    severity: "High",
    timestamp: "2024-01-12 14:30"
  },
  {
    id: "ALT-002",
    type: "Expiry Warning",
    message: "Batch B2024001 expires in 5 days - 145 units affected",
    severity: "Medium",
    timestamp: "2024-01-12 12:15"
  },
  {
    id: "ALT-003",
    type: "System",
    message: "Barcode scanner WS-001 needs maintenance",
    severity: "Low",
    timestamp: "2024-01-12 09:45"
  }
];

const reports = [
  {
    name: "Inventory Summary",
    description: "Current stock levels and values",
    lastGenerated: "2024-01-12",
    frequency: "Daily"
  },
  {
    name: "Low Stock Report",
    description: "Items below minimum thresholds",
    lastGenerated: "2024-01-12",
    frequency: "Daily"
  },
  {
    name: "Aging Analysis",
    description: "Inventory turnover and aging",
    lastGenerated: "2024-01-11",
    frequency: "Weekly"
  },
  {
    name: "Transaction Summary",
    description: "Daily in/out movements",
    lastGenerated: "2024-01-12",
    frequency: "Daily"
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "High":
      return "bg-red-100 text-red-800";
    case "Medium":
      return "bg-orange-100 text-orange-800";
    case "Low":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function ReportsAlerts() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Alerts</h1>
          <p className="text-gray-600">Monitor performance and manage notifications</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <FileText className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "dashboard"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Analytics Dashboard
          </button>
          <button
            onClick={() => setActiveTab("reports")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "reports"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Reports
          </button>
          <button
            onClick={() => setActiveTab("alerts")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "alerts"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Alerts
          </button>
        </nav>
      </div>

      {/* Analytics Dashboard Tab */}
      {activeTab === "dashboard" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Inventory Turnover</p>
                  <p className="text-2xl font-bold text-gray-900">4.2x</p>
                  <p className="text-sm text-green-600">+12% vs last month</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Order Fill Rate</p>
                  <p className="text-2xl font-bold text-gray-900">98.5%</p>
                  <p className="text-sm text-green-600">+2.1% vs last month</p>
                </div>
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Average Pick Time</p>
                  <p className="text-2xl font-bold text-gray-900">3.2 min</p>
                  <p className="text-sm text-red-600">+0.3 min vs last month</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Storage Utilization</p>
                  <p className="text-2xl font-bold text-gray-900">73%</p>
                  <p className="text-sm text-green-600">+5% vs last month</p>
                </div>
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trends</h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Interactive charts would be displayed here</p>
                <p className="text-sm text-gray-500">Integration with charting library needed</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Reports Tab */}
      {activeTab === "reports" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((report, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{report.name}</h3>
                  <p className="text-sm text-gray-600">{report.description}</p>
                </div>
                <FileText className="h-6 w-6 text-gray-400" />
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Last Generated:</span>
                  <span className="text-gray-900">{report.lastGenerated}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Frequency:</span>
                  <span className="text-gray-900">{report.frequency}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
                <Button size="sm" className="flex-1">
                  Generate
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Alerts Tab */}
      {activeTab === "alerts" && (
        <Card>
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Active Alerts</h3>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">{alerts.length} alerts</span>
              </div>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {alerts.map((alert, index) => (
              <div key={index} className="p-6 flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge className={getSeverityColor(alert.severity)}>
                      {alert.severity}
                    </Badge>
                    <span className="text-sm font-medium text-gray-900">{alert.type}</span>
                  </div>
                  <p className="text-gray-700 mb-1">{alert.message}</p>
                  <p className="text-sm text-gray-500">{alert.timestamp}</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">Dismiss</Button>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
