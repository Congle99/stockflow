import {
  BarChart3,
  Box,
  ClipboardList,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Products",
    path: "/products",
    icon: Package,
  },
  {
    label: "Categories",
    path: "/categories",
    icon: Box,
  },
  {
    label: "Inventory",
    path: "/inventory",
    icon: ClipboardList,
  },
  {
    label: "Orders",
    path: "/orders",
    icon: ShoppingCart,
  },
  {
    label: "Customers",
    path: "/customers",
    icon: Users,
  },
  {
    label: "Reports",
    path: "/reports",
    icon: BarChart3,
  },
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-gray-200 bg-white">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-gray-200 px-6">
        <div>
          <h1 className="text-lg font-bold text-gray-900">
            StockFlow
          </h1>

          <p className="text-xs text-gray-500">
            Inventory Platform
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                flex w-full items-center gap-3
                rounded-lg px-3 py-2.5
                text-sm font-medium
                transition-colors
                ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }
                `
              }
            >
              <Icon size={18} />

              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Settings */}
      <div className="border-t border-gray-200 p-4">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `
            flex w-full items-center gap-3
            rounded-lg px-3 py-2.5
            text-sm font-medium
            transition-colors
            ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }
            `
          }
        >
          <Settings size={18} />

          <span>Settings</span>
        </NavLink>
      </div>
    </aside>
  );
}