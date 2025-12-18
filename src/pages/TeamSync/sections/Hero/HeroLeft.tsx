import HeroIntro from "./HeroIntro";
import HeroHeadline from "./HeroHeadline";
import HeroBenifitsSection from "./HeroBenifitsSection";
const HeroLeft = () => {
  return (
    <>
      <div className="flex w-4/7 flex-col">
        <HeroIntro />
        <HeroHeadline />
        <HeroBenifitsSection />
      </div>
    </>
  );
};

export default HeroLeft;
