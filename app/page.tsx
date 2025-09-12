import Footer from "@/components/footer.component";
import NavbarDemo, { BentoGridThirdDemo,    CanvasRevealEffectDemo3,   HeroScrollDemo, HeroVideoDialogDemo, ImagesSliderDemo,    PointerHighlightDemo,    StickyBannerDemo,  StickyScrollRevealDemo } from "./homespages";


const page = () => {
  return (
    <div>
      <StickyBannerDemo/>
      <NavbarDemo />
      <ImagesSliderDemo />
      <br />
      <br />
      <PointerHighlightDemo />
      
      
      <br />
      <br />
           <BentoGridThirdDemo />

      <br />
      <br />
      <CanvasRevealEffectDemo3 /> 

      <HeroScrollDemo />
      {/* <FollowingPointerDemo /> */}
      

      <StickyScrollRevealDemo />

      <HeroVideoDialogDemo />
      <Footer />


    </div>
  )
}
export default page;
