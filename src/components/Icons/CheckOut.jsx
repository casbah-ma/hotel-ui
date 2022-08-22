const Checkout = function ({ width, height, color }) {
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
      enable-background="new 0 0 100 100"
      xmlSpace="preserve"
    >
      <path d="M90.497,49.974c-0.001-0.154-0.016-0.309-0.046-0.461c-0.018-0.086-0.049-0.166-0.074-0.249  c-0.021-0.072-0.038-0.146-0.066-0.216c-0.043-0.103-0.099-0.195-0.152-0.29c-0.027-0.046-0.047-0.096-0.076-0.141  c-0.095-0.141-0.202-0.272-0.322-0.392L72.907,31.371c-0.977-0.977-2.559-0.977-3.535,0c-0.977,0.976-0.977,2.559,0,3.535  L81.964,47.5H37.833c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5h44.133L69.37,65.094c-0.977,0.976-0.977,2.559,0,3.535  c0.488,0.488,1.128,0.732,1.768,0.732s1.279-0.244,1.768-0.732l16.862-16.86c0.015-0.015,0.025-0.033,0.039-0.048  c0.099-0.104,0.191-0.213,0.271-0.332c0.048-0.071,0.081-0.148,0.121-0.224c0.037-0.068,0.078-0.134,0.109-0.206  c0.037-0.091,0.06-0.185,0.086-0.278c0.018-0.063,0.043-0.124,0.056-0.189c0.032-0.162,0.05-0.326,0.05-0.49  c0-0.001,0-0.001,0-0.001C90.5,49.991,90.498,49.982,90.497,49.974z M59.646,28.166c-1.381,0-2.5,1.119-2.5,2.5v5.167  c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-5.167C62.146,29.285,61.026,28.166,59.646,28.166z M59.646,61.002  c-1.381,0-2.5,1.119-2.5,2.5v22.863c0,1.379-1.121,2.5-2.5,2.5H17c-1.379,0-2.5-1.121-2.5-2.5v-72.73c0-1.379,1.121-2.5,2.5-2.5  h37.646c1.379,0,2.5,1.121,2.5,2.5v8.364c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-8.364c0-4.136-3.364-7.5-7.5-7.5H17  c-4.136,0-7.5,3.364-7.5,7.5v72.73c0,4.136,3.364,7.5,7.5,7.5h37.646c4.136,0,7.5-3.364,7.5-7.5V63.502  C62.146,62.121,61.026,61.002,59.646,61.002z"></path>
    </svg>
  )
}

export default Checkout
