import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      fill="none"
      viewBox="0 0 42 42"
    >
      <rect width="28" height="3" x="14" y="8.5" fill="#111827" rx="1.5"></rect>
      <rect
        width="28"
        height="3"
        x="14"
        y="19.5"
        fill="#111827"
        rx="1.5"
      ></rect>
      <rect
        width="15"
        height="3"
        x="27"
        y="30.5"
        fill="#111827"
        rx="1.5"
      ></rect>
    </svg>
  );
}

export default React.memo(Icon);

