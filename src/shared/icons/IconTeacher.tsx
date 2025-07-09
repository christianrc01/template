import { type SVGProps } from "react";

function IconTeacher({
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
        d="M8.51778 2.10833L3.50111 5.38333C1.89278 6.43333 1.89278 8.78333 3.50111 9.83333L8.51778 13.1083C9.41778 13.7 10.9011 13.7 11.8011 13.1083L16.7928 9.83333C18.3928 8.78333 18.3928 6.44167 16.7928 5.39167L11.8011 2.11667C10.9011 1.51667 9.41778 1.51667 8.51778 2.10833Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.83444 10.9L4.82611 14.8083C4.82611 15.8667 5.64278 17 6.64278 17.3333L9.30111 18.2167C9.75944 18.3667 10.5178 18.3667 10.9844 18.2167L13.6428 17.3333C14.6428 17 15.4594 15.8667 15.4594 14.8083V10.9417"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9761 12.5V7.5"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconTeacher;
