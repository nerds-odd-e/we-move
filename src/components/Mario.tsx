import React from 'react';

export const Mario: React.FC = () => {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      {/* Mario's red cap */}
      <path
        d="M30 40 H70 V50 H30Z"
        fill="#FF0000"
      />
      {/* Mario's face */}
      <circle
        cx="50"
        cy="60"
        r="20"
        fill="#FFD700"
      />
      {/* Mario's mustache */}
      <path
        d="M40 65 H60"
        stroke="black"
        strokeWidth="2"
      />
      {/* Mario's overalls */}
      <rect
        x="40"
        y="80"
        width="20"
        height="20"
        fill="#0000FF"
      />
    </svg>
  );
}; 