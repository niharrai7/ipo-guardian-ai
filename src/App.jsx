import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CompanyPortal from './pages/CompanyPortal';
import Workbench from './pages/Workbench';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portal/*" element={<CompanyPortal />} />
        <Route path="/workbench/*" element={<Workbench />} />
      </Routes>
    </Router>
  );
}

/* ───────────────────────────────────────────
   HOME PAGE
─────────────────────────────────────────── */
function Home() {
  return (
    <div className="home">
      {/* NAV */}
      <nav className="home-nav">
        <div className="home-nav-inner">
          <Link to="/" className="home-logo">
            <div className="logo-mark">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7l9 5 9-5-9-5z" fill="var(--c-bronze-lt)" />
                <path d="M3 12l9 5 9-5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none" />
                <path d="M3 17l9 5 9-5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <div>
              <span className="logo-text-brand">REG-AI</span>
              <span className="logo-text-sub">Regulatory Platform</span>
            </div>
          </Link>
          <div className="nav-links">
            <a className="nav-link" href="#features">Features</a>
            <a className="nav-link" href="#trust">Security</a>
            <Link to="/portal" className="nav-link">Company Portal</Link>
            <Link to="/workbench" className="nav-link">Workbench</Link>
            <Link to="/portal" className="btn btn-primary btn-sm">Launch Platform →</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section>
        <div className="hero-bg" />
        <div className="hero-wrap">
          {/* Left copy */}
          <div className="hero-left">
            <div className="hero-eyebrow">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="var(--c-bronze)">
                <circle cx="5" cy="5" r="5" />
              </svg>
              SEBI ICDR Compliant · Built for Intermediaries
            </div>

            <h1 className="hero-title anim-fade-up">
              IPO Filing,<br />
              <em>Redefined.</em>
            </h1>

            <p className="hero-desc anim-fade-up-2">
              AI-powered DRHP drafting, real-time compliance verification, and multi-signatory 
              certification—all in one authoritative platform built for India's regulatory ecosystem.
            </p>

            <div className="hero-ctas anim-fade-up-3">
              <Link to="/portal" className="btn btn-primary btn-lg">
                Company Portal →
              </Link>
              <Link to="/workbench" className="btn btn-outline btn-lg">
                Intermediary Workbench
              </Link>
            </div>


          </div>

          {/* Right — mock filing card */}
          <div className="hero-right">
            <div className="hero-card-outer anim-float">
              <div className="hero-float-badge">
                <div className="hero-float-dot" />
                3 filings active
              </div>
              <div className="filing-card">
                <div className="filing-card-header">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div className="filing-card-title">TechCorp Solutions Ltd.</div>
                      <div className="filing-card-sub">DRHP Draft · Series A IPO · FY2025</div>
                    </div>
                    <span className="badge badge-amber">In Review</span>
                  </div>
                </div>
                <div className="filing-card-body">
                  <div className="progress-block">
                    <div className="progress-block-label">
                      <span>Filing Progress</span>
                      <span>62%</span>
                    </div>
                    <div className="progress-rail">
                      <div className="progress-seg" style={{ width: '20%', background: 'var(--c-green)' }} />
                      <div className="progress-seg" style={{ width: '25%', background: 'var(--c-amber)' }} />
                      <div className="progress-seg" style={{ width: '17%', background: 'var(--c-red)' }} />
                    </div>
                  </div>
                  <div className="chapter-list">
                    {[
                      { name: 'Business Overview', pct: '100%', dot: 'green' },
                      { name: 'Risk Factors', pct: '70%', dot: 'amber' },
                      { name: 'Financials', pct: '10%', dot: 'red' },
                      { name: 'Promoter Group', pct: '60%', dot: 'amber' },
                    ].map(ch => (
                      <div key={ch.name} className="chapter-row">
                        <div className="chapter-row-left">
                          <div className={`ch-dot ch-dot-${ch.dot}`} />
                          <span className="ch-name">{ch.name}</span>
                        </div>
                        <span className="ch-pct">{ch.pct}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar" id="trust">
        <div className="trust-bar-inner">
          {[
            { icon: '🔐', title: 'Bank-Grade Security', sub: 'AES-256 at rest & in transit' },
            { icon: '📋', title: 'SEBI ICDR Aligned', sub: 'Schedule VI & Reg. 25 validation' },
            { icon: '🔍', title: 'Official API Integration', sub: 'MCA21 & GSTIN verified' },
            { icon: '🔏', title: 'Cryptographic Hashing', sub: 'SHA-256 document fingerprinting' },
            { icon: '📊', title: 'Full Audit Trail', sub: 'Immutable timestamped history' },
          ].map(t => (
            <div key={t.title} className="trust-item">
              <div className="trust-icon">{t.icon}</div>
              <div>
                <div className="trust-text">{t.title}</div>
                <div className="trust-sub">{t.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section className="features-section" id="features">
        <div className="section-inner">
          <div className="section-eyebrow">Platform Capabilities</div>
          <h2 className="section-title">Built for Every Stakeholder in the IPO Lifecycle</h2>
          <div className="features-grid">
            {[
              {
                icon: '🏗️', iconBg: 'rgba(31,58,99,0.07)',
                title: 'Three-Stage Architecture',
                desc: 'AI drafts the narrative, Hardcoded Rules deterministically validate it, and a Human intermediary certifies. Nothing is trusted to AI alone.'
              },
              {
                icon: '🤖', iconBg: 'rgba(169,118,47,0.08)',
                title: 'Two-Step AI (Generator + Verifier)',
                desc: 'Built on real regulatory outcomes. The Generator drafts based on SEBI RHPs; the Verifier critiques based on historical SEBI Observation Letters.'
              },
              {
                icon: '🛡️', iconBg: 'rgba(46,125,91,0.08)',
                title: 'Hardcoded Rules Engine',
                desc: 'Critical requirements are never left to probabilistic models. Deterministic rules run before and after drafting to guarantee baseline compliance.'
              },
              {
                icon: '🤝', iconBg: 'rgba(179,64,44,0.07)',
                title: 'Dual Interface',
                desc: 'A guided, plain-language portal for the Company Promoter, and a professional clause-by-clause workbench for the reviewing Intermediary.'
              },
            ].map(f => (
              <div key={f.title} className="feature-card card">
                <div className="feature-icon" style={{ background: f.iconBg }}>{f.icon}</div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <div className="footer-inner">
          <div className="footer-left">
            <div className="logo-mark" style={{ width: 28, height: 28, borderRadius: '7px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7l9 5 9-5-9-5z" fill="var(--c-bronze-lt)" />
                <path d="M3 12l9 5 9-5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <span className="footer-brand">REG-AI</span>
          </div>
          <span className="footer-copy">© 2025 REG-AI. Built for the SEBI Innovation Hackathon.</span>
          <div style={{ display: 'flex', gap: 'var(--sp-3)' }}>
            <Link to="/portal" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, textDecoration: 'none' }}>Company Portal</Link>
            <Link to="/workbench" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, textDecoration: 'none' }}>Workbench</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
