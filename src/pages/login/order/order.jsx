import React, { useState } from "react";
import { Search, Download, Plus, SlidersHorizontal } from "lucide-react";

const ordersData = [
  {
    id: "#ORD-10284",
    customer: "Sophia Martin",
    table: "T-12",
    items: 4,
    type: "Dine In",
    amount: "$86.40",
    status: "Completed",
    time: "12:32",
  },
  {
    id: "#ORD-10283",
    customer: "James Wilson",
    table: "T-07",
    items: 2,
    type: "Dine In",
    amount: "$42.00",
    status: "Preparing",
    time: "12:28",
  },
  {
    id: "#ORD-10282",
    customer: "Emma Davis",
    table: "-",
    items: 6,
    type: "Takeaway",
    amount: "$124.50",
    status: "Ready",
    time: "12:25",
  },
  {
    id: "#ORD-10281",
    customer: "Liam Brown",
    table: "T-21",
    items: 3,
    type: "Dine In",
    amount: "$58.20",
    status: "Served",
    time: "12:18",
  },
  {
    id: "#ORD-10280",
    customer: "Olivia Chen",
    table: "-",
    items: 5,
    type: "Delivery",
    amount: "$96.80",
    status: "Pending",
    time: "12:10",
  },
  {
    id: "#ORD-10279",
    customer: "Noah Garcia",
    table: "T-05",
    items: 2,
    type: "Dine In",
    amount: "$38.00",
    status: "Cancelled",
    time: "11:58",
  },
];

const Orders = () => {
  const [orders] = useState(ordersData);

  const badgeColor = (type) => {
    switch (type) {
      case "Dine In":
        return "bg-orange-100 text-orange-600";
      case "Takeaway":
        return "bg-blue-100 text-blue-600";
      case "Delivery":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100";
    }
  };

  const statusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";
      case "Preparing":
        return "bg-yellow-100 text-yellow-600";
      case "Ready":
        return "bg-blue-100 text-blue-600";
      case "Served":
        return "bg-orange-100 text-orange-600";
      case "Pending":
        return "bg-gray-100 text-gray-600";
      case "Cancelled":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}

      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-4xl font-bold">Orders</h1>

          <p className="text-gray-500 mt-1">
            All orders across dine-in, takeaway and delivery.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2 border rounded-xl bg-white hover:bg-gray-100">
            <Download size={18} />
            Export
          </button>

          <button className="flex items-center gap-2 px-5 py-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600">
            <Plus size={18} />
            New Order
          </button>
        </div>
      </div>

      {/* Card */}

      <div className="bg-white rounded-3xl shadow mt-8 overflow-hidden">
        {/* Top */}

        <div className="flex flex-wrap gap-4 justify-between p-5 border-b">
          {/* Search */}

          <div className="flex items-center border rounded-xl px-4 py-3 w-full lg:w-[60%]">
            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search orders, customers..."
              className="outline-none ml-3 w-full"
            />
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 border rounded-xl px-5">
              <SlidersHorizontal size={18} />
              Filter
            </button>

            <button className="px-4 py-2 rounded-xl bg-orange-500 text-white">
              All
            </button>

            <button>Dine In</button>

            <button>Takeaway</button>

            <button>Delivery</button>
          </div>
        </div>

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left p-5">ORDER ID</th>
                <th className="text-left">CUSTOMER</th>
                <th className="text-left">TABLE</th>
                <th className="text-left">ITEMS</th>
                <th className="text-left">TYPE</th>
                <th className="text-left">AMOUNT</th>
                <th className="text-left">STATUS</th>
                <th className="text-left">TIME</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-50 duration-200"
                >
                  <td className="p-5 font-semibold">{order.id}</td>

                  <td>{order.customer}</td>

                  <td>{order.table}</td>

                  <td>{order.items}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${badgeColor(
                        order.type,
                      )}`}
                    >
                      {order.type}
                    </span>
                  </td>

                  <td className="font-bold">{order.amount}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${statusColor(
                        order.status,
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td>{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
