import { type SVGProps } from "react";

function IconCalendarNew({
  fill = "none",
  stroke = "currentColor",
  className = "w-6 h-6",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 21"
      fill={fill}
      className={className}
      {...props}
    >
      <path
        d="M7.38086 2.16675V4.66675"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0476 2.16675V4.66675"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.63086 8.07495H17.7975"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.2142 7.58341V14.6667C18.2142 17.1667 16.9642 18.8334 14.0476 18.8334H7.3809C4.46423 18.8334 3.21423 17.1667 3.21423 14.6667V7.58341C3.21423 5.08341 4.46423 3.41675 7.3809 3.41675H14.0476C16.9642 3.41675 18.2142 5.08341 18.2142 7.58341Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7932 11.9167H13.8007"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7932 14.4167H13.8007"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7104 11.9167H10.7179"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7104 14.4167H10.7179"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.6262 11.9167H7.63369"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.6262 14.4167H7.63369"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconCalendarNew;
