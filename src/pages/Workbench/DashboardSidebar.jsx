import React, { useState } from 'react';
import { Search } from 'lucide-react';

const companies = [
  { id: 'techcorp',  name: 'TechCorp Solutions', sector: 'Technology',         pct: 85, status: 'amber', time: '10 min ago' },
  { id: 'greenergy', name: 'GreenEnergy Ltd',     sector: 'Renewable Energy',   pct: 42, status: 'red',   time: '2 hrs ago' },
  { id: 'finserve',  name: 'FinServe Bank',        sector: 'Financial Services', pct: 97, status: 'green', time: '1 day ago' },
  { id: 'medcore',   name: 'MedCore Pharma',       sector: 'Healthcare',         pct: 61, status: 'amber', time: '3 hrs ago' },
];

const fillColor = { green: 'var(--c-green)', amber: 'var(--c-amber)', red: 'var(--c-red)' };

const DashboardSidebar = ({ activeCompany, setActiveCompany }) => {
  const [q, setQ] = useState('');
  const list = companies.filter(c =>
    c.name.toLowerCase().includes(q.toLowerCase()) ||
    c.sector.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <aside className="co-sidebar">
      <div className="co-sidebar-head">
        <div className="label-xs" style={{ marginBottom: 8 }}>Active Filings ({companies.length})</div>
        <div className="co-search-wrap">
          <Search size={13} className="co-search-icon" />
          <input
            className="co-search"
            placeholder="Search companies..."
            value={q}
            onChange={e => setQ(e.target.value)}
          />
        </div>
      </div>

      <div className="co-list">
        {list.map(co => (
          <div
            key={co.id}
            className={`co-item ${activeCompany === co.id ? 'active' : ''}`}
            onClick={() => setActiveCompany(co.id)}
          >
            <div className="co-item-top">
              <div>
                <div className="co-name">{co.name}</div>
                <div className="co-sector">{co.sector}</div>
              </div>
              <div className={`status-dot dot-${co.status}`} />
            </div>
            <div className="co-prog-row">
              <div className="co-prog-rail">
                <div className="co-prog-fill" style={{ width: `${co.pct}%`, background: fillColor[co.status] }} />
              </div>
              <span className="co-pct">{co.pct}%</span>
            </div>
            <div className="co-time">{co.time}</div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default DashboardSidebar;
