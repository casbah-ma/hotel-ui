const Location = function ({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 95 95"
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
      x="0px"
      y="0px"
    >
      <path d="M60.351,29A12.851,12.851,0,1,0,47.5,41.851,12.866,12.866,0,0,0,60.351,29ZM37.906,29A9.594,9.594,0,1,1,47.5,38.594,9.6,9.6,0,0,1,37.906,29ZM73.239,77.717A98.181,98.181,0,0,0,54.045,75.2c2.262-4.329,4.991-8.662,7.676-12.924C68.5,51.527,75.5,40.409,75.5,29a28,28,0,0,0-56,0c0,11.41,7,22.527,13.779,33.278,2.685,4.262,5.414,8.6,7.676,12.924a98.181,98.181,0,0,0-19.194,2.515c-6.672,1.713-9.915,3.942-9.915,6.812,0,3.058,3.673,5.391,11.228,7.132A114.015,114.015,0,0,0,47.5,94a114.009,114.009,0,0,0,24.426-2.339c7.555-1.741,11.228-4.074,11.228-7.132C83.154,81.659,79.911,79.43,73.239,77.717ZM22.757,29a24.743,24.743,0,1,1,49.486,0c0,10.469-6.75,21.182-13.278,31.542-4.406,6.993-8.93,14.174-11.465,21.4-2.535-7.228-7.059-14.409-11.465-21.4C29.507,50.182,22.757,39.469,22.757,29ZM71.194,88.488A110.745,110.745,0,0,1,47.5,90.743a110.745,110.745,0,0,1-23.694-2.255c-7.1-1.638-8.7-3.452-8.7-3.959,0-.451,1.372-2.092,7.468-3.658A97.648,97.648,0,0,1,42.532,78.4,41.519,41.519,0,0,1,45.9,88.519a1.629,1.629,0,0,0,3.208,0A41.519,41.519,0,0,1,52.468,78.4a97.648,97.648,0,0,1,19.961,2.471c6.1,1.566,7.468,3.207,7.468,3.658C79.9,85.036,78.3,86.85,71.194,88.488Z"></path>
    </svg>
  )
}

export default Location
