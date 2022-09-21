const TripleBedroom = function ({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width} // added size here
      height={height}
      fill={color} // added color here
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      style="enable-background:new 0 0 100 100;"
    >
      <g>
        <g>
          <path d="M95,33h-5.1c1.3-1.3,2.1-3,2.1-5c0-3.9-3.1-7-7-7s-7,3.1-7,7c0,2,0.8,3.7,2.1,5H75v30h3v16h14V63h3V33z M80,28    c0-2.8,2.2-5,5-5s5,2.2,5,5s-2.2,5-5,5S80,30.8,80,28z M90,77H80V63h10V77z M93,61h-1H78h-1V35h16V61z" />
        </g>
        <g>
          <path d="M25,33h-5.1c1.3-1.3,2.1-3,2.1-5c0-3.9-3.1-7-7-7s-7,3.1-7,7c0,2,0.8,3.7,2.1,5H5v30h3v16h14V63h3V33z M10,28    c0-2.8,2.2-5,5-5s5,2.2,5,5s-2.2,5-5,5S10,30.8,10,28z M20,77H10V63h10V77z M23,61h-1H8H7V35h16V61z" />
        </g>
        <g>
          <path d="M51,33h-5.1c1.3-1.3,2.1-3,2.1-5c0-3.9-3.1-7-7-7s-7,3.1-7,7c0,2,0.8,3.7,2.1,5H31v30h3v16h14V63h3V33z M36,28    c0-2.8,2.2-5,5-5s5,2.2,5,5s-2.2,5-5,5S36,30.8,36,28z M46,77H36V63h10V77z M49,61h-1H34h-1V35h16V61z" />
        </g>
        <g>
          <polygon points="71,49 64,49 64,42 62,42 62,49 55,49 55,51 62,51 62,58 64,58 64,51 71,51   " />
        </g>
      </g>
    </svg>
  )
}

export default TripleBedroom
