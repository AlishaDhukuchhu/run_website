import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Pill, 
  Microscope, 
  Activity, 
  CheckSquare, 
  Calendar, 
  BarChart, 
  MessageSquare, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Stethoscope
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, active: true },
    { name: 'Patients', icon: Users },
    { name: 'Clinical Records', icon: FileText },
    { name: 'Medications', icon: Pill },
    { name: 'Lab Results', icon: Microscope },
    { name: 'Imaging & Diagnostics', icon: Activity },
    { name: 'Tasks', icon: CheckSquare },
    { name: 'Appointments', icon: Calendar },
    { name: 'Reports', icon: BarChart },
    { name: 'Messages', icon: MessageSquare },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <Stethoscope className="sidebar-logo-icon" size={28} />
        {!collapsed && <span className="sidebar-title">CareFlow Med</span>}
      </div>
      
      <nav className="sidebar-nav">
        {navItems.map((item, index) => (
          <div key={index} className={`nav-item ${item.active ? 'active' : ''}`} title={item.name}>
            <item.icon size={20} />
            {!collapsed && <span className="nav-label">{item.name}</span>}
          </div>
        ))}
      </nav>

      <div style={{ marginTop: 'auto', padding: '16px', display: 'flex', justifyContent: 'center' }}>
        <button 
          className="icon-btn" 
          onClick={() => setCollapsed(!collapsed)}
          style={{ color: 'var(--text-inverse)', backgroundColor: 'rgba(255,255,255,0.1)' }}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
