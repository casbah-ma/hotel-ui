const Surface = function ({ width, height, color }) {
  return (
    <svg
      width={width} // added size here
      height={height} // added size here
      fill={color}
      version="1.1"
      viewBox="0 0 1200 1200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m54 54v1092h1092v-1092zm252 579.12v-184.44l358.92-358.68h184.44zm594-543.12h184.68l-778.44 778.56v-184.56zm-593.76 307.8v-184.44l123.24-123.36h184.44zm0-235.44v-72h72zm804-46.801v184.44l-594.24 593.76h-184.2zm0 235.44v184.44l-358.56 358.32h-184.56zm0 235.32v184.44l-123.24 123h-184.44zm0 235.44v72h-72zm-1020 288v-1019.8h180v840h840v180z" />
    </svg>
  )
}

export default Surface
