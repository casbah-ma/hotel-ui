const Tv = function ({ width, height, color }) {
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
      style={{ 'enableBackground`': 'new 0 0 100 100' }}
      xmlSpace="preserve"
    >
      <g>
        <path d="M24.1,73.3h-2.8c-0.4,0-0.8,0.1-1.1,0.4L11.1,82h2.5c0.4,0,0.8-0.1,1.1-0.4l6-5.3l0.2-0.2c0,0,0,0-0.1,0.1l-1.7,3.5h1.3   c0.3,0,0.6-0.2,0.7-0.4l2.6-5.7L24.1,73.3z"></path>
        <path d="M76.7,73.3h2.8c0.4,0,0.8,0.1,1.1,0.4l9.1,8.3h-2.5c-0.4,0-0.8-0.1-1.1-0.4l-6-5.3l-0.2-0.2c0,0,0,0,0.1,0.1l1.7,3.5h-1.3   c-0.3,0-0.6-0.2-0.7-0.4l-2.6-5.7L76.7,73.3z"></path>
      </g>
      <path d="M2.2,18v55.4h96.4V18H2.2z M96.5,20v49.5H4.2V20H96.5z"></path>
    </svg>
  )
}

export default Tv
