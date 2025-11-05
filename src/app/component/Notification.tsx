"use client";
import React from "react";
import { Bell, MessageCircle, AlertCircle, CheckCircle } from "lucide-react";

const NotificationDropdown = () => {
  return (
    <div className="absolute top-12 left-[-220px] z-50 w-72 bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-50">
        <h3 className="text-sm font-semibold text-gray-700">Notifications</h3>
        <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">
          3 New
        </span>
      </div>

      {/* List */}
      <div className="max-h-80 overflow-y-auto p-2 space-y-2">
        {/* Item */}
        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition">
          <div className="bg-blue-100 p-2 rounded-full">
            <MessageCircle className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-800 font-medium">New message received</p>
            <p className="text-xs text-gray-500">2 mins ago</p>
          </div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mt-1"></div>
        </div>

        {/* Item */}
        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition">
          <div className="bg-red-100 p-2 rounded-full">
            <AlertCircle className="w-4 h-4 text-red-600" />
          </div>
          <div>
            <p className="text-sm text-gray-800 font-medium">System update available</p>
            <p className="text-xs text-gray-500">5 mins ago</p>
          </div>
        </div>

        {/* Item */}
        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition">
          <div className="bg-green-100 p-2 rounded-full">
            <CheckCircle className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-800 font-medium">
              Payment successfully processed
            </p>
            <p className="text-xs text-gray-500">10 mins ago</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <button className="w-full py-2 text-center text-sm font-medium text-blue-600 bg-gray-50 hover:bg-gray-100 transition">
        View All
      </button>
    </div>
  );
};

export default NotificationDropdown;
