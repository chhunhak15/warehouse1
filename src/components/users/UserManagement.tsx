
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Plus, User, Shield, Clock } from "lucide-react";

const users = [
  {
    id: "USR-001",
    name: "John Smith",
    email: "john.smith@company.com",
    role: "Admin",
    warehouse: "Main Warehouse",
    lastLogin: "2024-01-12 09:30",
    status: "Active"
  },
  {
    id: "USR-002",
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com", 
    role: "Manager",
    warehouse: "West Coast Distribution",
    lastLogin: "2024-01-12 14:15",
    status: "Active"
  },
  {
    id: "USR-003",
    name: "Mike Davis",
    email: "mike.davis@company.com",
    role: "Operator",
    warehouse: "Main Warehouse",
    lastLogin: "2024-01-11 16:45",
    status: "Active"
  },
  {
    id: "USR-004",
    name: "Lisa Chen",
    email: "lisa.chen@company.com",
    role: "Operator",
    warehouse: "East Coast Hub",
    lastLogin: "2024-01-10 08:20",
    status: "Inactive"
  }
];

const roles = [
  {
    name: "Admin",
    permissions: ["Full Access", "User Management", "System Config"],
    users: 1,
    color: "bg-red-100 text-red-800"
  },
  {
    name: "Manager", 
    permissions: ["Inventory Management", "Order Processing", "Reports"],
    users: 1,
    color: "bg-blue-100 text-blue-800"
  },
  {
    name: "Operator",
    permissions: ["Basic Operations", "Scanning", "Stock Movement"],
    users: 2,
    color: "bg-green-100 text-green-800"
  }
];

const getRoleColor = (role: string) => {
  switch (role) {
    case "Admin":
      return "bg-red-100 text-red-800";
    case "Manager":
      return "bg-blue-100 text-blue-800";
    case "Operator":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-800";
    case "Inactive":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function UserManagement() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600">Manage users, roles, and permissions</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("users")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "users"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Users
          </button>
          <button
            onClick={() => setActiveTab("roles")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "roles"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Roles & Permissions
          </button>
          <button
            onClick={() => setActiveTab("activity")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "activity"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            ````}
          >
            Activity Logs
          </button>
        </nav>
      </div>

      {/* Users Tab */}
      {activeTab === "users" && (
        <Card>
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">User Accounts</h3>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">{users.length} users</span>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Warehouse</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{user.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-blue-600" />
                        </div>
                        <span>{user.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge className={getRoleColor(user.role)}>
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.warehouse}</TableCell>
                    <TableCell className="text-sm text-gray-600">{user.lastLogin}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(user.status)}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm">Reset</Button>
                        <Button variant="ghost" size="sm">Disable</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      )}

      {/* Roles Tab */}
      {activeTab === "roles" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-gray-400" />
                  <h3 className="text-lg font-semibold text-gray-900">{role.name}</h3>
                </div>
                <Badge className={role.color}>
                  {role.users} user{role.users !== 1 ? 's' : ''}
                </Badge>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600 font-medium">Permissions:</p>
                {role.permissions.map((permission, permIndex) => (
                  <div key={permIndex} className="flex items-center space-x-2">
                    <div className="h-1.5 w-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{permission}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Manage Permissions
              </Button>
            </Card>
          ))}
        </div>
      )}

      {/* Activity Logs Tab */}
      {activeTab === "activity" && (
        <Card className="p-6">
          <div className="text-center py-12">
            <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Activity Logs</h3>
            <p className="text-gray-600 mb-6">View user activity and system access logs</p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              View Activity Logs
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
