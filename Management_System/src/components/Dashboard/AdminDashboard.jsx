import React from "react";
import Header from "../Other/Header";

const AdminDashboard = () => {
  return (
    <div className="bg-gray-950 min-h-screen text-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Main layout: sidebar + content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 p-6 space-y-4">
          <h2 className="text-xl font-semibold mb-4">Admin Panel</h2>
          <nav className="space-y-3">
            <a href="#" className="block hover:text-blue-400">
              Dashboard
            </a>
            <a href="#" className="block hover:text-blue-400">
              Users
            </a>
            <a href="#" className="block hover:text-blue-400">
              Settings
            </a>
            <a href="#" className="block hover:text-blue-400">
              Reports
            </a>
          </nav>
        </aside>

        {/* Main content area */}
        <main className="flex-1 p-8 bg-gray-800 rounded-tl-2xl">
          <h1 className="text-2xl font-bold mb-4">Welcome, Admin</h1>
          <p className="text-gray-300">
            Here you can manage users, view reports, and control system
            settings.
          </p>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
