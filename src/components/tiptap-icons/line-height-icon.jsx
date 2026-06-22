import { memo } from "react";

export const LineHeightIcon = memo(({ className, ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Three horizontal lines */}
      <rect x="7" y="5" width="10" height="2" rx="1" fill="currentColor" />
      <rect x="7" y="11" width="10" height="2" rx="1" fill="currentColor" />
      <rect x="7" y="17" width="10" height="2" rx="1" fill="currentColor" />
      {/* Up arrow (to left of top line) */}
      <g>
        <path
          d="M4 6l2-2 2 2M6 4v6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
      {/* Down arrow (to left of bottom line) */}
      <g>
        <path
          d="M4 18l2 2 2-2M6 20v-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
});

LineHeightIcon.displayName = "LineHeightIcon";
