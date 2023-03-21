import React from 'react';

const LoadingIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        className || 'w-10 stroke-green-500'
      } inline-flex aspect-square items-center justify-center overflow-hidden bg-transparent bg-none [shape-rendering:auto]`}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        className="origin-center animate-spin fill-none stroke-inherit"
        cx="50"
        cy="50"
        r="46.8"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="164 56"
       />
    </svg>
  );

export default LoadingIcon;
