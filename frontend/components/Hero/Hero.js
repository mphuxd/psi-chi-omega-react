import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Wrapper } from "../Wrapper";
import { HeroTitle, HeroImage, HeroSubText, HeroSubtitle } from "./index";

const Hero = React.forwardRef(
  (
    {
      inView,
      entry,
      animateClassNames,
      className,
      children,
      title,
      subtitle = null,
      imageSrc,
      imageAlt,
      imageWidth,
      imageHeight,
      subtext,
    },
    ref
  ) => {
    let classNames = cx(className, {
      ["theme-grid"]: true,
      ["animate__animated animate__fadeIn"]: inView,
    });

    let heroSubtitle = null;

    if (subtitle) {
      heroSubtitle = <HeroSubtitle text={subtitle} />;
    }

    return (
      <Wrapper className='items-center mt-24 md:mt-40 lg:mt-24 2xl:mt-32'>
        <div ref={ref} className={classNames}>
          <HeroTitle className='uppercase' text={title} />
          {heroSubtitle}
          <HeroImage src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} />
          <HeroSubText text={subtext} />
        </div>
      </Wrapper>
    );
  }
);

Hero.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Hero.displayName = "Hero";

export default Hero;
