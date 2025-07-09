import { type SVGProps } from "react";

function IconArrowBold({
  fill = "currentColor",
  className = "w-6 h-6",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 12"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M9.48274 6.99L7.87774 5.385L6.89774 4.4C6.48274 3.985 5.80774 3.985 5.39274 4.4L2.80274 6.99C2.46274 7.33 2.70774 7.91 3.18274 7.91H5.98774H9.10274C9.58274 7.91 9.82274 7.33 9.48274 6.99Z"
        fill={fill}
      />
    </svg>
  );
}

export default IconArrowBold;
