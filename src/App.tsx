import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
      <div className="main-wrapper">
        <Header toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <main className="main-content">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
