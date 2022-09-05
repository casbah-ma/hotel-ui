const Instagram = function ({ width, height, color }) {
  return (
    <svg
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      x="0px"
      y="0px"
    >
      <g>
        <path d="M13.63379,3.86621H6.36621a2.50294,2.50294,0,0,0-2.5,2.5v7.26758a2.50294,2.50294,0,0,0,2.5,2.5h7.26758a2.50294,2.50294,0,0,0,2.5-2.5V6.36621A2.50294,2.50294,0,0,0,13.63379,3.86621Zm-7.26758,1h7.26758a1.50164,1.50164,0,0,1,1.5,1.5V9.5H12.84448a2.88665,2.88665,0,0,0-5.689,0H4.86621V6.36621A1.50164,1.50164,0,0,1,6.36621,4.86621ZM11.895,10A1.895,1.895,0,1,1,10,8.105,1.89716,1.89716,0,0,1,11.895,10Zm1.73877,5.13379H6.36621a1.50164,1.50164,0,0,1-1.5-1.5V10.5H7.15552a2.88665,2.88665,0,0,0,5.689,0h2.28931v3.13379A1.50164,1.50164,0,0,1,13.63379,15.13379ZM12.45557,6.188a.49971.49971,0,0,1,.5-.5h.65918a.5.5,0,0,1,0,1h-.65918A.49971.49971,0,0,1,12.45557,6.188Z"></path>
      </g>
    </svg>
  )
}

export default Instagram