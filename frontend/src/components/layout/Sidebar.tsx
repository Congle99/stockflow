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

const navigation = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Products",
    icon: Package,
  },
  {
    label: "Categories",
    icon: Box,
  },
  {
    label: "Inventory",
    icon: ClipboardList,
  },
  {
    label: "Orders",
    icon: ShoppingCart,
  },
  {
    label: "Customers",
    icon: Users,
  },
  {
    label: "Reports",
    icon: BarChart3,
  },
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white">
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

      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="
                flex w-full items-center gap-3
                rounded-lg px-3 py-2.5
                text-sm font-medium
                text-gray-600
                hover:bg-gray-100
                hover:text-gray-900
              "
            >
              <Icon size={18} />

              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="border-t border-gray-200 p-4">
        <button
          className="
            flex w-full items-center gap-3
            rounded-lg px-3 py-2.5
            text-sm font-medium
            text-gray-600
            hover:bg-gray-100
          "
        >
          <Settings size={18} />

          Settings
        </button>
      </div>
    </aside>
  );
}