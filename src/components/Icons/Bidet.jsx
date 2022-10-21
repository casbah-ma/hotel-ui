const bidet = function ({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 66 56"
      version="1.1"
      x="0px"
      y="0px"
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
    >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g
          transform="translate(-297.000000, -423.000000)"
          fill={color}
          fill-rule="nonzero"
        >
          <path d="M303,437 L303,426 C303,425.523319 303.33646,425.112904 303.803884,425.019419 L313.803884,423.019419 C314.422676,422.895661 315,423.368954 315,424 L315,428.719224 L325.757464,426.029857 C326.293259,425.895909 326.836194,426.221669 326.970143,426.757464 C327.104091,427.293259 326.778331,427.836194 326.242536,427.970143 L315,430.780776 L315,437 L358,437 C358.378772,437 358.725035,437.214002 358.894427,437.552786 L362.894427,445.552786 C362.963855,445.691642 363,445.844755 363,446 C363,454.961945 356.06524,462.304191 347.269112,462.953343 L349.727607,472.787322 C350.397351,475.466296 348.768547,478.180969 346.089572,478.850713 C345.692969,478.949863 345.285703,479 344.876894,479 L306,479 C305.447715,479 305,478.552285 305,478 L305,455 C305,452.238576 302.761424,450 300,450 L298,450 C297.447715,450 297,449.552285 297,449 L297,438 C297,437.447715 297.447715,437 298,437 L303,437 Z M305,437 L313,437 L313,425.219804 L305,426.819804 L305,437 Z M360.998234,446.232536 L357.381966,439 L299,439 L299,448 L300,448 C303.865993,448 307,451.134007 307,455 L307,477 L344.876894,477 C345.12218,477 345.366539,476.969918 345.604501,476.910428 C347.211886,476.508581 348.189168,474.879778 347.787322,473.272393 L345.219224,463 L324,463 C323.447715,463 323,462.552285 323,462 C323,461.447715 323.447715,461 324,461 L345.979082,461 C345.99333,460.999689 346.007542,460.999685 346.021709,460.999985 C354.218375,460.988374 360.874074,454.402367 360.998234,446.232536 Z"></path>
        </g>
      </g>
    </svg>
  )
}

export default bidet
