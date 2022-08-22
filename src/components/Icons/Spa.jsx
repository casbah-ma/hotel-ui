const Spa = function ({ width, height, color }) {
  return (
    <svg
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
      version="1.1"
      viewBox="0 0 700 700"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m678.12 382.81c-0.027344-20.297-8.1016-39.758-22.453-54.109s-33.812-22.426-54.109-22.453h-98.438v-76.562c0-3.1914-1.3945-6.2227-3.8164-8.2969-2.4219-2.0781-5.6289-2.9961-8.7852-2.5078l-129.59 19.926v-10.215c12.344-2.5391 23.434-9.2539 31.406-19.016 7.9688-9.7656 12.328-21.977 12.344-34.578 0-47.73-45.031-93.32-46.953-95.234-4.2734-4.2695-11.195-4.2695-15.469 0-1.9219 1.9141-46.953 47.504-46.953 95.234 0.015625 12.602 4.375 24.812 12.344 34.578 7.9727 9.7617 19.062 16.477 31.406 19.016v13.594l-132.91 20.453c-5.3281 0.82031-9.2656 5.4023-9.2734 10.797v121.86c-7.9883-8.6172-17.203-16.012-27.344-21.941-3.3828-1.9531-7.5547-1.9531-10.938 0-32.297 18.766-54.102 51.418-59.062 88.441-7.5586-1.5508-15.254-2.3594-22.969-2.418-4.8281 0.019531-9.6484 0.33594-14.438 0.94141-3.8789 0.46484-7.2148 2.9688-8.75 6.5625-10.812 25.367-12.578 53.68-4.9961 80.191 7.5781 26.516 24.047 49.613 46.637 65.43h-73.141v21.875h26.055l18.844 37.703c1.8516 3.707 5.6445 6.0469 9.7891 6.0469h415.62c2.9023 0 5.6836-1.1523 7.7344-3.2031s3.2031-4.832 3.2031-7.7344v-32.812h69.805l18.844 37.703c1.8516 3.707 5.6445 6.0469 9.7891 6.0469h43.75c2.9023 0 5.6836-1.1523 7.7344-3.2031s3.2031-4.832 3.2031-7.7344v-32.812h10.938c2.9023 0 5.6836-1.1523 7.7344-3.2031s3.2031-4.832 3.2031-7.7344v-43.75c0-2.9023-1.1523-5.6836-3.2031-7.7344s-4.832-3.2031-7.7344-3.2031h-12.152c17.016-16.559 25.355-40.086 22.57-63.664-2.7852-23.574-16.383-44.512-36.789-56.648 23.105-13.797 37.27-38.715 37.309-65.625zm-360.94-207.81c0-27.969 21.055-57.051 32.812-71.094 11.77 14.031 32.812 43.062 32.812 71.094-0.027344 6.7617-2.1445 13.352-6.0586 18.863-3.918 5.5156-9.4414 9.6836-15.816 11.938v-19.863h-21.875v19.863c-6.375-2.2539-11.898-6.4219-15.816-11.938-3.9141-5.5117-6.0312-12.102-6.0586-18.863zm-98.438 251.56v-143.74l262.5-40.383v63.812h-32.812c-20.508-0.027344-40.168 8.1836-54.562 22.793-14.395 14.605-22.32 34.383-21.992 54.887 0.32422 20.504 8.875 40.02 23.727 54.16-19.219 2.2695-36.863 11.742-49.371 26.508-12.508 14.766-18.949 33.727-18.027 53.055 0.92578 19.332 9.1445 37.59 23.004 51.098h-12.152c-6.0391 0-10.938 4.8984-10.938 10.938v43.75c0 2.9023 1.1523 5.6836 3.2031 7.7344s4.832 3.2031 7.7344 3.2031h10.938v21.875h-80.742l10.938-21.875h26.055v-21.875h-73.227c22.613-15.793 39.105-38.887 46.703-65.402 7.5977-26.516 5.8398-54.836-4.9766-80.207-1.5352-3.5938-4.8711-6.0977-8.75-6.5625-12.445-1.6016-25.07-1.1602-37.375 1.3125-1.7031-12.168-5.2734-23.996-10.574-35.078zm-60.07 185.75c-10.578-30.117-5.8984-63.496 12.559-89.543 18.461-26.043 48.402-41.523 80.324-41.52 1.7188 0 3.5117 0.066406 5.3828 0.1875 10.578 30.117 5.8984 63.496-12.559 89.543-18.461 26.043-48.402 41.523-80.324 41.52-1.7188 0-3.5117-0.066406-5.3828-0.1875zm5.3828-216.62c24.438 16.449 40.258 42.941 43.148 72.254-16.312 6.5156-31.004 16.516-43.051 29.301-12.133-12.734-26.895-22.676-43.258-29.125 2.8398-29.379 18.672-55.949 43.16-72.43zm-98.438 118.37c-0.015625-11.113 1.8633-22.145 5.5547-32.625 1.8711-0.12109 3.6641-0.1875 5.3828-0.1875 28.324-0.085938 55.281 12.16 73.852 33.547-17.938 27.566-23.605 61.352-15.641 93.262-20.043-6.2461-37.566-18.738-50.004-35.648-12.441-16.91-19.148-37.355-19.145-58.348zm179.18 142.19h-161.48l-10.938-21.875h183.36zm153.12 0h-26.055v-21.875h36.992zm83.32 0h-58.867l10.938-21.875h47.93zm153.12 0h-26.055l-10.938-21.875h36.992zm21.875-65.625v21.875h-306.25v-21.875zm0-76.562c-0.015625 14.5-5.7852 28.398-16.035 38.652-10.254 10.25-24.152 16.02-38.652 16.035h-196.88c-19.539 0-37.59-10.422-47.359-27.344s-9.7695-37.766 0-54.688 27.82-27.344 47.359-27.344h142.19c11.723 0 22.555 6.2539 28.418 16.406 5.8594 10.152 5.8594 22.66 0 32.812-5.8633 10.152-16.695 16.406-28.418 16.406h-109.38c-6.0391 0-10.938-4.8984-10.938-10.938s4.8984-10.938 10.938-10.938h76.562v-21.875h-76.562c-11.723 0-22.555 6.2539-28.418 16.406-5.8594 10.152-5.8594 22.66 0 32.812 5.8633 10.152 16.695 16.406 28.418 16.406h109.38c14.5-0.015625 28.398-5.7852 38.652-16.035 10.25-10.254 16.02-24.152 16.035-38.652-0.039062-11.871-3.9844-23.402-11.223-32.812h11.223c14.5 0.015625 28.398 5.7852 38.652 16.035 10.25 10.254 16.02 24.152 16.035 38.652zm-109.38-76.562h-98.438c-19.539 0-37.59-10.422-47.359-27.344s-9.7695-37.766 0-54.688 27.82-27.344 47.359-27.344h120.31c11.723 0 22.555 6.2539 28.418 16.406 5.8594 10.152 5.8594 22.66 0 32.812-5.8633 10.152-16.695 16.406-28.418 16.406h-109.38c-6.0391 0-10.938-4.8984-10.938-10.938s4.8984-10.938 10.938-10.938h76.562v-21.875h-76.562c-11.723 0-22.555 6.2539-28.418 16.406-5.8594 10.152-5.8594 22.66 0 32.812 5.8633 10.152 16.695 16.406 28.418 16.406h109.38c14.5-0.015625 28.398-5.7852 38.652-16.035 10.25-10.254 16.02-24.152 16.035-38.652-0.011719-11.281-3.543-22.277-10.105-31.457 17.605 3.9961 32.105 16.422 38.75 33.207s4.5742 35.77-5.5273 50.73c-10.105 14.961-26.938 23.973-44.992 24.082z" />
        <path d="m240.62 306.25h21.875v87.5h-21.875z" />
        <path d="m240.62 415.62h21.875v21.875h-21.875z" />
      </g>
    </svg>
  )
}

export default Spa
