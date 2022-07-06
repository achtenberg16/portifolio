import * as React from "react"


const SvgComponent = (props: any) => (
  <svg
    width={17}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.957 26.669c-1.126 0-2.075-.37-2.847-1.11C.37 24.82 0 23.87 0 22.712c0-1.157.37-2.09 1.11-2.798.772-.74 1.72-1.11 2.846-1.11 1.126 0 2.06.37 2.799 1.11.772.74 1.158 1.673 1.158 2.798 0 1.159-.386 2.107-1.158 2.847-.74.74-1.673 1.11-2.798 1.11ZM12.987 33.927V0h3.322v33.927h-3.322Z"
      fill="#FFC36A"
    />
  </svg>
)

export default SvgComponent
