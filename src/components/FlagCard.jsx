import React from 'react';
import { AlertTriangle, XCircle, CheckCircle, ChevronRight } from 'lucide-react';

const FlagCard = ({ type = 'amber', label, explanation, clauseRef, onAction, actionLabel, secondaryAction, secondaryActionLabel }) => {
  const config = {
    amber: {
      cardClass: 'flag-card flag-card-amber',
      color: 'var(--c-amber)',
      primaryBg: 'var(--c-amber)',
      icon: <AlertTriangle size={14} />,
    },
    red: {
      cardClass: 'flag-card flag-card-red',
      color: 'var(--c-red)',
      primaryBg: 'var(--c-red)',
      icon: <XCircle size={14} />,
    },
    green: {
      cardClass: 'flag-card flag-card-green',
      color: 'var(--c-green)',
      primaryBg: 'var(--c-green)',
      icon: <CheckCircle size={14} />,
    },
  };

  const c = config[type] || config.amber;

  return (
    <div className={c.cardClass}>
      <div className="flag-card-head" style={{ color: c.color }}>
        {c.icon}
        <span className="flag-card-label" style={{ color: c.color }}>{label}</span>
      </div>
      <p className="flag-card-body">{explanation}</p>
      {clauseRef && <span className="flag-card-ref">§ {clauseRef}</span>}
      <div className="flag-card-actions">
        {onAction && (
          <button
            className="flag-action-primary"
            style={{ background: c.primaryBg }}
            onClick={onAction}
          >
            {actionLabel} <ChevronRight size={12} />
          </button>
        )}
        {secondaryAction && (
          <button className="flag-action-secondary" onClick={secondaryAction}>
            {secondaryActionLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default FlagCard;
