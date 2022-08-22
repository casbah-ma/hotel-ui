const Reception = function ({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      x="0px"
      y="0px"
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
    >
      <g data-name="Layer 2">
        <circle cx="16" cy="25" r="3"></circle>
        <path d="M16,16a9.959,9.959,0,0,0-6.581,2.479,1,1,0,0,0,1.322,1.5,7.971,7.971,0,0,1,10.518,0,1,1,0,0,0,1.322-1.5A9.959,9.959,0,0,0,16,16Z"></path>
        <path d="M16,10A15.908,15.908,0,0,0,5.468,13.97a1,1,0,0,0,1.324,1.5,13.952,13.952,0,0,1,18.416,0,1,1,0,0,0,1.324-1.5A15.908,15.908,0,0,0,16,10Z"></path>
        <path d="M29.621,8.735A21.724,21.724,0,0,0,16,4,21.724,21.724,0,0,0,2.379,8.735,1,1,0,0,0,3.621,10.3a19.954,19.954,0,0,1,24.758,0,1,1,0,0,0,1.242-1.569Z"></path>
      </g>
    </svg>
  )
}

export default Reception
