import React, { useState } from 'react';
import FlagCard from '../../components/FlagCard';
import CertificationSeal from '../../components/CertificationSeal';
import { Sparkles, Eye, Upload } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';

const meta = {
  business:   { title: 'Business Overview',   sub: 'Describe your business model, products, and market position.' },
  risk:       { title: 'Risk Factors',         sub: 'Provide context around key business risks. Our AI will draft the formal narrative.' },
  objects:    { title: 'Objects of Issue',     sub: 'Specify the intended use of proceeds from the IPO.' },
  financials: { title: 'Financials',           sub: 'Upload financial statements and we\'ll extract key figures automatically.' },
  promoter:   { title: 'Promoter Group',       sub: 'Provide information about the promoters and their holding structure.' },
};

const GuidedForm = ({ chapter = 'risk' }) => {
  const [mode, setMode] = useState('form');
  const m = meta[chapter] || meta.risk;

  return (
    <div style={{ maxWidth: 880 }}>
      {/* Section header */}
      <div className="content-header">
        <div>
          <h2>{m.title}</h2>
          <p className="content-subtitle">{m.sub}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <CertificationSeal isLocked={chapter === 'business'} />
          {chapter !== 'business' && (
            <div className="view-toggle">
              <button className={`toggle-btn ${mode === 'form' ? 'active' : ''}`} onClick={() => setMode('form')}>
                <Sparkles size={12} /> Input
              </button>
              <button className={`toggle-btn ${mode === 'draft' ? 'active' : ''}`} onClick={() => setMode('draft')}>
                <Eye size={12} /> AI Draft
              </button>
            </div>
          )}
        </div>
      </div>

      {chapter === 'business' ? <ClearedView /> : mode === 'draft' ? <DraftView /> : <FormView />}
    </div>
  );
};

const FormView = () => (
  <div>
    <div className="form-section">
      <div className="form-section-heading">
        <div className="section-num">1</div>
        Revenue & Client Dependency
      </div>

      <div className="form-row">
        <label className="lbl">What percentage of your revenue comes from your top 5 clients?</label>
        <input className="input input-mono" type="text" placeholder="e.g. 45%" style={{ maxWidth: 220 }} />
        <span className="form-hint">Based on FY2025 revenue from operations. SEBI flags if this exceeds 30%.</span>
      </div>

      <div className="form-row">
        <label className="lbl">Nature of these contracts</label>
        <div className="option-chips">
          {['Long-term (3+ years)', 'Medium-term (1–3 years)', 'Short-term (<1 year)', 'Varies'].map(o => (
            <button key={o} className="option-chip">{o}</button>
          ))}
        </div>
      </div>

      <div className="form-row">
        <label className="lbl">Any government or PSU contracts?</label>
        <textarea className="input" rows={3} placeholder="Describe significant government contracts, or type 'None'..." style={{ resize: 'vertical', fontFamily: 'var(--font-sans)' }} />
        <span className="form-hint">Mention the ministry/PSU name and approximate contract value.</span>
      </div>
    </div>

    <div className="form-section">
      <div className="form-section-heading">
        <div className="section-num">2</div>
        Upload Supporting Documents
      </div>

      <div className="upload-zone">
        <div className="upload-icon">
          <Upload size={22} color="var(--c-blue)" style={{ opacity: 0.75 }} />
        </div>
        <div className="upload-title">Drop files here or click to upload</div>
        <div className="upload-sub">Annual reports, client contracts, CA-certified financials · PDF, XLSX, JPG up to 25 MB</div>
        <div style={{ marginTop: 16, display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
          {['Annual Report', 'Client Contract', 'Audited P&L', 'MCA Certificate'].map(t => (
            <span key={t} className="badge badge-blue" style={{ fontSize: 11 }}>{t}</span>
          ))}
        </div>
      </div>
    </div>

    <div className="form-actions">
      <button className="btn btn-primary">Save & Continue</button>
      <button className="btn btn-ghost">Save Draft</button>
    </div>
  </div>
);

const DraftView = () => (
  <div style={{ display: 'flex', gap: 'var(--sp-4)' }}>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div className="draft-doc">
        <div className="draft-doc-header">
          <span className="draft-doc-title-row">AI-Generated Draft · Risk Factors §4.1</span>
          <div className="conf-row">
            <span className="caption" style={{ fontSize: 10 }}>Confidence</span>
            <div className="conf-bar">
              <div className="conf-fill" style={{ width: '82%' }} />
            </div>
            <span className="conf-val">82%</span>
          </div>
        </div>
        <div className="draft-doc-body">
          <h3>1. Concentration Risk in Revenue Streams</h3>
          <p style={{ marginBottom: 16 }}>
            The Company derives a significant portion of its total income from a limited number of clients. 
            For the Financial Year ended March 31, 2025, our top five clients contributed approximately{' '}
            <span className="flag-amber" title="Add the exact percentage from FY25 financials">[XX]%</span>{' '}
            of our total revenue from operations.
          </p>
          <p style={{ marginBottom: 16 }}>
            The loss of one or more of these significant clients, or a reduction in their demand for our services, 
            could have a material adverse effect on our business. These contracts are predominantly{' '}
            <span className="flag-red" title="Missing: specific expiry dates required per Sch. VI">short-term</span>{' '}
            in nature and subject to annual renewal.
          </p>
          <p>
            While we have maintained long-standing relationships with key clients, there is no assurance that 
            these clients will continue to engage our services at current levels.
          </p>
        </div>
      </div>
    </div>

    <div style={{ width: 268, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ fontWeight: 600, fontSize: 13 }}>Open Issues</div>
      <FlagCard
        type="amber"
        label="Missing Percentage"
        explanation='Replace "[XX]%" with the exact figure from your FY25 audited financials.'
        clauseRef="ICDR Reg. 25(1)(b)"
        actionLabel="Update"
        secondaryActionLabel="Ignore"
        onAction={() => {}}
        secondaryAction={() => {}}
      />
      <FlagCard
        type="red"
        label="Contract Terms Required"
        explanation="SEBI requires specific expiry dates or renewal terms for top 5 clients."
        clauseRef="Sch. VI, Item 9"
        actionLabel="Fix Now"
        secondaryActionLabel="Help"
        onAction={() => {}}
        secondaryAction={() => {}}
      />
    </div>
  </div>
);

const ClearedView = () => (
  <div className="cleared-state">
    <div className="cleared-icon-wrap">
      <ShieldCheck size={32} color="var(--c-bronze)" strokeWidth={1.5} />
    </div>
    <div>
      <h3 style={{ color: 'var(--c-green)', marginBottom: 6 }}>Business Overview — Cleared</h3>
      <p className="caption" style={{ maxWidth: 360 }}>
        This section has been reviewed and certified by your intermediary. It is now read-only and cryptographically sealed.
      </p>
    </div>
    <span className="badge badge-green" style={{ fontSize: 12 }}>✓ Ready for Intermediary Review</span>
  </div>
);

export default GuidedForm;
