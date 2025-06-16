import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ReturnForm from "../components/ReturnForm";
import ReturnList from "../components/ReturnList";
import Rewards from "../components/Rewards";

export default function CustomerDashboard() {
  const [activeSection, setActiveSection] = useState("return");

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />

      <main className="flex-1 p-6 overflow-y-auto">
        {activeSection === "return" && <ReturnForm />}
        {activeSection === "myReturns" && <ReturnList />}
        {activeSection === "rewards" && <Rewards />}
      </main>
    </div>
  );
}
