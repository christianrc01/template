import { type SVGProps } from "react";

function IconProfile({
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
        d="M7.63338 9.05832C7.55005 9.04999 7.45005 9.04999 7.35838 9.05832C5.37505 8.99166 3.80005 7.36666 3.80005 5.36666C3.80005 3.32499 5.45005 1.66666 7.50005 1.66666C9.54172 1.66666 11.2 3.32499 11.2 5.36666C11.1917 7.36666 9.61671 8.99166 7.63338 9.05832Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.675 3.33334C15.2916 3.33334 16.5917 4.64168 16.5917 6.25001C16.5917 7.82501 15.3417 9.10834 13.7833 9.16668C13.7167 9.15834 13.6417 9.15834 13.5667 9.16668"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.46672 12.1333C1.45006 13.4833 1.45006 15.6833 3.46672 17.025C5.75839 18.5583 9.51672 18.5583 11.8084 17.025C13.8251 15.675 13.8251 13.475 11.8084 12.1333C9.52506 10.6083 5.76672 10.6083 3.46672 12.1333Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.2833 16.6667C15.8833 16.5417 16.45 16.3 16.9167 15.9417C18.2167 14.9667 18.2167 13.3583 16.9167 12.3833C16.4583 12.0333 15.9 11.8 15.3083 11.6667"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconProfile;
