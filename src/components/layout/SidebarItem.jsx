import { NavLink } from "react-router-dom";

const SidebarItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-3 px-5 py-3 rounded-xl mx-3 transition-all duration-300
        ${
          isActive
            ? "bg-orange-500 text-white shadow-lg"
            : "text-gray-600 hover:bg-orange-100 hover:text-orange-600"
        }`
      }
    >
      <Icon size={20} />
      <span className="font-medium">{item.name}</span>
    </NavLink>
  );
};

export default SidebarItem;
