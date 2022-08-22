const Parking = function ({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      style={{ 'enable-background': 'new 0 0 100 10;' }}
      xmlSpace="preserve"
    >
      <path d="M44.5,69.7h-2V30.5h10.6c6.2,0,11.2,5,11.2,11.2s-5,11.2-11.2,11.2h-8.6V69.7z M44.5,50.9h8.6c5.1,0,9.2-4.1,9.2-9.2  s-4.1-9.2-9.2-9.2h-8.6V50.9z"></path>
      <path d="M50.9,83.1c-19,0-34.5-15.5-34.5-34.5s15.5-34.5,34.5-34.5s34.5,15.5,34.5,34.5S69.9,83.1,50.9,83.1z M50.9,16.1  c-17.9,0-32.5,14.6-32.5,32.5c0,17.9,14.6,32.5,32.5,32.5c17.9,0,32.5-14.6,32.5-32.5C83.4,30.7,68.8,16.1,50.9,16.1z"></path>
    </svg>
  )
}

export default Parking
