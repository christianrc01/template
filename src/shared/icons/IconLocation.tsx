import { type SVGProps } from "react";

function IconLocation({
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
        d="M10.7143 11.1917C12.1502 11.1917 13.3143 10.0276 13.3143 8.59167C13.3143 7.15573 12.1502 5.99167 10.7143 5.99167C9.27832 5.99167 8.11426 7.15573 8.11426 8.59167C8.11426 10.0276 9.27832 11.1917 10.7143 11.1917Z"
        stroke={stroke}
        strokeWidth="1.25"
      />
      <path
        d="M3.73092 7.07499C5.37259 -0.141675 16.0643 -0.133341 17.6976 7.08333C18.6559 11.3167 16.0226 14.9 13.7143 17.1167C12.0393 18.7333 9.38926 18.7333 7.70592 17.1167C5.40592 14.9 2.77259 11.3083 3.73092 7.07499Z"
        stroke={stroke}
        strokeWidth="1.25"
      />
    </svg>
  );
}

export default IconLocation;
