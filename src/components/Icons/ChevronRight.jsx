const ChevronRight = function ({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
    >
      <g data-name="Group">
        <path
          data-name="Path"
          d="M36.9,19.5A2,2,0,0,0,34,22.3L61.7,50,34,77.7a2,2,0,1,0,2.8,2.8L66,51.4a2,2,0,0,0,0-2.8Z"
        ></path>
      </g>
    </svg>
  )
}

export default ChevronRight
