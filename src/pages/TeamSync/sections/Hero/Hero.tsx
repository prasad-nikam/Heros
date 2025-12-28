import type React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero: React.FC = () => {
  return (
    <div className="no-scrollbar h-full w-full">
      <div className="mx-20 mt-20 flex w-full">
        <HeroLeft />
        <HeroRight />
      </div>
    </div>
  );
};

export default Hero;
