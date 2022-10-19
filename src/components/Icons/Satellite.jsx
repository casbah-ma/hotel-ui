const Satellite = function ({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
    >
      <g>
        <path
          fill={color}
          d="M32.048,21.571c7.339,0,14.677-0.005,22.016,0.002c3.713,0.004,5.266,1.55,5.268,5.238   c0.006,9.422-0.038,18.845,0.038,28.266c0.017,2.1-0.817,3.605-2.646,4.239c-2.792,0.968-5.657,1.918-8.567,2.317   c-9.744,1.334-19.536,1.275-29.315,0.315c-3.814-0.374-7.587-1.028-11.07-2.789C5.697,58.11,4.6,56.629,4.63,54.125   c0.108-9.183,0.039-18.369,0.06-27.554c0.007-3.115,1.816-4.96,4.917-4.973c7.48-0.029,14.961-0.009,22.441-0.009   C32.048,21.584,32.048,21.577,32.048,21.571z M54.789,26.278c-15.179,0-30.282,0-45.392,0c0,9.103,0,18.076,0,27.126   c15.159,0,30.228,0,45.392,0C54.789,44.317,54.789,35.308,54.789,26.278z"
        />
        <path
          fill={color}
          d="M51.14,2.901c-0.104-0.615-0.869-1.43-1.469-1.548C49.2,1.262,48.47,2.026,47.997,2.54   c-0.484,0.525-0.704,1.298-1.198,1.808c-2.27,2.345-4.608,4.625-6.895,6.954c-0.475,0.483-0.894,1.02-1.3,1.528   c-1.67-1.78-4.03-2.891-6.65-2.891c-2.515,0-4.794,1.023-6.45,2.68c-3.017-3.009-5.98-5.953-8.914-8.922   c-0.269-0.272-0.256-0.819-0.521-1.099c-0.479-0.506-1.082-1.269-1.61-1.251c-0.533,0.018-1.261,0.764-1.501,1.354   c-0.338,0.833,0.18,1.528,1.044,1.889c0.463,0.193,1,0.339,1.34,0.673c2.938,2.882,5.856,5.786,8.723,8.738   c0.06,0.062,0.108,0.145,0.149,0.238c-0.886,1.408-1.407,3.073-1.426,4.86h18.328c-0.018-1.766-0.527-3.414-1.393-4.811   c0.09-0.157,0.218-0.317,0.396-0.489c2.78-2.705,5.484-5.489,8.254-8.204c0.444-0.435,1.162-0.588,1.614-1.018   C50.489,4.101,51.223,3.389,51.14,2.901z"
        />
        <path
          fill={color}
          d="M42.454,35.929c-0.485,0-0.912,0-1.399,0c-0.396-3.359-2.281-5.273-5.674-5.667c0-0.478,0-0.923,0-1.364   C39.048,28.705,42.285,31.912,42.454,35.929z"
        />
        <path
          fill={color}
          d="M39.573,35.915c-0.444,0-0.892,0-1.37,0c-0.207-1.64-1.132-2.585-2.822-2.811c0-0.45,0-0.897,0-1.343   C37.55,31.491,39.701,33.604,39.573,35.915z"
        />
        <path
          fill={color}
          d="M32.027,33.654c0.001,0.01,0,0.02-0.001,0.031c-0.015,0.145-0.165,0.242-0.273,0.32   c-0.136,0.099-0.287,0.174-0.435,0.252c-0.326,0.171-0.692,0.285-1.063,0.288c-0.343,0.003-0.634-0.216-0.927-0.366   c-0.263-0.135-0.539-0.252-0.816-0.357c-0.571-0.218-1.173-0.363-1.787-0.365c-1.37-0.004-2.004,0.907-1.857,2.161   c0.231,1.967,1.278,3.551,2.45,5.052c1.292,1.655,2.818,3.078,4.579,4.234c1.069,0.703,2.2,1.285,3.47,1.524   c0.355,0.067,0.742,0.083,1.095,0.017c0.753-0.14,1.358-0.638,1.4-1.609c0.046-1.074-0.322-2.022-0.775-2.955   c-0.119-0.244-0.261-0.477-0.383-0.719c-0.281-0.557-0.045-1.075,0.205-1.54c0.401-0.747,0.439-0.862,0.975-0.044   c0.723,1.102,1.315,2.271,1.723,3.518c0.297,0.908,0.471,1.856,0.357,2.823c-0.129,1.092-0.702,1.914-1.594,2.54   c-0.937,0.659-1.961,1.15-3.05,1.464c-1.606,0.464-3.261,0.593-4.914,0.318c-1.752-0.291-3.334-1.012-4.747-2.098   c-1.591-1.223-2.893-2.704-3.8-4.486c-0.414-0.813-0.642-1.728-0.899-2.612c-0.32-1.1-0.243-2.247-0.103-3.349   c0.117-0.917,0.477-1.813,0.804-2.691c0.359-0.964,0.951-1.801,1.638-2.568c0.795-0.888,1.828-1.131,2.957-1.068   c1.453,0.081,2.79,0.571,4.06,1.252c0.294,0.158,0.584,0.323,0.873,0.49c0.226,0.13,0.46,0.246,0.683,0.381   C31.949,33.541,32.022,33.567,32.027,33.654z"
        />
        <path
          fill={color}
          d="M32.87,41.641c0.109-0.81,0.231-1.618,0.317-2.43c0.017-0.157-0.105-0.329-0.164-0.493   c-0.004-0.01-0.022-0.014-0.028-0.024c-0.644-0.999-1.581-0.459-2.412-0.451c-0.577,0.006-1.16,0.113-1.728,0.056   c-0.338-0.034-0.519-0.408-0.567-0.758c-0.05-0.364,0.108-0.669,0.41-0.862c0.159-0.102,0.369-0.146,0.561-0.171   c0.911-0.117,1.825-0.212,2.735-0.333c0.094-0.012,0.198-0.125,0.255-0.217c0.298-0.481,0.632-0.897,1.17-1.155   c1.107-0.531,2.405-0.006,2.931,0.944c0.661,1.194,0.225,2.572-1.043,3.21c-0.195,0.098-0.244,0.202-0.263,0.393   c-0.096,0.928-0.2,1.856-0.314,2.782c-0.064,0.52-0.518,0.872-1.04,0.83c-0.447-0.035-0.79-0.437-0.799-0.937   c-0.002-0.127,0-0.253,0-0.38C32.883,41.643,32.876,41.642,32.87,41.641z"
        />
      </g>
    </svg>
  )
}

export default Satellite