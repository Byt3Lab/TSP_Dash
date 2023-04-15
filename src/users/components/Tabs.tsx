import React , {useState} from 'react';
import "../styles/tab.css";
const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    return (
      <div className="Tabs">
        {/* Tab nav */}
        <ul className="nav">
          <li className={activeTab === "tab1" ? "active" : ""}>Commandes</li>
          <li className={activeTab === "tab2" ? "active" : ""}>Covoiturage</li>
          <li className={activeTab === "tab3" ? "active" : ""}>Perdus/retrouvés</li>
        </ul>
        <div className="outlet">
            {/* content will be shown here */}
        </div>
      </div>
    );
  };
export default Tabs;