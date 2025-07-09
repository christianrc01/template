import { type SVGProps } from "react";

function IconPeople({
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
        d="M15 5.96666C14.95 5.95833 14.8917 5.95833 14.8417 5.96666C13.6917 5.92499 12.775 4.98332 12.775 3.81666C12.775 2.62499 13.7334 1.66666 14.925 1.66666C16.1167 1.66666 17.075 2.63332 17.075 3.81666C17.0667 4.98332 16.15 5.92499 15 5.96666Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1417 12.0333C15.2834 12.225 16.5417 12.025 17.425 11.4333C18.6 10.65 18.6 9.36667 17.425 8.58334C16.5334 7.99167 15.2584 7.79166 14.1167 7.99166"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.9749 5.96666C5.0249 5.95833 5.08324 5.95833 5.13324 5.96666C6.28324 5.92499 7.1999 4.98332 7.1999 3.81666C7.1999 2.62499 6.24157 1.66666 5.0499 1.66666C3.85824 1.66666 2.8999 2.63332 2.8999 3.81666C2.90824 4.98332 3.8249 5.92499 4.9749 5.96666Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83328 12.0333C4.69162 12.225 3.43328 12.025 2.54995 11.4333C1.37495 10.65 1.37495 9.36667 2.54995 8.58334C3.44162 7.99167 4.71662 7.79166 5.85828 7.99166"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12.1917C9.95002 12.1833 9.89169 12.1833 9.84169 12.1917C8.69169 12.15 7.77502 11.2083 7.77502 10.0417C7.77502 8.85 8.73336 7.89166 9.92502 7.89166C11.1167 7.89166 12.075 8.85833 12.075 10.0417C12.0667 11.2083 11.15 12.1583 10 12.1917Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.57498 14.8167C6.39998 15.6 6.39998 16.8833 7.57498 17.6667C8.90831 18.5583 11.0916 18.5583 12.425 17.6667C13.6 16.8833 13.6 15.6 12.425 14.8167C11.1 13.9333 8.90831 13.9333 7.57498 14.8167Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconPeople;
