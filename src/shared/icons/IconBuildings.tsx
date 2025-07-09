import { type SVGProps } from "react";

function IconBuildings({
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
        d="M11.2619 18.8334H4.59528C2.92861 18.8334 2.09528 18.0001 2.09528 16.3334V9.66675C2.09528 8.00008 2.92861 7.16675 4.59528 7.16675H8.76194V16.3334C8.76194 18.0001 9.59528 18.8334 11.2619 18.8334Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.8536 3.83325C8.78693 4.08325 8.76194 4.35825 8.76194 4.66659V7.16659H4.59528V5.49992C4.59528 4.58325 5.34528 3.83325 6.26194 3.83325H8.8536Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0953 7.16675V11.3334"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4286 7.16675V11.3334"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5953 14.6667H12.9286C12.4703 14.6667 12.0953 15.0417 12.0953 15.5001V18.8334H15.4286V15.5001C15.4286 15.0417 15.0536 14.6667 14.5953 14.6667Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.42859 11.3333V14.6666"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.7619 16.3334V4.66675C8.7619 3.00008 9.59524 2.16675 11.2619 2.16675H16.2619C17.9286 2.16675 18.7619 3.00008 18.7619 4.66675V16.3334C18.7619 18.0001 17.9286 18.8334 16.2619 18.8334H11.2619C9.59524 18.8334 8.7619 18.0001 8.7619 16.3334Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconBuildings;
