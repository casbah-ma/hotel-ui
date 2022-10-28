const RightChevron = function ({ width, height, color }) {
  return (
    <svg
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      version="1.1"
      x="0px"
      y="0px"
    >
      <g>
        <path d="M12.5,2c-5.795,0 -10.5,4.705 -10.5,10.5c0,5.795 4.705,10.5 10.5,10.5c5.795,0 10.5,-4.705 10.5,-10.5c0,-5.795 -4.705,-10.5 -10.5,-10.5Zm0,1c5.243,0 9.5,4.257 9.5,9.5c0,5.243 -4.257,9.5 -9.5,9.5c-5.243,0 -9.5,-4.257 -9.5,-9.5c0,-5.243 4.257,-9.5 9.5,-9.5Zm2.293,9.5l-4.647,-4.646c-0.195,-0.196 -0.195,-0.512 0,-0.708c0.196,-0.195 0.512,-0.195 0.708,0l5,5c0.195,0.196 0.195,0.512 0,0.708l-5,5c-0.196,0.195 -0.512,0.195 -0.708,0c-0.195,-0.196 -0.195,-0.512 0,-0.708l4.647,-4.646Z"></path>
      </g>
    </svg>
  )
}

export default RightChevron
