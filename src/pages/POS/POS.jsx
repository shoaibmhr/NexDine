import React, { useState } from "react";
import { Search, Plus, Star } from "lucide-react";

const categories = [
  "All",
  "Starters",
  "Mains",
  "Pizza",
  "Burgers",
  "Salads",
  "Desserts",
  "Drinks",
];

const foods = [
  {
    id: 1,
    name: "Truffle Risotto",
    price: 28,
    rating: 4.9,
    category: "Mains",
    icon: "🍜",
    color: "from-orange-200 to-yellow-100",
  },
  {
    id: 2,
    name: "Wagyu Burger",
    price: 32,
    rating: 4.8,
    category: "Burgers",
    icon: "🍔",
    color: "from-red-200 to-orange-100",
  },
  {
    id: 3,
    name: "Margherita",
    price: 18,
    rating: 4.7,
    category: "Pizza",
    icon: "🍕",
    color: "from-orange-200 to-yellow-100",
  },
  {
    id: 4,
    name: "Pan Salmon",
    price: 34,
    rating: 4.9,
    category: "Mains",
    icon: "🐟",
    color: "from-pink-200 to-red-100",
  },
  {
    id: 5,
    name: "Caesar Salad",
    price: 14,
    rating: 4.6,
    category: "Salads",
    icon: "🥗",
    color: "from-green-200 to-lime-100",
  },
  {
    id: 6,
    name: "Bruschetta",
    price: 12,
    rating: 4.5,
    category: "Starters",
    icon: "🥖",
    color: "from-yellow-200 to-orange-100",
  },
  {
    id: 7,
    name: "Chocolate Lava",
    price: 11,
    rating: 4.9,
    category: "Desserts",
    icon: "🍫",
    color: "from-yellow-300 to-yellow-100",
  },
  {
    id: 8,
    name: "Espresso",
    price: 4,
    rating: 4.7,
    category: "Drinks",
    icon: "☕",
    color: "from-gray-200 to-yellow-100",
  },
];

const POS = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="min-h-screen w-full  p-3 sm:p-4  overflow-x-hidden">
      <div className="flex flex-col xl:flex-row gap-5 w-full">
        {/* LEFT */}

       <div className="flex-1 min-w-0">
          <h1 className="text-3xl font-bold">Point of Sale</h1>

          <p className="text-gray-500 mt-1">
            Take orders quickly with the modern POS interface.
          </p>

          {/* SEARCH */}

          <div className="bg-white rounded-3xl shadow mt-6 p-5">
            <div className="flex items-center border rounded-2xl px-4 py-3 w-full">
              <Search className="text-gray-400" size={20} />

              <input
                type="text"
                placeholder="Search food items..."
                className="ml-3 w-full outline-none"
              />
            </div>

            {/* Categories */}

            <div className="flex gap-2 overflow-x-auto whitespace-nowrap mt-5 pb-2 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-xl whitespace-nowrap transition ${
                    active === cat
                      ? "bg-orange-500 text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* FOOD GRID */}

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mt-6">
            {foods.map((food) => (
              <div
                key={food.id}
                className="bg-white rounded-3xl shadow overflow-hidden hover:shadow-xl duration-300"
              >
                <div
                  className={`bg-gradient-to-br ${food.color} h-36 flex items-center justify-center`}
                >
                  <span className="text-6xl">{food.icon}</span>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold">{food.name}</h3>

                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Star
                      size={14}
                      className="fill-yellow-400 text-yellow-400 mr-1"
                    />

                    {food.rating}

                    <span className="mx-2">•</span>

                    {food.category}
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <h2 className="text-orange-500 text-2xl font-bold">
                      ${food.price}
                    </h2>

                    <button className="w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-500 hover:text-white transition flex items-center justify-center">
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}

        <div className="w-full xl:w-[360px] flex-shrink-0">
         <div className="bg-white rounded-3xl shadow p-5">
            {/* Header */}

            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">Current Order</h2>

                <p className="text-gray-500 text-sm mt-1">
                  Sophia Martin · 2 guests
                </p>
              </div>

              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                Table 12
              </span>
            </div>

            {/* Orders */}

            <div className="space-y-4 mt-6">
              <div className="border rounded-2xl p-3 flex justify-between items-center">
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-2xl">
                    🍜
                  </div>

                  <div>
                    <h3 className="font-semibold">Truffle Risotto</h3>

                    <p className="text-gray-500 text-sm">$28 each</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full bg-gray-100">
                    -
                  </button>

                  <span className="font-semibold">3</span>

                  <button className="w-8 h-8 rounded-full bg-orange-500 text-white">
                    +
                  </button>
                </div>
              </div>

              <div className="border rounded-2xl p-3 flex justify-between items-center">
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-2xl">
                    ☕
                  </div>

                  <div>
                    <h3 className="font-semibold">Espresso</h3>

                    <p className="text-gray-500 text-sm">$4 each</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full bg-gray-100">
                    -
                  </button>

                  <span className="font-semibold">4</span>

                  <button className="w-8 h-8 rounded-full bg-orange-500 text-white">
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Summary */}

            <div className="border-t mt-6 pt-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span>$100.00</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Tax (8%)</span>
                <span>$8.00</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Service (5%)</span>
                <span>$5.00</span>
              </div>

              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>-$5.00</span>
              </div>

              <div className="border-t pt-3 flex justify-between font-bold text-xl">
                <span>Total</span>

                <span className="text-orange-500">$108.00</span>
              </div>
            </div>

            {/* Payment */}

            <div className="mt-8">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-3">
                Payment Method
              </p>

             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button className="border rounded-xl py-3 text-sm hover:border-orange-500">
                  Cash
                </button>

                <button className="border-2 border-orange-500 rounded-xl py-3 text-sm bg-orange-50 text-orange-500">
                  Card
                </button>

                <button className="border rounded-xl py-3 text-sm hover:border-orange-500">
                  Online
                </button>

                <button className="border rounded-xl py-3 text-sm hover:border-orange-500">
                  Wallet
                </button>
              </div>
            </div>

            {/* Complete */}

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-2xl mt-8">
              Complete Order • $108.00
            </button>

            {/* Bottom Buttons */}

            <div className="grid grid-cols-3 gap-3 mt-4">
              <button className="border rounded-xl py-3 hover:bg-gray-100">
                Print
              </button>

              <button className="border rounded-xl py-3 hover:bg-gray-100">
                Hold
              </button>

              <button className="border rounded-xl py-3 text-red-500 hover:bg-red-50">
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POS;
