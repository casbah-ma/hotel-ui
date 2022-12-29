const Projection = function ({ width, height, color }) {
  return (
    <svg
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
      version="1.1"
      viewBox="0 0 1200 1200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m1170 120h-540v-90c0-16.586-13.414-30-30-30s-30 13.414-30 30v90h-540c-16.586 0-30 13.414-30 30s13.414 30 30 30h30v720h419.23l-173.96 252.98c-9.3711 13.68-5.9141 32.305 7.7383 41.746 13.715 9.3711 32.34 5.9141 41.723-7.7383l197.4-286.99h76.766l197.39 286.99c9.3711 13.656 28.008 17.113 41.723 7.7383 13.656-9.4336 17.113-28.066 7.7383-41.746l-173.98-252.98h438.24v-720h30c16.586 0 30-13.414 30-30s-13.414-30-30-30zm-690 600v-420l300 210z" />
    </svg>
  )
}

export default Projection
