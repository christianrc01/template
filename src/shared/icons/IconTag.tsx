import { type SVGProps } from "react";

function IconTag({
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
        d="M15 15.7167H14.3667C13.7 15.7167 13.0667 15.975 12.6 16.4417L11.175 17.85C10.525 18.4917 9.46668 18.4917 8.81668 17.85L7.39166 16.4417C6.925 15.975 6.28333 15.7167 5.625 15.7167H5C3.61667 15.7167 2.5 14.6083 2.5 13.2417V4.14166C2.5 2.77499 3.61667 1.66666 5 1.66666H15C16.3833 1.66666 17.5 2.77499 17.5 4.14166V13.2333C17.5 14.6 16.3833 15.7167 15 15.7167Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0584 7.45834C10.0251 7.45834 9.97504 7.45834 9.93337 7.45834C9.05837 7.42501 8.3667 6.71668 8.3667 5.83334C8.3667 4.93334 9.09171 4.20834 9.99171 4.20834C10.8917 4.20834 11.6167 4.94168 11.6167 5.83334C11.6251 6.71668 10.9334 7.43334 10.0584 7.45834Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.70833 9.96667C6.59999 10.7083 6.59999 11.9167 7.70833 12.6583C8.96666 13.5 11.0333 13.5 12.2917 12.6583C13.4 11.9167 13.4 10.7083 12.2917 9.96667C11.0333 9.13334 8.97499 9.13334 7.70833 9.96667Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconTag;
