import { Flame } from "lucide-react";
import { sidebarMenu } from "../../constants/sidebarMenu";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <aside className="w-72 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b">
        <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white">
          <Flame size={24} />
        </div>

        <div className="ml-3">
          <h2 className="font-bold text-lg">Saveur</h2>
          <p className="text-xs text-gray-500 uppercase">Restaurant Suite</p>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto py-6">
        {sidebarMenu.map((section) => (
          <div key={section.title} className="mb-7">
            <h4 className="px-6 mb-3 text-xs font-bold text-gray-400 tracking-widest">
              {section.title}
            </h4>

            <div className="space-y-1">
              {section.items.map((item) => (
                <SidebarItem key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
