import Head from "next/head";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
  Layout,
  Grid,
  Hero,
  CardNoBody,
  CardDefault,
  Carousel,
  CarouselSlideContainer,
  ContentHeader,
  ContentBlockQuote,
  ContentEvent,
  ContentBlockMediaText,
  SectionHeader,
  Wrapper,
  IsInView,
  Meta,
} from "@/components";

export default function Home() {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>Psi Chi Omega Fraternity | ΨΧΩ</title>
        <Meta
          description='Psi Chi Omega is an Asian-interest fraternity at UC Davis that provides students with cultural space and community to help them understand and connect with their Asian-American identity. '
          keywords='Psi, Chi, Omega, Psi Chi Omega, fraternity, Gamma, Chapter, UC Davis, California, Integrity, Perseverance, Eternal Brotherhood'
          url='/'
          title='Psi Chi Omega Fraternity | ΨΧΩ'
          imgURL=''
          twitterHandle=''
          faviconHref='/favicon.ico'
        />
      </Head>

      <Layout className=''>
        <Hero
          title='Psi Chi Omega'
          imageSrc='/images/placeholder.jpg'
          imageAlt='placeholder'
          imageWidth={1400}
          imageHeight={600}
          subtext='INTEGRITY ∙ PERSERVERANCE ∙ ETERNAL BROTHERHOOD ∙ GAMMA CHAPTER ∙ UC DAVIS'
        />

        <Wrapper className='my-20 md:my-32'>
          <Grid className='mx-auto'>
            <SectionHeader
              heading='Who We Are'
              copy='Founded in 1992 at UCSD, Psi Chi Omega is the largest and fastest growing Asian-American social fraternity in California. Our success comes from bringing like-minded people together under shared values, traditions, community, and experiences. We provide members with a social environment that encourages mutual growth and cultural acceptance.'
              href='/about-us/'
              alt='About Psi Chi Omega'
              label='About ΨΧΩ'
            />
          </Grid>

          <IsInView toggleOnce={true} animateClassNames='animate__fast'>
            <Carousel>
              <SwiperSlide className='swiper--slide-width'>
                {({ isActive }) => (
                  <CarouselSlideContainer
                    src='/images/rona.png'
                    alt='Coronavirus-19'
                    width={1600}
                    height={900}
                    heading='COVID-19 Response'
                    copy='The health, safety, and well-being of our community, on and off campus, is our top
                    priority'
                    href='/resources/covid-19'
                    linkAlt='Covid-19 Information'
                    label='Learn More'
                    isActive={isActive}
                  />
                )}
              </SwiperSlide>
              <SwiperSlide className='swiper--slide-width'>
                {({ isActive }) => (
                  <CarouselSlideContainer
                    src='/images/16-9_placeholder.jpg'
                    alt='Placeholder Image'
                    width={1600}
                    height={900}
                    heading='Featured Article'
                    copy='Integer ullamcorper nulla in quam mattis urna in interdum in auctor natoque rhoncus cursus nulla viverra tincidunt pharetra consectetur enim iaculis pulvinar lacus.'
                    href='/'
                    linkAlt='placeholder'
                    label='Learn More'
                    isActive={isActive}
                  />
                )}
              </SwiperSlide>
              <SwiperSlide className='swiper--slide-width'>
                {({ isActive }) => (
                  <CarouselSlideContainer
                    src='/images/16-9_placeholder.jpg'
                    alt='Placeholder Image'
                    width={1600}
                    height={900}
                    heading='Featured Article'
                    copy='Integer ullamcorper nulla in quam mattis urna in interdum in auctor natoque rhoncus cursus nulla viverra tincidunt pharetra consectetur enim iaculis pulvinar lacus.'
                    href='/'
                    linkAlt='placeholder'
                    label='Learn More'
                    isActive={isActive}
                  />
                )}
              </SwiperSlide>
            </Carousel>
          </IsInView>

          <Grid className='mt-32 pb-6 gap-y-5 sm:gap-y-8 mx-auto'>
            <CardDefault
              srcImg='/images/16-9_placeholder--small.jpg'
              altImg='placeholder'
              widthImg={800}
              heightImg={450}
              heading='Our Brothers'
              body='The brothers are responsible for maintaining the fraternity and most importantly, taking care of our community.'
              linkHref='/'
              linkAlt='Meet the brothers'
              linkLabel='Meet the brothers'
              linkClassName='mt-10'
            />
            <CardDefault
              srcImg='/images/16-9_placeholder--small.jpg'
              altImg='placeholder'
              widthImg={800}
              heightImg={450}
              heading='Our History'
              body='Founded in 1992, Psi Chi Omega was formed to address the need for a space for Asian American men.'
              linkHref='/'
              linkAlt='About our history'
              linkLabel='About our history'
              linkClassName='mt-10'
            />
            <CardDefault
              srcImg='/images/16-9_placeholder--small.jpg'
              altImg='placeholder'
              widthImg={800}
              heightImg={450}
              heading='Our Commitments'
              body='See what we’re doing to get involved and make a difference in our community.'
              linkHref='/'
              linkAlt='View all of our commitments'
              linkLabel='View all of our commitments'
              linkClassName='mt-10'
            />
          </Grid>
        </Wrapper>

        <Wrapper className='bg-mist items-center py-20 md:py-28 lg:py-32'>
          <Grid className='gap-y-6 md:gap-y-8 lg:gap-y-12'>
            <SectionHeader
              heading='Start a new journey'
              copy='At Psi Chi Omega, you’ll have opportunities to make the most of your college experience, redefine your identity, experience personal growth, and form meaningful relationships.'
            />
            <div className='col-span-full space-y-12 sm:space-y-0 sm:flex sm:flex-row sm:gap-x-4 md:gap-x-4 lg:gap-x-8 lg:col-span-10 lg:col-start-2'>
              <CardNoBody
                srcImg='/card.png'
                altImg='placeholder'
                widthImg={364}
                heightImg={252}
                linkHref='/'
                linkAlt='placeholder'
                label='Join the Fraternity'
                linkIsCenter={false}
                linkIsUppercase={false}
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
                linkIsUppercase={false}
              />
            </div>
          </Grid>
        </Wrapper>

        <Wrapper className='bg-smoke items-center py-20 md:pt-28 lg:py-32'>
          <Grid className='mx-auto'>
            <SectionHeader
              heading='Our Community'
              copy='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, tpraesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis.'
            />

            <ContentBlockQuote
              className='mt-12 sm:mt-12 md:mt-32'
              isReversed={false}
              animateInView={false}
              imgSrc='/images/4-3_placeholder.jpg'
              imgAlt='placeholder'
              imgWidth={1200}
              imgHeight={900}
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
              className='mt-12 sm:mt-12 md:mt-16 lg:mt-32'
              isReversed={true}
              animateInView={false}
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
              className='mt-12 sm:mt-12 md:mt-16 lg:mt-32'
              isReversed={false}
              animateInView={false}
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
            <ContentHeader className='col-span-full mx-auto lg:mx-0 mb-8' title='Upcoming Events' isCenter={false} />
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

        <Wrapper className='pb-12 md:py-20 xl:pt-32 xl:pb-64'>
          <Grid className='mx-auto'>
            <span className='text--subheadline col-span-full justify-self-center '>
              Need help? Check out our{" "}
              <Link href='/'>
                <a className='underline decoration-midnight'>FAQ</a>
              </Link>{" "}
              or{" "}
              <Link className='underline' href='/'>
                <a className='underline decoration-midnight'>Contact Us</a>
              </Link>
              .
            </span>
          </Grid>
        </Wrapper>
      </Layout>
    </div>
  );
}
