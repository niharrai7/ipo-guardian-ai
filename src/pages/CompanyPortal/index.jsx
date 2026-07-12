import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import GuidedForm from './GuidedForm';

const CompanyPortal = () => {
  const [activeChapter, setActiveChapter] = useState('risk');

  return (
    <div className="shell">
      {/* TOP BAR */}
      <header className="topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
          <Link to="/" className="topbar-logo-wrap">
            <div className="logo-mark" style={{ width: 30, height: 30, borderRadius: 7 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7l9 5 9-5-9-5z" fill="var(--c-bronze-lt)" />
                <path d="M3 12l9 5 9-5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <span style={{ fontWeight: 800, fontSize: 13, letterSpacing: '0.07em', color: 'var(--c-navy)' }}>REG-AI</span>
          </Link>
          <div className="topbar-divider" />
          <div>
            <div className="topbar-filing">TechCorp Solutions Ltd. — DRHP Filing</div>
            <div style={{ fontSize: 11, color: 'var(--c-grey)', marginTop: 1 }}>Draft Red Herring Prospectus · FY2025</div>
          </div>
        </div>

        <div className="topbar-right">
          <div className="completion-pill">
            <span style={{ fontSize: 12, color: 'var(--c-grey)' }}>Completion</span>
            <span className="completion-pct">62%</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 12, fontWeight: 600 }}>Rahul Mehta</div>
              <div style={{ fontSize: 11, color: 'var(--c-grey)' }}>Promoter</div>
            </div>
            <div className="avatar av-blue">RM</div>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="shell-body">
        <Sidebar activeChapter={activeChapter} setActiveChapter={setActiveChapter} />
        <main className="content-area">
          <GuidedForm chapter={activeChapter} />
        </main>
      </div>

      {/* BOTTOM BAR */}
      <footer className="bottombar">
        <div className="progress-wrap">
          <div className="progress-meta">
            <div className="progress-legend">
              {[
                { label: 'Cleared', color: 'var(--c-green)' },
                { label: 'In Review', color: 'var(--c-amber)' },
                { label: 'Action Needed', color: 'var(--c-red)' },
              ].map(l => (
                <div key={l.label} className="legend-item">
                  <div className="legend-swatch" style={{ background: l.color }} />
                  {l.label}
                </div>
              ))}
            </div>
            <span style={{ fontSize: 11, color: 'var(--c-grey)' }}>~45 min remaining</span>
          </div>
          <div className="progress-rail-full">
            <div className="progress-seg" style={{ width: '20%', background: 'var(--c-green)' }} />
            <div className="progress-seg" style={{ width: '30%', background: 'var(--c-amber)' }} />
            <div className="progress-seg" style={{ width: '12%', background: 'var(--c-red)' }} />
          </div>
        </div>
        <button className="btn btn-ghost" disabled>
          Send to Intermediary
        </button>
      </footer>
    </div>
  );
};

export default CompanyPortal;
