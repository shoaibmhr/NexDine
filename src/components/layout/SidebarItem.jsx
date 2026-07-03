import { NavLink } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";

const SidebarItem = ({ item }) => {
  const Icon = item.icon;

  const { closeSidebar } = useSidebar();

  return (
    <NavLink
      to={item.path}
      onClick={closeSidebar}
      className={({ isActive }) =>
        `flex items-center gap-3 mx-3 rounded-xl
        px-4 lg:px-5
        py-2.5 lg:py-3
        text-sm lg:text-base
        transition-all duration-300
        ${
          isActive
            ? "bg-orange-500 text-white shadow-lg"
            : "text-gray-600 hover:bg-orange-100 hover:text-orange-600"
        }`
      }
    >
      <Icon size={20} className="flex-shrink-0" />

      <span className="font-medium truncate">{item.name}</span>
    </NavLink>
  );
};

export default SidebarItem;
