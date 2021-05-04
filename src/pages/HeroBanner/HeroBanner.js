import React from "react";
import { BgCircle, HeroImage, HeroText, HeroWrapper } from "./HeroBannerStyle";

const HeroBanner = () => {
  return (
    <HeroWrapper>
      <HeroText>
        <h6 className=" mb-5">Featured project</h6>
        <div className="justify-self-center">
          <h1>ESPN Body Issue</h1>
          <h1 className="light">Impressive body of</h1>
          <h1 className="light">work</h1>
        </div>
      </HeroText>
      <HeroImage>
        <BgCircle />
      </HeroImage>
      <BgCircle />
    </HeroWrapper>
  );
};

export default HeroBanner;
