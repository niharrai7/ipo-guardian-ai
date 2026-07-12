import React from 'react';

const chapters = [
  { id: 'business', name: 'Business Overview', status: 'green', pct: 100, emoji: '🏢' },
  { id: 'risk',     name: 'Risk Factors',      status: 'amber', pct: 70,  emoji: '⚠️' },
  { id: 'objects',  name: 'Objects of Issue',   status: 'red',   pct: 40,  emoji: '🎯' },
  { id: 'financials', name: 'Financials',       status: 'red',   pct: 10,  emoji: '📊' },
  { id: 'promoter', name: 'Promoter Group',     status: 'amber', pct: 60,  emoji: '👥' },
];

const Sidebar = ({ activeChapter, setActiveChapter }) => (
  <aside className="ch-sidebar">
    <div className="ch-sidebar-head">
      <div className="label-xs" style={{ color: 'var(--c-grey)' }}>Chapters</div>
    </div>

    <div className="ch-sidebar-list">
      {chapters.map(ch => (
        <button
          key={ch.id}
          onClick={() => setActiveChapter(ch.id)}
          className={`ch-btn ${activeChapter === ch.id ? 'active' : ''}`}
        >
          <div className="ch-btn-left">
            <span className="ch-emoji">{ch.emoji}</span>
            <span className="ch-name">{ch.name}</span>
          </div>
          <div className="ch-btn-right">
            <span className="ch-pct">{ch.pct}%</span>
            <div className={`status-dot dot-${ch.status}`} />
          </div>
        </button>
      ))}
    </div>

    <div className="ch-sidebar-foot">
      <button className="organize-btn">
        <span>✨</span>
        Organize My Data
      </button>
      <p className="caption" style={{ textAlign: 'center', marginTop: 8, fontSize: 11 }}>
        AI will sort your uploads into the correct chapters
      </p>
    </div>
  </aside>
);

export default Sidebar;
