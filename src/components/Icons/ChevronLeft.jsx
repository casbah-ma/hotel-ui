const ChevronRight = function ({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1200"
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
    >
      <g clipPath="url(#a)">
        <path d="m790.37 972.09c28.844 23.074 63.457-20.191 34.613-46.152l-386.51-325.94 386.51-325.94c28.844-25.961-5.7695-69.227-34.613-46.152l-415.36 349.01c-14.422 11.539-14.422 34.613 0 46.152l415.36 349.01z" />
      </g>
    </svg>
  )
}

export default ChevronRight
