// Alarm
const Alarm = function ({ width, height, color, className, style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      x="0px"
      y="0px"
      width={width}
      height={height}
      fill={color}
      className={className}
      style={style}
    >
      <g>
        <path d="M57,10H7a5.006,5.006,0,0,0-5,5V45a5.006,5.006,0,0,0,5,5H8v3a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V50H46v3a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V50h1a5.006,5.006,0,0,0,5-5V15A5.006,5.006,0,0,0,57,10ZM16,52H10V50h6Zm38,0H48V50h6Zm6-7a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V33a3,3,0,0,1,3-3H57a3,3,0,0,1,3,3Zm0-15.974A4.948,4.948,0,0,0,57,28H7a4.948,4.948,0,0,0-3,1.026V15a3,3,0,0,1,3-3H57a3,3,0,0,1,3,3Z"></path>
        <rect x="13" y="32" width="2" height="6"></rect>
        <rect x="13" y="40" width="2" height="6"></rect>
        <rect x="29" y="34" width="2" height="2"></rect>
        <rect x="29" y="42" width="2" height="2"></rect>
        <path d="M25,32H19v2h5v4H19a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6V44H20V40h5a1,1,0,0,0,1-1V33A1,1,0,0,0,25,32Z"></path>
        <path d="M40,44H36V40H34v5a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V40H40Z"></path>
        <path d="M41,32H35a1,1,0,0,0-1,1v5h2V34h4v4h2V33A1,1,0,0,0,41,32Z"></path>
        <path d="M51,44H47V40H45v5a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V40H51Z"></path>
        <path d="M52,32H46a1,1,0,0,0-1,1v5h2V34h4v4h2V33A1,1,0,0,0,52,32Z"></path>
        <path d="M42,16H22a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V18A2,2,0,0,0,42,16ZM22,22V18H42v4Z"></path>
      </g>
    </svg>
  )
}

export default Alarm
