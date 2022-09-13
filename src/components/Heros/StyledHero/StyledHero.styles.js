import tw from 'twin.macro'

export const StyledHeroContainer = tw.section`w-full h-screen flex justify-center items-center relative`
export const StyledHeroContent = tw.div`text-white lg:text-black absolute pl-6 md:pt-12 md:pl-8 z-20 lg:z-0 w-full lg:w-1/2 lg:static max-h-full 
flex flex-col items-start justify-start`
export const StyledHeroTitle = tw.div` w-full sm:w-[22.438rem] md:w-[32rem] lg:w-full mb-8`
export const StyledHeroSubtitle = tw.div`sm:w-[19.625rem] md:w-[32rem] lg:w-[32.875rem]`
export const StyledHeroImage = tw.img`w-full lg:w-1/2 h-full object-cover bg-center rounded-b-lg lg:rounded-l-lg brightness-50 lg:brightness-100`
export const StyledHeroChildren = tw.div`absolute bottom-[0.063rem] left-2 lg:left-8 z-50`
