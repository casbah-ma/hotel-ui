import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
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
}
.dialog-panel {
  ${tw`w-3/4 h-screen max-w-md transform overflow-hidden bg-white p-6 text-left align-middle transition-all`}
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
  }
  
  
  .swiper-button-next,
  .swiper-button-prev {
    ${tw`invisible group-hover:visible rounded-full w-20 h-14 p-2 after:font-secondary after:text-black cursor-pointer`}
  } 
`
const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)
export default GlobalStyles