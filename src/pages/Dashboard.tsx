import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-grid">
      <div className="dashboard-main-column">
        {/* Patient Summary Card will go here */}
        <div className="card">
          <div className="card-body">
            <h2>Patient Summary Placeholder</h2>
          </div>
        </div>

        {/* Clinical Summary & Chief Complaints */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div className="card">
            <div className="card-body">Clinical Summary Placeholder</div>
          </div>
          <div className="card">
            <div className="card-body">Chief Complaints Placeholder</div>
          </div>
        </div>

        {/* Vitals */}
        <div className="card">
          <div className="card-body">Vitals Placeholder</div>
        </div>
        
        {/* Meds and Labs */}
        <div className="card">
          <div className="card-body">Meds Placeholder</div>
        </div>
      </div>

      <div className="dashboard-side-column">
        {/* Active Tasks */}
        <div className="card">
          <div className="card-body">Active Tasks Placeholder</div>
        </div>
        
        {/* Medical Timeline */}
        <div className="card">
          <div className="card-body">Medical Timeline Placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
