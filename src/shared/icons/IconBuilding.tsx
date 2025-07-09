import { type SVGProps } from "react";

function IconBuilding({
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
        d="M1.69055 18.3333H20.0239"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3406 18.3417V14.625"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3571 9.07501C16.3405 9.07501 15.5238 9.89169 15.5238 10.9084V12.8C15.5238 13.8167 16.3405 14.6333 17.3571 14.6333C18.3738 14.6333 19.1905 13.8167 19.1905 12.8V10.9084C19.1905 9.89169 18.3738 9.07501 17.3571 9.07501Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.60718 18.3333V5.02501C2.60718 3.35001 3.44055 2.50833 5.09889 2.50833H10.2905C11.9489 2.50833 12.7739 3.35001 12.7739 5.02501V18.3333"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.69055 6.875H9.81556"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.69055 10H9.81556"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.73218 18.3333V15.2083"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconBuilding;
