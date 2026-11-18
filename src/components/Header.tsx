import React from 'react';
import { Search, Bell, Plus, Menu } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="icon-btn" onClick={toggleSidebar}>
          <Menu size={20} />
        </button>
        <div className="search-bar">
          <Search size={18} color="var(--text-secondary)" />
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search by Name, Patient ID, Phone Number..." 
          />
        </div>
      </div>
      
      <div className="header-actions">
        <button className="btn-primary">
          <Plus size={18} />
          <span>Quick Actions</span>
        </button>
        
        <button className="icon-btn" style={{ position: 'relative' }}>
          <Bell size={20} />
          <span style={{
            position: 'absolute',
            top: '4px',
            right: '4px',
            width: '8px',
            height: '8px',
            backgroundColor: 'var(--danger)',
            borderRadius: '50%'
          }}></span>
        </button>

        <div className="user-profile">
          <img 
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=150&auto=format&fit=crop" 
            alt="Dr. Sarah" 
            className="avatar" 
          />
          <div className="user-info">
            <span className="user-name">Dr. Sarah Jenkins</span>
            <span className="user-role">Cardiologist</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
