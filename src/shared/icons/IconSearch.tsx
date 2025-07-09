import { type SVGProps } from "react";

function IconSearch({
  fill = "none",
  stroke = "currentColor",
  className = "w-6 h-6",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill={fill}
      className={className}
      {...props}
    >
      <path
        d="M7.66659 14C11.1644 14 13.9999 11.1645 13.9999 7.66668C13.9999 4.16887 11.1644 1.33334 7.66659 1.33334C4.16878 1.33334 1.33325 4.16887 1.33325 7.66668C1.33325 11.1645 4.16878 14 7.66659 14Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6666 14.6667L13.3333 13.3333"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconSearch;
