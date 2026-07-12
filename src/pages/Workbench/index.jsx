import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import FilingView from './FilingView';
import { Bell } from 'lucide-react';

const Workbench = () => {
  const [activeCompany, setActiveCompany] = useState('techcorp');

  return (
    <div className="shell">
      {/* DARK TOP BAR */}
      <header className="topbar dark">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
          <Link to="/" className="topbar-logo-wrap" style={{ textDecoration: 'none' }}>
            <div style={{
              width: 30, height: 30, borderRadius: 7,
              background: 'rgba(169,118,47,0.18)',
              border: '1.5px solid rgba(169,118,47,0.35)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--c-bronze-lt)',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7l9 5 9-5-9-5z" fill="currentColor" />
                <path d="M3 12l9 5 9-5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
              </svg>
            </div>
            <span style={{ fontWeight: 800, fontSize: 13, letterSpacing: '0.08em', color: 'var(--c-bronze-lt)' }}>
              REG-AI
            </span>
          </Link>
          <div style={{ width: 1, height: 18, background: 'rgba(255,255,255,0.12)' }} />
          <span className="role-pill">Lead Legal Counsel</span>
        </div>

        <div className="topbar-right">
          <button className="notif-btn">
            <Bell size={14} />
            <div className="notif-dot" />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>Ananya Singh</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>Lead Counsel · SEBI Reg.</div>
            </div>
            <div className="avatar av-bronze">AS</div>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="shell-body">
        <DashboardSidebar activeCompany={activeCompany} setActiveCompany={setActiveCompany} />
        <FilingView key={activeCompany} />
      </div>
    </div>
  );
};

export default Workbench;
