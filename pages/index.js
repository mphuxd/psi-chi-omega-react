import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero/Hero";
import HeroTitle from "../components/Hero/HeroTitle";
import HeroImage from "../components/Hero/HeroImage";
import HeroSubText from "../components/Hero/HeroSubText";
import HeroSubtitle from "../components/Hero/HeroSubtitle";
import ContentHeader from "../components/Content/ContentHeader";
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
import LinkButton from "../components/Link/LinkButton";
import ContentBlockMediaText from "../components/Content/ContentBlockMediaText";
import IsInView from "../components/IsInView";
import CarouselSlideContainer from "../components/Carousel/CarouselSlideContainer";
import Link from "next/link";

export default function Home() {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>Psi Chi Omega Fraternity</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout className=''>
        <Wrapper className='justify-center mt-24 md:mt-20 lg:mt-24'>
          <IsInView toggleOnce={true}>
            <Hero className=''>
              <HeroTitle className='uppercase' text='Psi Chi Omega' />
              {/* <HeroSubtitle text='Fraternity' /> */}
              <HeroImage
                src='/images/placeholder.jpg'
                alt='placeholder'
                width={1440}
                height={600}
              />
              <HeroSubText text='INTEGRITY ∙ PERSERVERANCE ∙ ETERNAL BROTHERHOOD ∙ GAMMA CHAPTER ∙ UC DAVIS' />
              {/* <HeroSubText text='Gamma Chapter ∙ University of California, Davis' /> */}
            </Hero>
          </IsInView>
        </Wrapper>

        <Wrapper className='justify-center my-20 md:mt-32 md:mb-32 max:mt-24 max:mb-44'>
          <Grid className='mx-auto'>
            <SectionHeader>
              <ContentHeader className="uppercase" title='Who We Are' isCenter={true} />
              <ContentBody
                isCenter={true}
                text='Founded in 1992 at UCSD, Psi Chi Omega is the largest and fastest growing Asian-American social fraternity in California. Our success comes from bringing like-minded people together under shared values, traditions, community, and experiences. We provide members with a social environment that encourages mutual growth and cultural acceptance.'
              />
              <LinkButton
                className='mt-10'
                href='/'
                alt='placeholder'
                label='About ΨΧΩ'
                isCenter={true}
              />
            </SectionHeader>
          </Grid>

          <IsInView toggleOnce={true} animateClassNames='animate__fast'>
            <Carousel>
              <SwiperSlide className='swiper--slide-width'>
                {({ isActive }) => (
                  <CarouselSlideContainer isActive={isActive}>
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
                      <LinkButton
                        className='mt-10'
                        href='/'
                        alt='placeholder'
                        label='Learn More'
                        isCenter={false}
                      />
                    </CarouselSlideBody>
                  </CarouselSlideContainer>
                )}
              </SwiperSlide>
              <SwiperSlide className='swiper--slide-width'>
                {({ isActive }) => (
                  <CarouselSlideContainer isActive={isActive}>
                    <CarouselSlideImage
                      src='/images/16-9_placeholder.jpg'
                      alt='Placeholder Image'
                      width={1600}
                      height={900}
                    />
                    <CarouselSlideBody>
                      <CarouselSlideBodyTitle title='Featured Article' />
                      <CarouselSlideBodyText text='Integer ullamcorper nulla in quam mattis urna in interdum in auctor natoque rhoncus cursus nulla viverra tincidunt pharetra consectetur enim iaculis pulvinar lacus.' />
                      <LinkButton
                        className='mt-10'
                        href='/'
                        alt='placeholder'
                        label='Learn More'
                        isCenter={false}
                      />
                    </CarouselSlideBody>
                  </CarouselSlideContainer>
                )}
              </SwiperSlide>
              <SwiperSlide className='swiper--slide-width'>
                {({ isActive }) => (
                  <CarouselSlideContainer isActive={isActive}>
                    <CarouselSlideImage
                      src='/images/16-9_placeholder.jpg'
                      alt='Placeholder Image'
                      width={1600}
                      height={900}
                    />
                    <CarouselSlideBody>
                      <CarouselSlideBodyTitle title='Featured Article' />
                      <CarouselSlideBodyText text='Integer ullamcorper nulla in quam mattis urna in interdum in auctor natoque rhoncus cursus nulla viverra tincidunt pharetra consectetur enim iaculis pulvinar lacus.' />
                      <LinkButton
                        className='mt-10'
                        href='/'
                        alt='placeholder'
                        label='Learn More'
                        isCenter={false}
                      />
                    </CarouselSlideBody>
                  </CarouselSlideContainer>
                )}
              </SwiperSlide>
            </Carousel>
          </IsInView>

          <Grid className='mt-32 pb-6 gap-y-5 sm:gap-y-8 md:gap-x-4 lg:gap-x-8 mx-auto'>
              {/* <CardDefault
                srcImg='/card.png'
                altImg='placeholder'
                widthImg={352}
                heightImg={264}
                heading='Our Brothers'
                body='The brothers are responsible for maintaining the fraternity and most importantly, taking care of our community.'
                linkHref='/'
                linkAlt='Meet the brothers'
                linkLabel='Meet the brothers'
                linkClassName='mt-10'
              />
              <CardDefault
                srcImg='/card.png'
                altImg='placeholder'
                widthImg={352}
                heightImg={264}
                heading='Our History'
                body='Founded in 1992, Psi Chi Omega was formed to address the need for a space for Asian American men.'
                linkHref='/'
                linkAlt='About our history'
                linkLabel='About our history'
                linkClassName='mt-10'
              />
              <CardDefault
                srcImg='/card.png'
                altImg='placeholder'
                widthImg={352}
                heightImg={264}
                heading='Our Commitments'
                body='See what we’re doing to get involved and make a difference in our community.'
                linkHref='/'
                linkAlt='View all of our commitments'
                linkLabel='View all of our commitments'
                linkClassName='mt-10'
              /> */}
            
            <IsInView toggleOnce={true} threshold={0.5} animateClassNames='animate__faster'>
              <CardDefault
                srcImg='/card.png'
                altImg='placeholder'
                widthImg={352}
                heightImg={264}
                heading='Our Brothers'
                body='The brothers are responsible for maintaining the fraternity and most importantly, taking care of our community.'
                linkHref='/'
                linkAlt='Meet the brothers'
                linkLabel='Meet the brothers'
                linkClassName='mt-10'
              />
            </IsInView>
            <IsInView toggleOnce={true} threshold={0.5} animateClassNames='animate__fast'>
              <CardDefault
                srcImg='/card.png'
                altImg='placeholder'
                widthImg={352}
                heightImg={264}
                heading='Our History'
                body='Founded in 1992, Psi Chi Omega was formed to address the need for a space for Asian American men.'
                linkHref='/'
                linkAlt='About our history'
                linkLabel='About our history'
                linkClassName='mt-10'
              />
            </IsInView>
            <IsInView toggleOnce={true} threshold={0.5}>
              <CardDefault
                srcImg='/card.png'
                altImg='placeholder'
                widthImg={352}
                heightImg={264}
                heading='Our Commitments'
                body='See what we’re doing to get involved and make a difference in our community.'
                linkHref='/'
                linkAlt='View all of our commitments'
                linkLabel='View all of our commitments'
                linkClassName='mt-10'
              />
            </IsInView>
          </Grid>
        </Wrapper>

        <Wrapper className='bg-mist items-center pt-20 md:py-28 lg:pt-32 lg:pb-44'>
          <Grid className='gap-y-6 md:gap-y-8 lg:gap-y-12'>
            <SectionHeader>
              <ContentHeader className="uppercase" title='Start a new journey' isCenter={true} />
              <ContentBody
                isCenter={true}
                text='At Psi Chi Omega, you’ll have opportunities to make the most of your college experience, redefine your identity, experience personal growth, and form meaningful relationships.'
              />
            </SectionHeader>
            <div className='col-span-full sm:flex sm:flex-row sm:gap-x-4 md:gap-x-4 lg:gap-x-8 lg:col-span-10 lg:col-start-2'>
              <CardNoBody
                srcImg='/card.png'
                altImg='placeholder'
                widthImg={364}
                heightImg={252}
                linkHref='/'
                linkAlt='placeholder'
                label='Join the Fraternity'
                linkIsCenter={false}
                linkIsUppercase={true}
              />
              <CardNoBody
                srcImg='/card.png'
                altImg='placeholder'
                widthImg={364}
                heightImg={252}
                linkHref='/'
                linkAlt='placeholder'
                label='Join Little Sis'
                linkIsCenter={false}
                linkIsUppercase={true}
              />
            </div>
          </Grid>
        </Wrapper>

        <Wrapper className='bg-smoke items-center pt-20 pb-20 md:pt-28 lg:pt-32 lg:pb-44'>
          <Grid className='mx-auto'>
            <SectionHeader className=''>
              <ContentHeader title='Our Community' isCenter={true} />
              <ContentBody
                isCenter={true}
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, tpraesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis.'
              />
            </SectionHeader>
          </Grid>
          <Grid>
            <ContentBlockQuote
              className='mt-8 sm:mt-12 md:mt-28 xl:mt-20'
              isReversed={false}
              animateInView={true}
              imgSrc='/images/4-3_placeholder.jpg'
              imgAlt='placeholder'
              imgWidth={1200}
              imgHeight={900}
              eyebrowLabel=''
              header='Our President'
              quote='“Nunc, diam imperdiet gravida mauris, ac faucibus interdum proin nibh erat id mauris lectus amet feugiat ipsum quis dignissim imperdiet.”'
              quoteAuthor='John Smith'
              quoteAuthorSubtext='Alpha Mu Class, Spring 2014'
              linkHref='/'
              linkClassName=''
              linkAlt='Placeholder'
              label='Meet the Brothers'
              linkIsCenter={false}
            />
            <ContentBlockMediaText
              className='mt-8 sm:mt-12 md:mt-16 xl:mt-24 2xl:mt-32 max:mt-64'
              isReversed={true}
              animateInView={true}
              imgSrc='/images/4-3_placeholder.jpg'
              imgAlt='placeholder'
              imgWidth={1200}
              imgHeight={900}
              eyebrowLabel=''
              header='Little Sis Program'
              text='The little sis program was created to allow college women to officially join and become a part of the Psi Chi Omega community.'
              linkHref='/'
              linkClassName=''
              linkAlt='Go to About Little Sis page'
              label='Read More'
              linkIsCenter={false}
            />
            <ContentBlockMediaText
              className='mt-8 sm:mt-12 md:mt-16 xl:mt-24 2xl:mt-32 max:mt-64'
              isReversed={false}
              animateInView={true}
              imgSrc='/images/4-3_placeholder.jpg'
              imgAlt='placeholder'
              imgWidth={1200}
              imgHeight={900}
              eyebrowLabel=''
              header='Alumni'
              text='Our alumni network connects members with mentors, establish professional connections with people in their field, and maintain relationships after college.'
              linkHref='/'
              linkClassName=''
              linkAlt='Go to Our Alumni webpage'
              label='Read More'
              linkIsCenter={false}
            />
          </Grid>
        </Wrapper>

        <Wrapper className='items-center py-20 md:py-24 lg:py-32 xl:py-40'>
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

        <Wrapper className="pb-12 md:py-20 xl:pt-32 xl:pb-64">
          <Grid className='mx-auto'>
            <span className="text--subheadline col-span-full justify-self-center ">
            Need help? Check out our <Link href='/'><a className="underline decoration-midnight">FAQ</a></Link> or <Link className='underline' href='/'><a className="underline decoration-midnight">Contact Us</a></Link>.</span>
          </Grid>
        </Wrapper>


      </Layout>
    </div>
  );
}
