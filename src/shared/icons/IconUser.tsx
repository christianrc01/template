import { type SVGProps } from "react";

function IconUser({
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
        d="M10 9.99999C12.3012 9.99999 14.1667 8.13451 14.1667 5.83332C14.1667 3.53214 12.3012 1.66666 10 1.66666C7.69885 1.66666 5.83337 3.53214 5.83337 5.83332C5.83337 8.13451 7.69885 9.99999 10 9.99999Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.1583 18.3333C17.1583 15.1083 13.95 12.5 10 12.5C6.05001 12.5 2.84167 15.1083 2.84167 18.3333"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconUser;
