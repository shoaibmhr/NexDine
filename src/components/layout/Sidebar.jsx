import { Flame, X } from "lucide-react";
import { sidebarMenu } from "../../constants/sidebarMenu";
import SidebarItem from "./SidebarItem";
import { useSidebar } from "../../context/SidebarContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar();

  return (
    <>
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static
          top-0 left-0
          z-50
          w-72
          h-screen
          bg-white
          border-r border-gray-200
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white">
              <Flame size={24} />
            </div>

            <div className="ml-3">
              <h2 className="font-bold text-lg">Saveur</h2>
              <p className="text-xs text-gray-500 uppercase">
                Restaurant Suite
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button onClick={closeSidebar} className="lg:hidden">
            <X size={22} />
          </button>
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
    </>
  );
};

export default Sidebar;
