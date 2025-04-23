import { useState } from "react";
import "./Tabs.css";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("New Requests");

  const tabs = [
    { name: "New Requests", count: 1 },
    { name: "Ongoing", count: 0 },
    { name: "Completed", count: 0 },
  ];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`tab-button ${activeTab === tab.name ? "active" : ""}`}
          onClick={() => setActiveTab(tab.name)}
        >
          {tab.name} {tab.count > 0 && `(${tab.count})`}
          {activeTab === tab.name && <div className="tab-indicator" />}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
