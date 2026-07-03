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
  LogIn,
} from "lucide-react";

export const sidebarMenu = [
  {
    title: "OVERVIEW",
    items: [
      {
        name: "Dashboard",
        path: "/",
        icon: LayoutDashboard,
      },
      {
        name: "POS",
        path: "/pos",
        icon: ShoppingCart,
      },
      {
        name: "Orders",
        path: "/orders",
        icon: ClipboardList,
      },
    ],
  },
  {
    title: "OPERATIONS",
    items: [
      {
        name: "Tables",
        path: "/tables",
        icon: Armchair,
      },
      {
        name: "Reservations",
        path: "/reservations",
        icon: CalendarDays,
      },
      {
        name: "Kitchen",
        path: "/kitchen",
        icon: ChefHat,
      },
      {
        name: "Menu",
        path: "/menu",
        icon: UtensilsCrossed,
      },
      {
        name: "Categories",
        path: "/categories",
        icon: Grid2x2,
      },
    ],
  },
  {
    title: "PEOPLE",
    items: [
      {
        name: "Customers",
        path: "/customers",
        icon: Users,
      },
      {
        name: "Staff",
        path: "/staff",
        icon: UserCog,
      },
      {
        name: "Suppliers",
        path: "/suppliers",
        icon: Truck,
      },
    ],
  },
  {
    title: "FINANCE",
    items: [
      {
        name: "Inventory",
        path: "/inventory",
        icon: Boxes,
      },
      {
        name: "Purchases",
        path: "/purchases",
        icon: ShoppingBag,
      },
      {
        name: "Expenses",
        path: "/expenses",
        icon: Wallet,
      },
      {
        name: "Payments",
        path: "/payments",
        icon: CreditCard,
      },
      {
        name: "Reports",
        path: "/reports",
        icon: BarChart3,
      },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      {
        name: "Settings",
        path: "/settings",
        icon: Settings,
      },
    ],
  },
  {
    title: "LOGIN",
    items: [
      {
        name: "Logout",
        path: "/Login",
        icon: LogIn,
      },
    ],
  },
];
