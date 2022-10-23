import { Wrapper } from "@/components/Wrapper";
import HeroModernCarousel from "./HeroModernCarousel";

function HeroModern({ title, caption, description, ctaLabel, ariaLabel, href, images }) {
  return (
    <Wrapper className='items-center relative'>
      <div className='hero-wrapper-bg '></div>
      <div className='theme-grid py-24 md:py-40 lg:py-24 2xl:py-32'>
        <h1 className='col-span-full uppercase mt-20 font-body text-5xl font-semibold 2xl:font-bold max:text-5xl max:pt-16'>
          {title}
        </h1>
        <h2 className='col-span-full mt-48 text-lg font-body font-medium  2xl:mt-24 max:mt-28'>
          {caption}
        </h2>
        <p className='col-span-full mt-8 text--body lg:col-span-8 2xl:col-span-8'>
          {description}
        </p>
        <a
          className='col-span-full rounded-md link--button mt-8 px-4 py-3 border max:mt-10 font-medium uppercase hover:shadow-md'
          aria-label={ariaLabel}
          href={href}
        >
          {ctaLabel}
        </a>
        <HeroModernCarousel ariaLabel='Images of Psi Chi Omega members.' images={images} />
      </div>
    </Wrapper>
  );
}

export default HeroModern;
