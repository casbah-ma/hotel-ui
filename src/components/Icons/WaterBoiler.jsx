const WaterBoier = function ({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      x="0px"
      y="0px"
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
    >
      <g>
        <rect x="31" y="30" width="4" height="4"></rect>
        <rect x="31" y="24" width="4" height="4"></rect>
        <rect x="31" y="36" width="4" height="4"></rect>
        <rect x="32" y="4" width="2" height="1"></rect>
        <path d="M46.913,52,44.08,18H21.92L19.087,52ZM42,44h2v2H42Zm0,4h2v2H42ZM29,42V22h8V48H29Z"></path>
        <rect x="31" y="42" width="4" height="4"></rect>
        <path d="M34,7H32a10.014,10.014,0,0,0-9.95,9h21.9A10.014,10.014,0,0,0,34,7Z"></path>
        <polygon points="46.087 18 46.253 20 50 20 54 20 54 18 46.087 18"></polygon>
        <rect x="19" y="54" width="28" height="2"></rect>
        <path d="M16,19a5,5,0,0,0,3.435,4.734L19.913,18H16Z"></path>
        <path d="M49,58H17a1,1,0,0,0,0,2H49a1,1,0,0,0,0-2Z"></path>
        <path d="M52,33a1,1,0,0,0,2,0V22H52Z"></path>
        <path d="M9,6H7A3.568,3.568,0,0,0,8.292,8.7C8.783,9.194,9,9.436,9,10s-.217.8-.708,1.294A3.568,3.568,0,0,0,7,14H9c0-.562.217-.8.708-1.294a3.484,3.484,0,0,0,0-5.416C9.217,6.8,9,6.559,9,6Z"></path>
        <path d="M14,14h2c0-.562.217-.8.708-1.294a3.484,3.484,0,0,0,0-5.416C16.217,6.8,16,6.559,16,6H14A3.568,3.568,0,0,0,15.292,8.7c.491.49.708.732.708,1.294s-.217.8-.708,1.294A3.568,3.568,0,0,0,14,14Z"></path>
      </g>
    </svg>
  )
}

export default WaterBoier
