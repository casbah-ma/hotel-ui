const VideoProjector = function ({ width, height, color }) {
  return (
    <svg
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
      version="1.1"
      viewBox="0 0 1200 1200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m843.75 649.12v206.25l131.25 75.938c11.598 6.6953 25.883 6.6992 37.484 0.007812 11.598-6.6875 18.75-19.055 18.766-32.445v-295.88c-0.14453-13.324-7.3516-25.57-18.926-32.168-11.578-6.5977-25.785-6.5586-37.324 0.10547zm-675-49.125v318.75c0 19.891 7.9023 38.969 21.969 53.031 14.062 14.066 33.141 21.969 53.031 21.969h487.5c19.891 0 38.969-7.9023 53.031-21.969 14.066-14.062 21.969-33.141 21.969-53.031v-318.75c0-19.891-7.9023-38.969-21.969-53.031-14.062-14.066-33.141-21.969-53.031-21.969h-487.5c-19.891 0-38.969 7.9023-53.031 21.969-14.066 14.062-21.969 33.141-21.969 53.031zm501.56 121.88c-19.891 0-38.969-7.9023-53.031-21.969-14.066-14.062-21.969-33.141-21.969-53.031s7.9023-38.969 21.969-53.031c14.062-14.066 33.141-21.969 53.031-21.969s38.969 7.9023 53.031 21.969c14.066 14.062 21.969 33.141 21.969 53.031s-7.9023 38.969-21.969 53.031c-14.062 14.066-33.141 21.969-53.031 21.969zm0-112.5c-9.9453 0-19.484 3.9492-26.516 10.984-7.0352 7.0312-10.984 16.57-10.984 26.516s3.9492 19.484 10.984 26.516c7.0312 7.0352 16.57 10.984 26.516 10.984s19.484-3.9492 26.516-10.984c7.0352-7.0312 10.984-16.57 10.984-26.516s-3.9492-19.484-10.984-26.516c-7.0312-7.0352-16.57-10.984-26.516-10.984zm-360.94-403.12c-37.297 0-73.066 14.816-99.438 41.188s-41.188 62.141-41.188 99.438 14.816 73.066 41.188 99.438 62.141 41.188 99.438 41.188 73.066-14.816 99.438-41.188 41.188-62.141 41.188-99.438-14.816-73.066-41.188-99.438-62.141-41.188-99.438-41.188zm164.06 210c-11.961 28.086-30.941 52.621-55.125 71.25h110.25c-24.184-18.629-43.164-43.164-55.125-71.25zm164.06-210c-37.297 0-73.066 14.816-99.438 41.188s-41.188 62.141-41.188 99.438 14.816 73.066 41.188 99.438 62.141 41.188 99.438 41.188 73.066-14.816 99.438-41.188 41.188-62.141 41.188-99.438-14.816-73.066-41.188-99.438-62.141-41.188-99.438-41.188z" />
    </svg>
  )
}

export default VideoProjector
