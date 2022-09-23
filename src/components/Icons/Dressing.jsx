const Dressing = function ({ width, height, color }) {
  return (
    <svg
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      x="0px"
      y="0px"
    >
      <g data-name="Layer 2">
        <path d="M88.09,7.33H11.91a1,1,0,0,0-1,1V91.67a1,1,0,0,0,2,0V72.19H31.84V91.67a1,1,0,1,0,2,0V59h9.48a2.54,2.54,0,0,0-.12.73,1,1,0,0,0,2,0,.74.74,0,1,1,.74.74,1,1,0,0,0-1,1v.36l-8.63,4.77A1.42,1.42,0,0,0,37,69.23H63a1.42,1.42,0,0,0,.69-2.67L55.48,62a2.76,2.76,0,0,0,1.3-2.33,2.54,2.54,0,0,0-.12-.73h9.5V91.67a1,1,0,0,0,2,0V72.19H87.09V91.67a1,1,0,0,0,2,0V8.33A1,1,0,0,0,88.09,7.33ZM77.63,66.88A2.62,2.62,0,0,0,76,66.3H68.8a2.74,2.74,0,0,0-.64.08V52.94H87.09V66.38a2.59,2.59,0,0,0-.63-.08h-7.2A2.59,2.59,0,0,0,77.63,66.88Zm9.46-15.94H78.63V49.69a.63.63,0,0,1,.63-.63h7.2a.63.63,0,0,1,.63.63ZM68.16,49.69a.64.64,0,0,1,.64-.63H76a.64.64,0,0,1,.64.63v1.25H68.16Zm18.93-2.63H78.63V45.8a.63.63,0,0,1,.63-.63h7.2a.63.63,0,0,1,.63.63Zm-10.46,0H68.16V45.8a.64.64,0,0,1,.64-.63H76a.64.64,0,0,1,.64.63Zm9.83-3.89h-7.2a2.59,2.59,0,0,0-1.63.58A2.62,2.62,0,0,0,76,43.17H68.8a2.74,2.74,0,0,0-.64.08V33.7H87.09v9.55A2.59,2.59,0,0,0,86.46,43.17Zm.63-11.47H78.63V30.45a.64.64,0,0,1,.63-.64h7.2a.64.64,0,0,1,.63.64Zm0-3.8a2.59,2.59,0,0,0-.63-.09h-7.2a2.64,2.64,0,0,0-2.63,2.64V31.7H68.16V9.33H87.09ZM66.16,19.28H33.84v-10H66.16ZM21.37,31.7H12.91V30.45a.64.64,0,0,1,.63-.64h7.2a.64.64,0,0,1,.63.64Zm-8.46,2H31.84V47.14a2.74,2.74,0,0,0-.64-.08H24a2.62,2.62,0,0,0-1.64.58,2.59,2.59,0,0,0-1.63-.58h-7.2a2.59,2.59,0,0,0-.63.08Zm10.46,16a.64.64,0,0,1,.64-.63H31.2a.64.64,0,0,1,.64.63v1.25H23.37Zm8.47-18H23.37V30.45a.64.64,0,0,1,.64-.64H31.2a.64.64,0,0,1,.64.64ZM12.91,50.94V49.69a.63.63,0,0,1,.63-.63h7.2a.63.63,0,0,1,.63.63v1.25Zm0,14.08a.63.63,0,0,1,.63-.63h7.2a.63.63,0,0,1,.63.63v1.26H12.91Zm7.83-2.63h-7.2a2.59,2.59,0,0,0-.63.08V52.94H31.84V66.38a2.74,2.74,0,0,0-.64-.08H24a2.74,2.74,0,0,0-.64.08V65A2.63,2.63,0,0,0,20.74,62.39ZM31.84,9.33V27.9a2.74,2.74,0,0,0-.64-.09H24a2.63,2.63,0,0,0-1.64.59,2.6,2.6,0,0,0-1.63-.59h-7.2a2.59,2.59,0,0,0-.63.09V9.33ZM12.91,68.93a.63.63,0,0,1,.63-.63h7.2a.63.63,0,0,1,.63.63v1.26H12.91Zm10.46,1.26V68.93A.64.64,0,0,1,24,68.3H31.2a.64.64,0,0,1,.64.63v1.26Zm15.86-3L46,63.51l6.72,3.72Zm17,0a1.54,1.54,0,0,0-.62-.67l-3.52-2,2-1.1,6.72,3.72Zm-1.43-7.54a.74.74,0,0,1-.74.74,1,1,0,0,0-1,1v.36l-3,1.68L47.38,62a2.76,2.76,0,0,0,1.3-2.33,2.54,2.54,0,0,0-.12-.73h2.86a2.54,2.54,0,0,0-.12.73,1,1,0,0,0,2,0,.74.74,0,0,1,1.48,0ZM33.84,57V21.28H47.37a2.54,2.54,0,0,0-.12.73,1,1,0,1,0,2,0,.74.74,0,1,1,.74.74,1,1,0,0,0-1,1v.36l-8.63,4.77a1.42,1.42,0,0,0,.69,2.67H59a1.42,1.42,0,0,0,.69-2.67l-8.21-4.54A2.76,2.76,0,0,0,52.73,22a2.54,2.54,0,0,0-.12-.73H66.16V57ZM50,25.83l6.72,3.72H43.28Zm18.16,43.1a.64.64,0,0,1,.64-.63H76a.64.64,0,0,1,.64.63v1.26H68.16Zm10.47,1.26V68.93a.63.63,0,0,1,.63-.63h7.2a.63.63,0,0,1,.63.63v1.26Z"></path>
      </g>
    </svg>
  )
}

export default Dressing
