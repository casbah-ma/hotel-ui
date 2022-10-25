const FamilyRooms = function ({ width, height, color }) {
  return (
    <svg
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
    >
      <g>
        <path d="M30.631,16.709c0-4.683-3.797-8.48-8.48-8.48s-8.48,3.797-8.48,8.48s3.797,8.48,8.48,8.48S30.631,21.392,30.631,16.709z    M22.151,12.685c2.219,0,4.024,1.805,4.024,4.024s-1.805,4.024-4.024,4.024s-4.024-1.805-4.024-4.024S19.932,12.685,22.151,12.685z   "></path>
        <path d="M18.804,34.402h9.816c0.715,0,1.335,0.484,1.508,1.177l4.785,19.12c0.021,0.082,0.055,0.157,0.084,0.234   c0.392,1.05,1.509,1.661,2.618,1.386c1.193-0.299,1.919-1.509,1.621-2.702l-4.785-19.12c-0.67-2.679-3.068-4.552-5.831-4.552   h-9.816c-4.599,0-8.593,3.117-9.71,7.579l-4.07,27.446c-0.179,1.217,0.66,2.35,1.878,2.53c0.111,0.016,0.221,0.024,0.33,0.024   c1.086,0,2.038-0.795,2.201-1.902l0.18-1.216l3.83-25.898C14.095,36.086,16.286,34.402,18.804,34.402z"></path>
        <path d="M16.002,62.023c-0.47,0.408-0.773,1.003-0.773,1.675v25.185c0,1.23,0.998,2.228,2.228,2.228   c1.23,0,2.228-0.998,2.228-2.228V63.698c0-1.223-0.986-2.214-2.207-2.226c-0.007,0-0.014-0.002-0.021-0.002   C16.898,61.47,16.394,61.683,16.002,62.023z"></path>
        <path d="M26.845,91.11c1.23,0,2.228-0.998,2.228-2.228V63.698c0-1.23-0.998-2.228-2.228-2.228c-1.23,0-2.228,0.998-2.228,2.228   v25.185C24.617,90.113,25.615,91.11,26.845,91.11z"></path>
        <path d="M77.849,12.685c-4.683,0-8.48,3.797-8.48,8.48s3.797,8.48,8.48,8.48s8.48-3.797,8.48-8.48S82.532,12.685,77.849,12.685z    M77.849,25.189c-2.219,0-4.024-1.805-4.024-4.024s1.805-4.024,4.024-4.024s4.024,1.805,4.024,4.024S80.068,25.189,77.849,25.189z"></path>
        <path d="M90.944,39.939l-0.038-0.186c-1.117-4.462-5.111-7.579-9.71-7.579h-6.695c-4.599,0-8.593,3.117-9.688,7.498l-4.027,13.865   c-0.343,1.181,0.337,2.417,1.519,2.761c1.128,0.326,2.295-0.282,2.699-1.365c0.02-0.052,0.046-0.1,0.062-0.154l4.049-13.945   c0.62-2.475,2.835-4.205,5.387-4.205h6.695c2.523,0,4.717,1.689,5.365,4.121l3.809,23.651l0.202,1.251   c0.176,1.094,1.123,1.873,2.197,1.873c0.117,0,0.236-0.009,0.357-0.028c1.214-0.196,2.041-1.339,1.845-2.554L90.944,39.939z"></path>
        <path d="M82.522,61.472c-1.22,0.012-2.207,1.003-2.207,2.226v25.185c0,1.23,0.998,2.228,2.228,2.228   c1.23,0,2.228-0.998,2.228-2.228V63.698c0-0.672-0.303-1.267-0.773-1.675c-0.391-0.34-0.896-0.553-1.454-0.553   C82.535,61.47,82.529,61.472,82.522,61.472z"></path>
        <path d="M75.383,88.883V63.698c0-1.23-0.998-2.228-2.228-2.228c-1.23,0-2.228,0.998-2.228,2.228v25.185   c0,1.23,0.998,2.228,2.228,2.228C74.385,91.11,75.383,90.113,75.383,88.883z"></path>
        <path d="M57.725,54.316c0-4.416-3.593-8.008-8.009-8.008s-8.009,3.592-8.009,8.008s3.593,8.009,8.009,8.009   S57.725,58.732,57.725,54.316z M49.716,50.765c1.959,0,3.553,1.594,3.553,3.552c0,1.959-1.594,3.553-3.553,3.553   c-1.959,0-3.553-1.594-3.553-3.553C46.163,52.358,47.757,50.765,49.716,50.765z"></path>
        <path d="M59.172,70.031l2.745-6.033c0.51-1.119,0.015-2.441-1.105-2.95c-1.119-0.509-2.44-0.016-2.95,1.105l-2.736,6.016   c-0.17,0.271-1.31,0.92-3.128,0.92h-4.562c-1.817,0-2.957-0.649-3.118-0.903l-2.746-6.033c-0.51-1.122-1.833-1.615-2.95-1.105   c-1.12,0.509-1.615,1.831-1.105,2.95l2.746,6.033c0.971,2.134,3.787,3.514,7.173,3.514h4.562   C55.384,73.545,58.2,72.166,59.172,70.031z"></path>
        <path d="M48.745,89.543V77.691c0-1.23-0.998-2.228-2.228-2.228c-1.23,0-2.228,0.998-2.228,2.228v11.852   c0,1.23,0.998,2.228,2.228,2.228C47.747,91.771,48.745,90.773,48.745,89.543z"></path>
        <path d="M52.916,75.463c-1.23,0-2.228,0.998-2.228,2.228v11.852c0,1.23,0.998,2.228,2.228,2.228s2.228-0.998,2.228-2.228V77.691   C55.144,76.46,54.147,75.463,52.916,75.463z"></path>
      </g>
    </svg>
  )
}

export default FamilyRooms