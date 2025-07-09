import { type SVGProps } from "react";

function IconQuestion({
  fill = "none",
  stroke = "currentColor",
  className = "w-6 h-6",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 16"
      fill={fill}
      className={className}
      {...props}
    >
      <path
        d="M11.8333 12.2867H9.16659L6.19991 14.26C5.75991 14.5533 5.16659 14.24 5.16659 13.7067V12.2867C3.16659 12.2867 1.83325 10.9534 1.83325 8.95337V4.95333C1.83325 2.95333 3.16659 1.62 5.16659 1.62H11.8333C13.8333 1.62 15.1666 2.95333 15.1666 4.95333V8.95337C15.1666 10.9534 13.8333 12.2867 11.8333 12.2867Z"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.49996 7.57333V7.43336C8.49996 6.98003 8.77998 6.74002 9.05998 6.54668C9.33331 6.36002 9.60661 6.12002 9.60661 5.68002C9.60661 5.06669 9.11329 4.57333 8.49996 4.57333C7.88663 4.57333 7.39331 5.06669 7.39331 5.68002"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.49708 9.16668H8.50308"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconQuestion;
