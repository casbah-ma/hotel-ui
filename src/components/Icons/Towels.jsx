const Towels = function ({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
      viewBox="0 0 64 64"
      x="0px"
      y="0px"
    >
      <g data-name="04-Towels">
        <rect x="47" y="56" width="10" height="2"></rect>
        <path d="M57,64H26a4,4,0,0,1-2.643-7A4,4,0,0,1,26,50H57a7,7,0,0,1,0,14ZM26,58a2,2,0,0,0,0,4H57a5,5,0,0,0,0-10H26a2,2,0,0,0,0,4H41v2Z"></path>
        <path d="M60,52H29a7,7,0,0,1,0-14H60a4,4,0,0,1,2.643,7A4,4,0,0,1,60,52ZM29,40a5,5,0,0,0,0,10H60a2,2,0,0,0,0-4H29V44H60a2,2,0,0,0,0-4Z"></path>
        <rect x="43" y="56" width="2" height="2"></rect>
        <path d="M46,16H39V14h6V5H43v6a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V5H5v9h6v2H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H8A1,1,0,0,1,9,4v6H41V4a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V15A1,1,0,0,1,46,16Z"></path>
        <path d="M8.707,7.707,7.293,6.293,10,3.586V2H2V3.586L4.707,6.293,3.293,7.707l-3-3A1,1,0,0,1,0,4V1A1,1,0,0,1,1,0H11a1,1,0,0,1,1,1V4a1,1,0,0,1-.293.707Z"></path>
        <path d="M46.707,7.707,45.293,6.293,48,3.586V2H40V3.586l2.707,2.707L41.293,7.707l-3-3A1,1,0,0,1,38,4V1a1,1,0,0,1,1-1H49a1,1,0,0,1,1,1V4a1,1,0,0,1-.293.707Z"></path>
        <path d="M20,46H11a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H39a1,1,0,0,1,1,1V36H38V12H12V44h8Z"></path>
        <path d="M11,33H8a1,1,0,0,1-1-1V15H9V31h2Z"></path>
        <rect x="11" y="40" width="9" height="2"></rect>
        <rect x="10" y="45" width="2" height="4"></rect>
        <rect x="14" y="45" width="2" height="4"></rect>
        <rect x="18" y="45" width="2" height="4"></rect>
        <path d="M34,27C20.512,27,15.143,15.53,15.09,15.414l1.82-.83A19,19,0,0,0,34,25Z"></path>
        <path d="M34,33C20.512,33,15.143,21.53,15.09,21.414l1.82-.83A19,19,0,0,0,34,31Z"></path>
      </g>
    </svg>
  )
}

export default Towels
