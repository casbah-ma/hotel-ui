//Wardrobe or closet
const Wardrobe = function ({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 512 512"
      x="0px"
      y="0px"
      width={width}
      height={height}
      fill={color}
    >
      <path d="M416.5,10H95.5a26,26,0,0,0-26,26V476a26,26,0,0,0,26,26h321a26,26,0,0,0,26-26V36A26,26,0,0,0,416.5,10Zm14,26V344.46H262V22H416.5A14,14,0,0,1,430.5,36ZM95.5,22H250V344.46H81.5V36A14,14,0,0,1,95.5,22Zm321,468H95.5a14,14,0,0,1-14-14V356.46h349V476A14,14,0,0,1,416.5,490Z"></path>
      <path d="M224,179.51a6,6,0,0,0,6-6V134.87a6,6,0,0,0-12,0v38.64A6,6,0,0,0,224,179.51Z"></path>
      <path d="M287.92,179.51a6,6,0,0,0,6-6V134.87a6,6,0,0,0-12,0v38.64A6,6,0,0,0,287.92,179.51Z"></path>
      <path d="M286,401.31H221.76a6,6,0,1,0,0,12H286a6,6,0,0,0,0-12Z"></path>
    </svg>
  )
}

export default Wardrobe
