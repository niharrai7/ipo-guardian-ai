import React from 'react';

const StatusDot = ({ status = 'green', size = 8 }) => {
  const colorMap = {
    red: 'var(--color-blocked-red)',
    amber: 'var(--color-flag-amber)',
    green: 'var(--color-cleared-green)',
  };

  const color = colorMap[status] || colorMap.green;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color,
        flexShrink: 0,
        boxShadow: `0 0 0 2px ${color}30`
      }}
      aria-label={`Status: ${status}`}
      title={`Status: ${status}`}
    />
  );
};

export default StatusDot;
