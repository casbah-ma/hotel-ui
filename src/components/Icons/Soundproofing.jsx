const Soundproofing = function ({ width, height, color }) {
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
      <g>
        <path d="M4,29v7a3,3,0,0,0,3,3h6V26H7A3,3,0,0,0,4,29Z" />
        <path d="M27.47,17.86a1,1,0,0,0-1,0l-11,7.34a1,1,0,0,0-.45.83v12.8a1,1,0,0,0,.49.86l11,6.6A1,1,0,0,0,28,45.47V18.74A1,1,0,0,0,27.47,17.86Z" />
        <path d="M41,31H34a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z" />
        <path d="M34,27a1,1,0,0,0,.58-.19l7-5a1,1,0,0,0-1.16-1.62l-7,5A1,1,0,0,0,34,27Z" />
        <path d="M34.58,37.19a1,1,0,1,0-1.16,1.62l7,5A1,1,0,0,0,41,44a1,1,0,0,0,.58-1.81Z" />
        <path d="M58,4H52c0,4.66-4,4.66-4,9.33s4,4.66,4,9.33S48,27.33,48,32s4,4.67,4,9.33S48,46,48,50.66s4,4.67,4,9.34v.5h6a2,2,0,0,0,2-2V6A2,2,0,0,0,58,4Z" />
      </g>
    </svg>
  )
}

export default Soundproofing
