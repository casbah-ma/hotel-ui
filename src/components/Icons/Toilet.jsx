const Toilet = function ({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 100 100"
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
    >
      <path d="M14.4,43.8c-1.7,0-3.1,1.4-3.1,3.1V50c0,6.9,3.1,13.3,8.4,17.6c1.3,1.1,2.8,2.2,4.4,3.4c7.2,5.4,17.1,12.9,17.1,19.8v1.7  c0,1.4,1.1,2.5,2.5,2.5H75c1.4,0,2.5-1.1,2.5-2.5v-1.7c0-3.2-0.5-6.1-0.9-9c-1.1-6.9-1.5-10.9,2.5-14.2c4.8-3.9,7.8-9.4,8.3-15.5  c3-1,5.1-3.8,5.1-7.1V11.3c0-1.4-1.1-2.5-2.5-2.5h-8.8V6.3C81.3,5.6,80.7,5,80,5h-5c-0.7,0-1.3,0.6-1.3,1.3v2.5H65  c-1.4,0-2.5,1.1-2.5,2.5V45c0,0.9,0.2,1.7,0.4,2.5H52.5v-0.6c0-0.7-0.2-1.4-0.6-1.9c0,0,0,0,0,0c1.5,0,2.8-1.1,3.1-2.5l6.3-33.2  c0.8-4-5.4-5.1-6.1-1.2l-6.3,33.2c-0.2,0.9,0.1,1.8,0.6,2.5c0,0,0,0,0,0H14.4z M82.2,53.1C80.7,61.3,82.2,52.9,82.2,53.1 M82.3,52.5  c-1.2,8.5-8.5,15-17.3,15H33.8c-8.6,0-16.1-6.5-17.3-15H82.3z M46.2,90c-0.5-7.8-8.1-14.6-15.4-20.2c1,0.1,1.9,0.2,2.9,0.2H65  c2.5,0,4.8-0.5,7-1.3c-1.9,4.3-1.1,9.1-0.3,13.8c0.4,2.4,0.8,4.9,0.9,7.4H46.2z M76.3,7.5h2.5v1.3h-2.5V7.5z M67.5,45V13.8h20V45  c0,1.4-1.1,2.5-2.5,2.5H70C68.6,47.5,67.5,46.4,67.5,45z M13.8,47.5v-0.6c0-0.3,0.3-0.6,0.6-0.6h35c0.3,0,0.6,0.3,0.6,0.6v0.6H13.8z   M57.6,8.6C57.7,7.8,59,8,58.8,8.8L52.5,42c-0.2,0.8-1.4,0.6-1.2-0.2L57.6,8.6z" />
    </svg>
  )
}

export default Toilet