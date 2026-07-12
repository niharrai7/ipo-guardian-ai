import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

const CertificationSeal = ({ isLocked = false }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isLocked) {
      setAnimate(false);
      const t = setTimeout(() => setAnimate(true), 10);
      return () => clearTimeout(t);
    }
    setAnimate(false);
  }, [isLocked]);

  if (!isLocked) return null;

  return (
    <div
      className="seal-wrap"
      style={{ animation: animate ? 'stamp 400ms cubic-bezier(0.34,1.56,0.64,1) forwards' : 'none' }}
      title="Certified & Locked"
    >
      <div className="seal-circle">
        <ShieldCheck size={22} strokeWidth={1.8} />
      </div>
      <span className="seal-lbl">Certified</span>
    </div>
  );
};

export default CertificationSeal;
