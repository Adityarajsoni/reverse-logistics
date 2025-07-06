import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ReturnForm from "../components/ReturnForm";
import ReturnList from "../components/ReturnList";
import Rewards from "../components/Rewards";

export default function CustomerDashboard() {
  const [activeSection, setActiveSection] = useState("return");

  const menuItems = [
    { key: "return", label: "📦 Request Return" },
    { key: "myReturns", label: "📁 My Returns" },
    { key: "rewards", label: "🎁 Rewards" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar
        title="Customer Portal"
        menuItems={menuItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="flex-1 p-6 overflow-y-auto">
        {activeSection === "return" && <ReturnForm />}
        {activeSection === "myReturns" && <ReturnList />}
        {activeSection === "rewards" && <Rewards />}
      </main>
    </div>
  );
}
