import React from 'react';
import { Phone, MapPin, User, AlertCircle, Droplets, HeartPulse } from 'lucide-react';

const PatientSummaryCard: React.FC = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          
          {/* Patient Photo and Status */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" 
              alt="Jane Doe" 
              style={{ width: '100px', height: '100px', borderRadius: 'var(--radius-lg)', objectFit: 'cover' }}
            />
            <span className="badge critical">Critical</span>
          </div>

          {/* Core Info */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 4px 0' }}>Jane M. Doe</h2>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', gap: '16px', fontWeight: 500 }}>
                  <span>ID: PT-847291</span>
                  <span>DOB: 12 May 1982 (42Y)</span>
                  <span>Female</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'var(--danger-bg)', color: 'var(--danger)', padding: '6px 12px', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
                  <Droplets size={16} /> O-
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Phone size={18} color="var(--text-secondary)" />
                <div style={{ fontSize: '0.85rem' }}>
                  <div style={{ color: 'var(--text-secondary)' }}>Contact Number</div>
                  <div style={{ fontWeight: 500 }}>+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '8px' }}>
                <AlertCircle size={18} color="var(--text-secondary)" />
                <div style={{ fontSize: '0.85rem' }}>
                  <div style={{ color: 'var(--text-secondary)' }}>Emergency Contact</div>
                  <div style={{ fontWeight: 500 }}>John Doe (Spouse)<br/>+1 (555) 987-6543</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <MapPin size={18} color="var(--text-secondary)" />
                <div style={{ fontSize: '0.85rem' }}>
                  <div style={{ color: 'var(--text-secondary)' }}>Address</div>
                  <div style={{ fontWeight: 500 }}>123 Maple Street<br/>Seattle, WA 98101</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <HeartPulse size={18} color="var(--text-secondary)" />
                <div style={{ fontSize: '0.85rem' }}>
                  <div style={{ color: 'var(--text-secondary)' }}>Primary Physician</div>
                  <div style={{ fontWeight: 500 }}>Dr. Robert Chen</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSummaryCard;
