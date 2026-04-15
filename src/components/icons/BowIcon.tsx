import React from 'react';

type BowIconProps = {
  size?: number;
  className?: string;
};

export const BowIcon: React.FC<BowIconProps> = ({ size = 18, className }) => {
  const s = size;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Bow */}
        <path d="M6 4c6 2 10 8 10 8s-4 6-10 8" />
        <path d="M6 4c1.5 2.5 2.2 5.5 2.2 8S7.5 17.5 6 20" opacity="0.55" />
        {/* String */}
        <path d="M6 4l10 8-10 8" opacity="0.8" />
        {/* Arrow */}
        <path d="M14 12h8" />
        <path d="M20 10l2 2-2 2" />
      </g>
    </svg>
  );
};

