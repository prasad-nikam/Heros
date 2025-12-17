import HeroIntro from "./HeroIntro";
import HeroHeadline from "./HeroHeadline";
const HeroLeft = () => {
  return (
    <>
      <div className="w- flex flex-col">
        <HeroIntro/>
        <HeroHeadline/>
      </div>
    </>
  );
};

export default HeroLeft;
