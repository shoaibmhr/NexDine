import { Search, Bell, Mail, Moon, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8">
      {/* Left Side */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search anything..."
            className="w-96 h-11 pl-11 pr-4 rounded-xl border border-gray-200 outline-none focus:border-orange-500 transition-all"
          />
        </div>
      </div>

      {/* Right Side */}

      <div className="flex items-center gap-5">
        {/* Dark Mode */}

        <button className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-orange-50 hover:border-orange-500 transition-all">
          <Moon size={19} />
        </button>

        {/* Messages */}

        <button className="relative w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-orange-50 hover:border-orange-500 transition-all">
          <Mail size={19} />

          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
            3
          </span>
        </button>

        {/* Notifications */}

        <button className="relative w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-orange-50 hover:border-orange-500 transition-all">
          <Bell size={19} />

          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-orange-500 text-white text-[10px] flex items-center justify-center">
            8
          </span>
        </button>

        {/* Divider */}

        <div className="w-px h-8 bg-gray-200"></div>

        {/* Profile */}

        <button className="flex items-center gap-3 hover:bg-gray-100 rounded-xl px-3 py-2 transition-all">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="w-11 h-11 rounded-full object-cover"
          />

          <div className="text-left">
            <h4 className="text-sm font-semibold text-gray-800">
              Muhammad Shoaib
            </h4>

            <p className="text-xs text-gray-500">Administrator</p>
          </div>

          <ChevronDown size={18} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
