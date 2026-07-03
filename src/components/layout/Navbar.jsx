import { Search, Bell, Mail, Moon, ChevronDown, Menu } from "lucide-react";

import { useSidebar } from "../../context/SidebarContext";

const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 lg:px-8">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-orange-50 hover:border-orange-500 transition-all"
        >
          <Menu size={22} />
        </button>

        {/* Search Bar */}
        <div className="relative hidden sm:block">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search anything..."
            className="w-52 md:w-72 lg:w-96 h-11 pl-11 pr-4 rounded-xl border border-gray-200 outline-none focus:border-orange-500 transition-all"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
        {/* Dark Mode */}
        <button className="w-10 h-10 md:w-11 md:h-11 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-orange-50 hover:border-orange-500 transition-all">
          <Moon size={18} />
        </button>

        {/* Messages */}
        <button className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-orange-50 hover:border-orange-500 transition-all">
          <Mail size={18} />

          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
            3
          </span>
        </button>

        {/* Notifications */}
        <button className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-orange-50 hover:border-orange-500 transition-all">
          <Bell size={18} />

          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-orange-500 text-white text-[10px] flex items-center justify-center">
            8
          </span>
        </button>

        {/* Divider */}
        <div className="hidden md:block w-px h-8 bg-gray-200"></div>

        {/* Profile */}
        <button className="flex items-center gap-3 hover:bg-gray-100 rounded-xl px-2 md:px-3 py-2 transition-all">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover"
          />

          <div className="hidden md:block text-left">
            <h4 className="text-sm font-semibold text-gray-800">
              Muhammad Shoaib
            </h4>

            <p className="text-xs text-gray-500">Administrator</p>
          </div>

          <ChevronDown size={18} className="hidden md:block" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
