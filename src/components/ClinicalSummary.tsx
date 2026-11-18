import React from 'react';
import { ClipboardList } from 'lucide-react';

const ClinicalSummary: React.FC = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">
          <ClipboardList size={20} color="var(--primary)" />
          Clinical Summary
        </h3>
      </div>
      <div className="card-body">
        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Medical History</div>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
            Patient presents with a 5-year history of Type 2 Diabetes Mellitus and essential hypertension. 
            Admitted today for severe chest pain radiating to the left arm.
          </p>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Conditions</div>
          <div className="tags">
            <span className="tag">Type 2 Diabetes</span>
            <span className="tag">Hypertension</span>
            <span className="tag">Hyperlipidemia</span>
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Allergies</div>
          <div className="tags">
            <span className="tag" style={{ borderColor: 'var(--danger)', color: 'var(--danger)', backgroundColor: 'var(--danger-bg)' }}>Penicillin</span>
            <span className="tag" style={{ borderColor: 'var(--danger)', color: 'var(--danger)', backgroundColor: 'var(--danger-bg)' }}>Peanuts</span>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Surgeries</div>
          <ul style={{ fontSize: '0.9rem', paddingLeft: '20px', margin: 0 }}>
            <li style={{ marginBottom: '4px' }}>Appendectomy (2010)</li>
            <li>ACL Reconstruction - Right Knee (2015)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClinicalSummary;
