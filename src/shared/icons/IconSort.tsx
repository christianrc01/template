import { type SVGProps } from "react";

function IconSort({
  fill = "none",
  stroke = "currentColor",
  className = "w-6 h-6",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={fill}
      className={className}
      {...props}
    >
      <path
        d="M2.5 5.8335H17.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5 10H15"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.33337 14.1665H11.6667"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default IconSort;
