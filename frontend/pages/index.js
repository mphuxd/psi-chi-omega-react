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
import { fetchAPI } from "./api/strapi";

export async function getStaticProps({ params }) {
  const homepageRes = await fetchAPI("/homepage", {
    populate: {
      "*": { populate: "*" },
      hero: { populate: { image: { populate: "*" } } },
      about: { populate: "*" },
      carousel: {
        populate: {
          slide: { populate: { image: { populate: "*" } } },
        },
      },
      cards: { populate: { card: { populate: { image: { populate: "*" } } } } },
    },
  });

  console.log(homepageRes.data.attributes.about);
  return {
    props: {
      homepage: homepageRes.data,
      about: homepageRes.data.attributes.about,
      hero: homepageRes.data.attributes.hero,
      carousel: homepageRes.data.attributes.carousel.data,
      cards: homepageRes.data.attributes.cards.data,
    },
    revalidate: 1,
  };
}

export default function Home({ hero, about, carousel, cards }) {
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
          title={hero.title}
          imageSrc={hero.image.src.data.attributes.url}
          imageAlt='placeholder'
          imageWidth={1400}
          imageHeight={600}
          subtext={hero.subtext}
        />

        <Wrapper className='my-20 md:my-32'>
          <Grid className='mx-auto'>
            <SectionHeader
              heading={about.heading}
              copy={about.copy}
              href={about.href}
              alt={about.alt}
              label={about.label}
            />
          </Grid>

          <IsInView toggleOnce={true} animateClassNames='animate__fast'>
            <Carousel>
              {carousel.attributes.slide.map((slide, i) => {
                return (
                  <SwiperSlide key={i} className='swiper--slide-width'>
                    {({ isActive }) => (
                      <CarouselSlideContainer
                        src='/images/rona.png'
                        alt={slide.image.alt}
                        width={slide.image.width}
                        height={slide.image.height}
                        heading={slide.heading}
                        copy={slide.copy}
                        href={slide.href}
                        linkAlt={slide.linkAlt}
                        label={slide.linkLabel}
                        isActive={isActive}
                      />
                    )}
                  </SwiperSlide>
                );
              })}
            </Carousel>
          </IsInView>

          <Grid className='mt-32 pb-6 gap-y-5 sm:gap-y-8 mx-auto'>
            {cards.attributes.card.map((card, i) => {
              return (
                <CardDefault
                  key={i}
                  srcImg={card.image.src.data.attributes.url}
                  altImg={card.image.alt}
                  widthImg={card.image.width}
                  heightImg={card.image.height}
                  heading={card.heading}
                  body={card.body}
                  linkHref={card.href}
                  linkAlt={card.alt}
                  linkLabel={card.label}
                  linkClassName='mt-10'
                />
              );
            })}
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
                linkHref='/join/fraternity'
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

            {/* <ContentBlockQuote
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
            /> */}
            <ContentBlockMediaText
              className='mt-12 sm:mt-12 md:mt-16 lg:mt-32'
              isReversed={false}
              animateInView={false}
              imgSrc='/images/4-3_placeholder.jpg'
              imgAlt='placeholder'
              imgWidth={1200}
              imgHeight={900}
              eyebrowLabel=''
              header='Why Psi Chi Omega'
              text='Everyone has different reasons for joining, but we stay for the same reasons — the people, experiences, and memories. Read what our members, who were once in your shoes, have to say about us.'
              linkHref='/join/why'
              linkClassName=''
              linkAlt='Why Join Psi Chi Omega'
              label='Read More'
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
            <ContentHeader
              className='col-span-full mx-auto lg:mx-0 mb-4 md:mb-8'
              title='Upcoming Events'
              isCenter={false}
            />
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
            <span className='text-center text--subheadline col-span-full justify-self-center '>
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
