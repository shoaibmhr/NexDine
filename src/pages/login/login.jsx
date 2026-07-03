import { Mail, Lock, Eye, ArrowRight, Flame, CheckCircle } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-8 lg:px-12 py-10">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white">
              <Flame size={28} />
            </div>

            <div>
              <h2 className="font-bold text-lg">Saveur</h2>
              <p className="text-xs tracking-widest text-gray-500 uppercase">
                Restaurant Suite
              </p>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Welcome back
          </h1>

          <p className="text-gray-500 mt-2 mb-8">
            Sign in to manage your restaurant operations.
          </p>

          {/* Email */}
          <div className="mb-5">
            <label className="text-sm font-medium text-gray-700">Email</label>

            <div className="mt-2 flex items-center border rounded-full px-4 py-3 focus-within:border-orange-500">
              <Mail className="text-gray-400" size={18} />

              <input
                type="email"
                placeholder="alex@saveur.com"
                className="w-full ml-3 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <div className="flex justify-between">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <button className="text-orange-500 text-sm hover:underline">
                Forgot password?
              </button>
            </div>

            <div className="mt-2 flex items-center border rounded-full px-4 py-3 focus-within:border-orange-500">
              <Lock className="text-gray-400" size={18} />

              <input
                type="password"
                placeholder="••••••••"
                className="w-full ml-3 outline-none"
              />

              <Eye className="text-gray-400 cursor-pointer" size={18} />
            </div>
          </div>

          {/* Remember */}
          <div className="flex items-center gap-2 mb-7">
            <CheckCircle
              size={18}
              className="text-orange-500 fill-orange-500 text-white"
            />

            <span className="text-sm text-gray-600">
              Remember me for 30 days
            </span>
          </div>

          {/* Button */}
          <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white rounded-full py-4 font-semibold flex justify-center items-center gap-2 shadow-lg">
            Sign In
            <ArrowRight size={18} />
          </button>

          {/* Bottom */}
          <p className="text-center text-sm text-gray-500 mt-8">
            New to Saveur{" "}
            <span className="text-orange-500 font-semibold cursor-pointer">
              Request a demo
            </span>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 justify-center items-center bg-gradient-to-br from-orange-100 via-white to-orange-100 px-10">
        <div className="text-center max-w-lg">
          <div className="bg-white shadow-xl p-8 rounded-3xl">
            <img
              src="/restaurant.png"
              alt="Restaurant"
              className="w-full max-w-[340px] mx-auto"
            />
          </div>

          <h2 className="text-4xl font-bold mt-10 text-gray-900">
            Run your restaurant with confidence
          </h2>

          <p className="text-gray-500 mt-4 leading-7">
            From POS to kitchen, reservations to reports — everything you need
            in one premium dashboard.
          </p>

          <div className="grid grid-cols-3 gap-5 mt-10">
            <div className="bg-white rounded-2xl shadow p-5">
              <h3 className="font-bold text-3xl">12K+</h3>
              <p className="text-sm text-gray-500 mt-1">Restaurants</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-5">
              <h3 className="font-bold text-3xl">4.9★</h3>
              <p className="text-sm text-gray-500 mt-1">Average Rating</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-5">
              <h3 className="font-bold text-3xl">99.9%</h3>
              <p className="text-sm text-gray-500 mt-1">Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
