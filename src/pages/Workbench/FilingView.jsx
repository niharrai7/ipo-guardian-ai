import React, { useState } from 'react';
import FlagCard from '../../components/FlagCard';
import CertificationSeal from '../../components/CertificationSeal';
import { CheckCircle, Clock, AlertOctagon } from 'lucide-react';

const TABS = [
  { id: 'draft',        label: 'Draft' },
  { id: 'flags',        label: 'Flags', count: 3 },
  { id: 'comparisons',  label: 'Comparisons' },
  { id: 'duediligence', label: 'Due Diligence' },
  { id: 'audit',        label: 'Audit Trail' },
];

const signatories = [
  { role: 'Legal',   name: 'Ananya Singh — Lead Counsel',     done: true },
  { role: 'Auditor', name: 'CA Priya Nair — Statutory Audit', done: false },
  { role: 'Banker',  name: 'Rahul Kapoor — I-Banker',         done: false },
];

const FilingView = () => {
  const [tab, setTab] = useState('draft');
  const [certified, setCertified] = useState(false);

  return (
    <div className="filing-view">
      {/* TABS */}
      <div className="tabs-bar">
        {TABS.map(t => (
          <button
            key={t.id}
            className={`tab-btn ${tab === t.id ? 'active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
            {t.count && <span className="tab-count">{t.count}</span>}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="filing-body">
        {/* Doc col */}
        <div className="filing-doc">
          <div className="content-header" style={{ marginBottom: 'var(--sp-3)' }}>
            <div>
              <h2>Risk Factors</h2>
              <p className="content-subtitle">AI Draft · Last reviewed 2 hrs ago by Ananya Singh</p>
            </div>
            <CertificationSeal isLocked={certified} />
          </div>

          <div className="draft-doc">
            <div className="draft-doc-header">
              <span className="draft-doc-title-row">Section 4 — Risk Factors</span>
              <div className="conf-row">
                <span className="caption" style={{ fontSize: 10 }}>AI Confidence</span>
                <div className="conf-bar"><div className="conf-fill" style={{ width: '88%' }} /></div>
                <span className="conf-val">88%</span>
              </div>
            </div>
            <div className="draft-doc-body">
              <h3>1. Revenue Concentration Risk</h3>
              <p style={{ marginBottom: 16 }}>
                The Company derives a significant portion of its total income from a limited number of clients. 
                For the Financial Year ended March 31, 2025, our top five clients contributed approximately{' '}
                <span className="flag-amber" title="Peer average is 25% — consider flagging">45%</span>{' '}
                of our total revenue from operations.
              </p>
              <p style={{ marginBottom: 16 }}>
                The loss of one or more of these significant clients could have a material adverse effect on our 
                business, financial condition, and results of operations. These contracts are predominantly{' '}
                <span className="flag-red" title="Missing: specific expiry dates required">short-term</span>{' '}
                in nature and subject to annual renewal.
              </p>
              <p>
                While we have maintained long-standing relationships with key clients, there is no assurance 
                that these clients will continue to engage our services at current levels or at all.
              </p>
            </div>
          </div>
        </div>

        {/* Panel col */}
        <div className="filing-panel">
          <div style={{ fontWeight: 600, fontSize: 13 }}>Issues in This Section</div>

          <FlagCard
            type="amber"
            label="High Concentration"
            explanation="Revenue concentration (45%) exceeds peer average of 25%. Consider adding a mitigant clause."
            clauseRef="ICDR Reg. 25(1)(b)"
            actionLabel="Send Change Request"
            secondaryActionLabel="Resolve"
            onAction={() => alert('Change request sent to promoter portal.')}
            secondaryAction={() => {}}
          />
          <FlagCard
            type="red"
            label="Contract Terms Missing"
            explanation="Schedule VI requires specific expiry dates or renewal terms for the top 5 clients."
            clauseRef="Sch. VI, Item 9"
            actionLabel="Escalate"
            secondaryActionLabel="Request Clarification"
            onAction={() => alert('Escalated to lead counsel.')}
            secondaryAction={() => {}}
          />

          {/* Signatory card */}
          <div className="card signatory-card">
            <div className="signatory-card-head">
              <span className="label-xs">Signatory Status</span>
            </div>
            <div className="signatory-list">
              {signatories.map(s => (
                <div key={s.role} className="signatory-row">
                  <div>
                    <div className="signatory-name">{s.role}</div>
                    <div className="signatory-role">{s.name}</div>
                  </div>
                  {s.done ? (
                    <span className="badge badge-green"><CheckCircle size={10} /> Done</span>
                  ) : (
                    <span className="badge badge-amber"><Clock size={10} /> Pending</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="filing-footer">
        <div className="metrics-row">
          <div className="metric">
            <span className="metric-val" style={{ color: 'var(--c-green)' }}>94.2%</span>
            <span className="metric-lbl">Accuracy Rate</span>
          </div>
          <div className="metric-divider" />
          <div className="metric">
            <span className="metric-val" style={{ color: 'var(--c-amber)' }}>5.8%</span>
            <span className="metric-lbl">Correction Rate</span>
          </div>
          <div className="metric-divider" />
          <div className="metric">
            <span className="metric-val" style={{ color: 'var(--c-navy)' }}>3</span>
            <span className="metric-lbl">Open Flags</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {!certified && (
            <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: 'var(--c-amber)' }}>
              <AlertOctagon size={14} /> Resolve all flags first
            </span>
          )}
          <button
            className={certified ? 'btn btn-ghost' : 'btn btn-bronze'}
            onClick={() => setCertified(true)}
            disabled={certified}
          >
            {certified ? '✓ Certified & Locked' : '🔏 Certify & Lock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilingView;
