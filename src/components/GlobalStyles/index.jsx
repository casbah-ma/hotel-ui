import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
.full-width {
  width: 100%;
}
//images
.radius-lg {
  ${tw`rounded-lg`}
}
.radius-xl {
  ${tw`rounded-xl`}
}

// Swiper
.swiper {
  ${tw`w-full h-full`}
}
//BookingBar
.panel {
  ${tw`p-10 rounded-xl bg-black h-[34.5rem] w-full absolute left-0 bottom-24 flex justify-center items-center`}
}

.panel-mobile { 
  ${tw`rounded-xl bg-black h-[20.375rem] w-full mb-3 flex justify-center items-center`}
}
 .desktop-action {
  ${tw`w-1/3 h-full flex justify-center items-center p-6`}
 }
.guest-panel {
  ${tw`p-3 rounded-xl bg-black h-[12.75rem] w-full mb-3 flex justify-center items-center`}
}

//Hamburger menu
.dialog {
  ${tw`fixed bg-black/25 z-10 inset-0`}

  .dialog-panel {
    ${tw`w-3/4 h-screen max-w-md transform overflow-hidden bg-white p-6 text-left align-middle transition-all`}
  }
  //button animation
  .button-enter {
    ${tw`transform transition duration-[400ms]`}
 }
  .button-enter-from {
    ${tw`opacity-0 rotate-[-120deg] scale-50`}
 }
  .button-enter-to {
  ${tw`opacity-100 rotate-0 scale-100`}
 }
  .button-leave {
  ${tw`transform duration-200 transition ease-in-out`}
 } 
  .button-leave-from {
  ${tw`opacity-100 rotate-0 scale-100`}
 }
  .button-leave-to {
  ${tw`opacity-0 scale-95`}
 }

  //panel animation
  .enter {
     ${tw`transform transition duration-[700ms]`}
  }
  .enter-from {
     ${tw`opacity-0 -translate-x-80`}
  }
  .enter-to {
   ${tw`opacity-100 translate-x-0`}
  }
  .leave {
   ${tw`transform duration-200 transition ease-in-out`}
  } 
  .leave-from {
   ${tw`opacity-100 translate-x-0`}
  }
  .leave-to {
   ${tw`opacity-0 -translate-x-80`}
  }
}
  
//Dropdown
.menu {
     ${tw`relative inline-block text-left`}
     button {
      ${tw`inline-flex justify-center gap-[0.8rem] bg-transparent`}
     }

     svg {
        ${tw`h-5 w-5 text-black`}
     }

     //animation
     .enter {
        ${tw`transition ease-out duration-100`}
     }
     .enter-from {
        ${tw`transform opacity-0 scale-95`}
     }
     .enter-to {
      ${tw`transform opacity-100 scale-100`}
     }
     .leave {
      ${tw`transition ease-in duration-75`}
     } 
     .leave-from {
      ${tw`transform opacity-100 scale-100`}
     }
     .leave-to {
      ${tw`transform opacity-0 scale-95`}
     }
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  } 
  .swiper-slide {
    width: fit-content;
    height: fit-content;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    content: 'next';
    font-size: 0.6rem !important;
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    ${tw`invisible bg-white group-hover:visible rounded-full text-3xl after:text-black after:content-["next"] cursor-pointer`}
  }
  .swiper-button-prev{
    ${tw`after:content-["prev"]`}
  }

  .mySwiper_v2 {
    ${tw`w-full h-[40rem]`}
  }
  .mySwiper_v2 .swiper-slide {
    margin-top: 70px;
    width: fit-content;
    height: fit-content;
  }
  .mySwiper_v2 .swiper-button-next {
    ${tw`invisible lg:visible top-6 right-5 rounded-full w-10 h-10 bg-white active:text-white border`}
  }
  .mySwiper_v2 .swiper-button-prev {
    left: unset;
    ${tw`invisible lg:visible top-6 right-20 rounded-full w-10 h-10 bg-white active:text-white border `}
  }
  .mySwiper_v2 .swiper-button-next, .mySwiper_v2 .swiper-button-prev {
    &:active {
      background-color: ${({ theme }) => theme.colors.bg.primary};
      color: white;
     }
  }
  .mySwiper_v3 {
    ${tw`w-full h-[40rem] bg-transparent`}
  }
  .mySwiper_v3 .swiper-button-next {
    ${tw`invisible lg:visible top-6 right-5 rounded-full w-10 h-10 bg-white active:text-white border`}
  }
  .mySwiper_v3 .swiper-button-prev {
    ${tw`invisible lg:visible top-6  z-30 rounded-full w-10 h-10 bg-white active:text-white border `}
  }
  .mySwiper_v3 .swiper-button-next, .mySwiper_v3 .swiper-button-prev {
    &:active {
      background-color: ${({ theme }) => theme.colors.bg.primary};
      color: white;
     }
  }
`
const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)
export default GlobalStyles
