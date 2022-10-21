const Microwave = function ({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 520 520"
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
    >
      <g>
        <g>
          <path d="M445.5,151.501h-366c-23.159,0-42,18.841-42,42v207.001c0,23.158,18.841,42,42,42h28v5c0,13.785,11.215,25,25,25    s25-11.215,25-25v-5h220v5c0,13.785,11.215,25,25,25c13.785,0,25-11.215,25-25v-5h18c23.159,0,42-18.842,42-42V193.501    C487.5,170.343,468.659,151.501,445.5,151.501z M147.5,447.502c0,8.27-6.729,15-15,15s-15-6.73-15-15v-5h30V447.502z     M417.5,447.502c0,8.27-6.729,15-15,15c-8.272,0-15-6.73-15-15v-5h30V447.502z M477.5,400.502c0,17.645-14.355,32-32,32    c-16.683,0-350.44,0-366,0c-17.645,0-32-14.355-32-32V193.501c0-17.645,14.355-32,32-32h366c17.645,0,32,14.355,32,32V400.502z" />
          <path d="M392.5,192.895h-310c-2.761,0-5,2.239-5,5v200c0,2.761,2.239,5,5,5h310c2.762,0,5-2.239,5-5v-200    C397.5,195.134,395.262,192.895,392.5,192.895z M245.585,347.502h-33.141l23.086-40h33.142L245.585,347.502z M280.218,307.502    h22.006c-2.495,22.468-21.601,40-44.724,40h-0.369L280.218,307.502z M186.471,392.502l20.201-35h33.142l-20.201,35H186.471z     M200.897,347.502H187.5c-23.123,0-42.229-17.532-44.724-40h81.208L200.897,347.502z M241.302,297.502l5.772-10H262.5    c2.762,0,5-2.239,5-5c0-2.762-2.238-5-5-5h-9.655l42.855-74.251h33.141l-54.397,94.251H241.302z M87.5,262.502h35    c2.761,0,5-2.239,5-5c0-2.762-2.239-5.001-5-5.001h-35v-10h45c2.761,0,5-2.239,5-5c0-2.761-2.239-5-5-5h-45v-10h55    c2.761,0,5-2.239,5-5c0-2.761-2.239-5-5-5h-55v-9.606h196.859l-43.061,74.607H177.5c-2.757,0-5-2.243-5-5c0-2.757,2.243-5,5-5h25    c11.028,0,20-8.973,20-20.001c0-2.761-2.239-5-5-5s-5,2.239-5,5c0,5.514-4.486,10.001-10,10.001h-25c-8.271,0-15,6.728-15,15    c0,8.27,6.729,15,15,15h58.027l-5.771,10H137.5c-2.761,0-5,2.238-5,5c0,30.327,24.673,55,55,55h7.625l-20.428,35.393H87.5V262.502    z M387.5,392.896H230.932l20.428-35.393h6.141c30.327,0,55-24.673,55-55c0-2.762-2.238-5-5-5h-21.511l54.604-94.607H387.5V392.896    z" />
          <path d="M455.179,240.179c9.745-9.746,9.746-25.602,0.003-35.351c-9.683-9.688-25.51-9.854-35.36-0.004    c-9.746,9.747-9.746,25.607,0.001,35.355C429.592,249.949,445.406,249.951,455.179,240.179z M426.893,211.895    c4.567-4.566,11.393-5.635,17.064-2.921l-6.457,6.457c-1.953,1.953-1.953,5.118-0.001,7.071c1.952,1.952,5.118,1.954,7.071,0    l6.453-6.453c4.75,9.982-2.527,21.453-13.523,21.453c-4.007,0-7.773-1.56-10.606-4.393    C421.045,227.26,421.045,217.743,426.893,211.895z" />
          <path d="M437.5,307.502c13.785,0,25-11.215,25-25c0-13.785-11.215-25-25-25c-13.785,0-25,11.215-25,25    C412.5,296.287,423.715,307.502,437.5,307.502z M432.5,268.377v9.125c0,2.761,2.238,5,5,5c2.762,0,5-2.239,5-5v-9.125    c5.816,2.065,10,7.608,10,14.125c0,8.27-6.729,15-15,15c-8.272,0-15-6.73-15-15C422.5,275.985,426.684,270.442,432.5,268.377z" />
          <path d="M462.5,362.502h-50c-2.762,0-5,2.238-5,5v30c0,2.761,2.238,5,5,5h50c2.762,0,5-2.239,5-5v-30    C467.5,364.74,465.262,362.502,462.5,362.502z M457.5,392.502h-40v-20h40V392.502z" />
          <path d="M462.5,337.502h-50c-2.762,0-5,2.238-5,5c0,2.761,2.238,5,5,5h50c2.762,0,5-2.239,5-5    C467.5,339.74,465.262,337.502,462.5,337.502z" />
          <path d="M462.5,322.502h-50c-2.762,0-5,2.238-5,5c0,2.761,2.238,5,5,5h50c2.762,0,5-2.239,5-5    C467.5,324.74,465.262,322.502,462.5,322.502z" />
          <path d="M77.5,107.502c11.028,0,20-8.972,20-20c0-11.028-8.972-20-20-20s-20,8.972-20,20C57.5,98.529,66.472,107.502,77.5,107.502    z M77.5,77.502c5.514,0,10,4.486,10,10c0,5.514-4.486,10-10,10s-10-4.486-10-10C67.5,81.987,71.986,77.502,77.5,77.502z" />
          <path d="M387.5,107.502c16.542,0,30-13.458,30-30s-13.458-30-30-30s-30,13.458-30,30S370.958,107.502,387.5,107.502z     M387.5,57.501c11.028,0,20,8.972,20,20c0,11.028-8.972,20-20,20c-11.028,0-20-8.972-20-20    C367.5,66.474,376.472,57.501,387.5,57.501z" />
          <circle cx="135" cy="110" r="7.5" />
          <circle cx="157.5" cy="217.5" r="5" />
          <circle cx="230" cy="70" r="7.5" />
          <circle cx="325" cy="110" r="7.5" />
          <circle cx="470" cy="115" r="7.5" />
          <circle cx="45" cy="135" r="7.5" />
        </g>
      </g>
    </svg>
  )
}

export default Microwave