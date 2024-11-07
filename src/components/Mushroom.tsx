import React from 'react';

export const Mushroom: React.FC = () => {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80">
      {/* Mushroom cap */}
      <path
        d="M10 40 Q40 0 70 40"
        fill="#FF0000"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      {/* Mushroom spots */}
      <circle cx="30" cy="30" r="5" fill="#FFFFFF" />
      <circle cx="50" cy="25" r="5" fill="#FFFFFF" />
      {/* Mushroom stem */}
      <rect
        x="30"
        y="40"
        width="20"
        height="30"
        fill="#FFFFFF"
      />
    </svg>
  );
}; 