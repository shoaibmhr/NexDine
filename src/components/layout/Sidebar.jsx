import {
  LayoutDashboard,
  ShoppingCart,
  ClipboardList,
  Armchair,
  CalendarDays,
  ChefHat,
  UtensilsCrossed,
  Grid2x2,
  Users,
  UserCog,
  Truck,
  Boxes,
  ShoppingBag,
  Wallet,
  CreditCard,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "OVERVIEW",
    items: [
      { name: "Dashboard", icon: LayoutDashboard },
      { name: "POS", icon: ShoppingCart },
      { name: "Orders", icon: ClipboardList },
    ],
  },
  {
    title: "OPERATIONS",
    items: [
      { name: "Tables", icon: Armchair },
      { name: "Reservations", icon: CalendarDays },
      { name: "Kitchen", icon: ChefHat },
      { name: "Menu", icon: UtensilsCrossed },
      { name: "Categories", icon: Grid2x2 },
    ],
  },
  {
    title: "PEOPLE",
    items: [
      { name: "Customers", icon: Users },
      { name: "Staff", icon: UserCog },
      { name: "Suppliers", icon: Truck },
    ],
  },
  {
    title: "FINANCE",
    items: [
      { name: "Inventory", icon: Boxes },
      { name: "Purchases", icon: ShoppingBag },
      { name: "Expenses", icon: Wallet },
      { name: "Payments", icon: CreditCard },
      { name: "Reports", icon: BarChart3 },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      { name: "Settings", icon: Settings },
      { name: "Logout", icon: LogOut },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className="w-72 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-gray-200">
        <div className="w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center text-white text-xl font-bold">
          N
        </div>

        <div className="ml-3">
          <h1 className="font-bold text-xl text-gray-800">NexDine</h1>
          <p className="text-xs text-gray-500">Restaurant Management</p>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto py-5">
        {menu.map((section) => (
          <div key={section.title} className="mb-7">
            <p className="px-6 mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">
              {section.title}
            </p>

            {section.items.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all duration-200

                  ${
                    item.name === "Dashboard"
                      ? "bg-orange-500 text-white"
                      : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  <Icon size={20} />

                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 p-5">
        <p className="text-xs text-center text-gray-500">© 2026 NexDine</p>
      </div>
    </aside>
  );
};

export default Sidebar;
