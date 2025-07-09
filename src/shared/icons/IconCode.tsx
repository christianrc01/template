import { type SVGProps } from "react";

function IconCode({
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
        d="M6.66667 8.33334L5 10L6.66667 11.6667"
        stroke={stroke}
        strokeWidth="1.25"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.3333 8.33334L14.9999 10L13.3333 11.6667"
        stroke={stroke}
        strokeWidth="1.25"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.0001 18.3333C14.6025 18.3333 18.3334 14.6024 18.3334 9.99999C18.3334 5.39762 14.6025 1.66666 10.0001 1.66666C5.39771 1.66666 1.66675 5.39762 1.66675 9.99999C1.66675 14.6024 5.39771 18.3333 10.0001 18.3333Z"
        stroke={stroke}
        strokeWidth="1.25"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.8334 8.05832L9.16675 11.9417"
        stroke={stroke}
        strokeWidth="1.25"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default IconCode;
