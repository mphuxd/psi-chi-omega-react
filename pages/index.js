import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero/Hero";
import HeroTitle from "../components/Hero/HeroTitle";
import HeroImage from "../components/Hero/HeroImage";
import HeroSubText from "../components/Hero/HeroSubText";
import HeroSubtitle from "../components/Hero/HeroSubtitle";
import ContentHeader from "../components/Content/ContentHeader";
import ContentLink from "../components/Content/ContentLink";
import ContentBody from "../components/Content/ContentBody";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperSlide } from "swiper/react";
import CarouselSlideBodyTitle from "../components/Carousel/CarouselSlideBodyTitle";
import CarouselSlideBodyText from "../components/Carousel/CarouselSlideBodyText";
import CarouselSlideBody from "../components/Carousel/CarouselSlideBody";
import Carousel from "../components/Carousel/Carousel";
import CarouselSlideImage from "../components/Carousel/CarouselSlideImage";
import CardDefault from "../components/Cards/CardDefault";
import CardNoBody from "../components/Cards/CardNoBody";
import SectionHeader from "../components/Heading/SectionHeader";
import Wrapper from "../components/Wrapper/Wrapper";
import Grid from "../components/Grid/Grid";
import ContentBlockQuote from "../components/Content/ContentBlockQuote";
import ContentEvent from "../components/Content/ContentEvent";

export default function Home() {
  return (
    <div className='antialiased overflow-x-hidden'>
      <Head>
        <title>Psi Chi Omega Fraternity</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Wrapper className='justify-center'>
          <Hero>
            <HeroTitle>Psi Chi Omega</HeroTitle>
            <HeroSubtitle>Fraternity</HeroSubtitle>
            <HeroImage src='/images/placeholder.jpg' alt='placeholder' width={1440} height={600} />
            <HeroSubText>INTEGRITY ∙ PERSERVERANCE ∙ ETERNAL BROTHERHOOD</HeroSubText>
            <HeroSubText> Gamma Chapter ∙ University of California, Davis</HeroSubText>
          </Hero>
        </Wrapper>

        <Wrapper className='justify-center mt-32 mb-32 max:mt-36 max:mb-44'>
          <Grid className='mx-auto'>
            <SectionHeader>
              <ContentHeader title='About us' isCenter={true} />
              <ContentBody
                text='Founded in 1992 at UCSD, Psi Chi Omega is one of the most competitive and fastest
                growing Asian-American social fraternities in California. Our traditions, values,
                and community guide our members towards excellence in their pursuit to become
                leaders, fighters, and givers for their community.'
              />
              <ContentLink src='' isCenter={true}>
                Learn More
              </ContentLink>
            </SectionHeader>
          </Grid>

          <Carousel>
            <SwiperSlide className="swiper-slide-width">
              <CarouselSlideImage
                src='/images/rona.png'
                alt='Coronavirus-19'
                width={1600}
                height={900}
              />
              <CarouselSlideBody>
                <CarouselSlideBodyTitle title='COVID-19 Response' />
                <CarouselSlideBodyText
                  text='The health, safety, and well-being of our community, on and off campus, is our top
                  priority'
                />
                <ContentLink src='' isCenter={false}>
                  Read More
                </ContentLink>
              </CarouselSlideBody>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-width">
              <CarouselSlideImage
                src='/images/rona.png'
                alt='Coronavirus-19'
                width={1600}
                height={900}
              />
              <CarouselSlideBody>
                <CarouselSlideBodyTitle title='COVID-19 Response' />
                <CarouselSlideBodyText
                  text='The health, safety, and well-being of our community, on and off campus, is our top
                  priority'
                />
                <ContentLink src='' isCenter={false}>
                  Read More
                </ContentLink>
              </CarouselSlideBody>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-width">
              <CarouselSlideImage
                src='/images/rona.png'
                alt='Coronavirus-19'
                width={1600}
                height={900}
              />
              <CarouselSlideBody>
                <CarouselSlideBodyTitle title='COVID-19 Response' />
                <CarouselSlideBodyText
                  text='The health, safety, and well-being of our community, on and off campus, is our top
                  priority'
                />
                <ContentLink src='' isCenter={false}>
                  Read More
                </ContentLink>
              </CarouselSlideBody>
            </SwiperSlide>
          </Carousel>

          <Grid className='mt-32 pb-6 gap-y-5 sm:gap-y-8 md:gap-x-4 lg:gap-x-8 max:mx-auto'>
            <CardDefault
              className='card-default-layout'
              srcImg='/card.png'
              altImg='placeholder'
              widthImg='352'
              heightImg='264'
              heading='Our Initatives'
              body='See what we’re doing to get involved and make a difference in our community.'
              linkHref='/'
              linkAlt='Read More'
              linkLabel='Read More'
              linkClassName='mt-10'
            />
            <CardDefault
              className='card-default-layout'
              srcImg='/card.png'
              altImg='placeholder'
              widthImg='352'
              heightImg='264'
              heading='Our Initatives'
              body='See what we’re doing to get involved and make a difference in our community.'
              linkHref='/'
              linkAlt='Read More'
              linkLabel='Read More'
              linkClassName='mt-10'
            />
            <CardDefault
              className='card-default-layout'
              srcImg='/card.png'
              altImg='placeholder'
              widthImg='352'
              heightImg='264'
              heading='Our Initatives'
              body='See what we’re doing to get involved and make a difference in our community.'
              linkHref='/'
              linkAlt='Read More'
              linkLabel='Read More'
              linkClassName='mt-10'
            />
          </Grid>
        </Wrapper>

        <Wrapper className='bg-mist items-center pt-20 md:pt-28 lg:pt-32 lg:pb-44'>
          <Grid className='gap-y-6 md:gap-y-8 lg:gap-y-16 xl:gap-y-20'>
            <SectionHeader>
              <ContentHeader title='Join Psi Chi Omega' isCenter={true} />
              <ContentBody
                text='Founded in 1992 at UCSD, Psi Chi Omega is one of the most competitive and fastest
                growing Asian-American social fraternities in California. Our traditions, values,
                and community guide our members towards excellence in their pursuit to become
                leaders, fighters, and givers for their community.'
              />
            </SectionHeader>
            <div className='col-span-full sm:flex sm:flex-row sm:gap-x-4 md:gap-x-4 lg:gap-x-8 lg:col-span-10 lg:col-start-2'>
              <CardNoBody
                className='mx-2 sm:mx-0 sm:w-1/2'
                srcImg='/card.png'
                altImg='placeholder'
                widthImg={364}
                heightImg={252}
                linkHref='/'
                linkAlt='placeholder'
                label='Join the Brothers'
                linkIsCenter={false}
              />
              <CardNoBody
                className='mx-2 sm:mx-0 sm:w-1/2'
                srcImg='/card.png'
                altImg='placeholder'
                widthImg={364}
                heightImg={252}
                linkHref='/'
                linkAlt='placeholder'
                label='Join the Brothers'
                linkIsCenter={false}
              />
            </div>
          </Grid>
        </Wrapper>

        <Wrapper className='bg-midnight items-center pt-20 pb-20 md:pt-28 lg:pt-32 lg:pb-44'>
          <Grid className='mx-auto'>
            <SectionHeader>
              <ContentHeader className='text-white' title='Our Community' isCenter={true} />
            </SectionHeader>
          </Grid>
          <Grid>
            <ContentBlockQuote
              className=''
              isReversed={false}
              imgSrc='/images/placeholder.jpg'
              imgAlt='placeholder'
              imgWidth={1440}
              imgHeight={600}
              eyebrow={false}
              eyebrowLabel='test'
              header='The Brothers'
              quote='“Nunc, diam imperdiet gravida mauris, ac faucibus interdum proin nibh erat id mauris lectus amet feugiat ipsum quis dignissim imperdiet.”'
              quoteAuthor='John Smith'
              quoteAuthorSubtext='Alpha Mu Class, Spring 2014'
              linkHref='/'
              linkClassName=''
              linkAlt='Placeholder'
              label='Meet the Brothers'
              linkIsCenter={false}
            />
            <ContentBlockQuote
              className=''
              isReversed={true}
              imgSrc='/images/placeholder.jpg'
              imgAlt='placeholder'
              imgWidth={1440}
              imgHeight={600}
              eyebrow={false}
              eyebrowLabel='test'
              header='The Brothers'
              quote='“Nunc, diam imperdiet gravida mauris, ac faucibus interdum proin nibh erat id mauris lectus amet feugiat ipsum quis dignissim imperdiet.”'
              quoteAuthor='John Smith'
              quoteAuthorSubtext='Alpha Mu Class, Spring 2014'
              linkHref='/'
              linkClassName=''
              linkAlt='Placeholder'
              label='Meet the Brothers'
              linkIsCenter={false}
            />
            <ContentBlockQuote
              className=''
              isReversed={false}
              imgSrc='/images/placeholder.jpg'
              imgAlt='placeholder'
              imgWidth={1440}
              imgHeight={600}
              eyebrow={false}
              eyebrowLabel='test'
              header='The Brothers'
              quote='“Nunc, diam imperdiet gravida mauris, ac faucibus interdum proin nibh erat id mauris lectus amet feugiat ipsum quis dignissim imperdiet.”'
              quoteAuthor='John Smith'
              quoteAuthorSubtext='Alpha Mu Class, Spring 2014'
              linkHref='/'
              linkClassName=''
              linkAlt='Placeholder'
              label='Meet the Brothers'
              linkIsCenter={false}
            />
          </Grid>
        </Wrapper>

        <Wrapper className='items-center pt-20 md:pt-28 lg:pt-32 lg:pb-44'>
          <Grid className='mx-auto sm:gap-x-4 md:gap-x-4 lg:gap-x-8'>
            <ContentHeader className='col-span-full' title='Upcoming Events' isCenter={false} />
            <ContentEvent
              date='Tuesday, March 22, 2021'
              time='3:00 PST'
              location='Dolores Park, San Francisco'
              eventName="Founder's Day"
              eventDescription='Psi Chi Omega offers our members the tools, guidance, and environment that allow our members create meaningful, longlasting experiences, memories, and relationships.'
            />
            <ContentEvent
              date='Tuesday, March 22, 2021'
              time='3:00 PST'
              location='Dolores Park, San Francisco'
              eventName="Founder's Day"
              eventDescription='Psi Chi Omega offers our members the tools, guidance, and environment that allow our members create meaningful, longlasting experiences, memories, and relationships.'
            />
          </Grid>
        </Wrapper>
      </Layout>
    </div>
  );
}
