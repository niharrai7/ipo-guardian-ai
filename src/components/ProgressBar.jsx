import React from 'react';

const ProgressBar = ({ segments = [] }) => {
  // segments should be array of { width: number (percentage), color: string }
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '8px',
      backgroundColor: 'rgba(107, 114, 128, 0.2)', // neutral grey light
      borderRadius: '4px',
      overflow: 'hidden'
    }}>
      {segments.map((seg, i) => (
        <div
          key={i}
          style={{
            width: `${seg.width}%`,
            backgroundColor: seg.color,
            transition: 'width 0.3s ease-in-out'
          }}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
