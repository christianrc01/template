import type { SVGProps } from "react";

function IconCalendar({
  fill = "none",
  stroke = "currentColor",
  className = "w-6 h-6",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 20"
      fill={fill}
      className={className}
      {...props}
    >
      <path
        d="M6.95227 1.66666V4.16666"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.619 1.66666V4.16666"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.20227 7.57501H17.3689"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.7856 7.08332V14.1667C17.7856 16.6667 16.5356 18.3333 13.619 18.3333H6.95231C4.03564 18.3333 2.78564 16.6667 2.78564 14.1667V7.08332C2.78564 4.58332 4.03564 2.91666 6.95231 2.91666H13.619C16.5356 2.91666 17.7856 4.58332 17.7856 7.08332Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2818 11.4167H10.2893"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.19761 11.4167H7.2051"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.19761 13.9167H7.2051"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconCalendar;
