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
      hero: { populate: { image: { fields: ["alternativeText", "width", "height", "url"] } } },
      about: { populate: "*" },
      carousel: {
        populate: {
          slide: { populate: { image: { fields: ["alternativeText", "width", "height", "url"] } } },
        },
      },
      cards: {
        populate: {
          card: {
            populate: {
              image: { fields: ["alternativeText", "width", "height", "url"] },
            },
          },
        },
      },
      join: {
        populate: {
          header: { populate: "*" },
          brothers: {
            populate: {
              image: { fields: ["alternativeText", "width", "height", "url"] },
            },
          },
          sisters: {
            populate: {
              image: { fields: ["alternativeText", "width", "height", "url"] },
            },
          },
        },
      },
      community: {
        populate: {
          header: { populate: "*" },
          content: {
            populate: {
              image: { fields: ["alternativeText", "width", "height", "url"] },
            },
          },
        },
      },
      events: { populate: "*" },
    },
  });

  return {
    props: {
      about: homepageRes.data.attributes.about,
      hero: homepageRes.data.attributes.hero,
      carousel: homepageRes.data.attributes.carousel.data,
      cards: homepageRes.data.attributes.cards.data,
      join: homepageRes.data.attributes.join,
      community: homepageRes.data.attributes.community,
      events: homepageRes.data.attributes.events,
    },
    revalidate: 1,
  };
}

export default function Home({ hero, about, carousel, cards, join, community, events }) {
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
        />
      </Head>

      <Layout className=''>
        <Hero
          title={hero.title}
          imageSrc={hero.image.data.attributes.url}
          imageAlt={hero.image.data.attributes.alternativeText}
          imageWidth={hero.image.data.attributes.width}
          imageHeight={hero.image.data.attributes.height}
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
                        src={slide.image.data.attributes.url}
                        alt={slide.image.data.attributes.alternativeText}
                        width={slide.image.data.attributes.width}
                        height={slide.image.data.attributes.height}
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
                  srcImg={card.image.data.attributes.url}
                  altImg={card.image.data.attributes.alternativeText}
                  widthImg={card.image.data.attributes.width}
                  heightImg={card.image.data.attributes.height}
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
            <SectionHeader heading={join.header.heading} copy={join.header.copy} />
            <div className='col-span-full space-y-12 sm:space-y-0 sm:flex sm:flex-row sm:gap-x-4 md:gap-x-4 lg:gap-x-8 lg:col-span-10 lg:col-start-2'>
              <CardNoBody
                srcImg={join.brothers.image.data.attributes.url}
                altImg={join.brothers.image.data.attributes.alternativeText}
                widthImg={join.brothers.image.data.attributes.width}
                heightImg={join.brothers.image.data.attributes.height}
                linkHref='/join/fraternity'
                linkAlt={join.brothers.label}
                label={join.brothers.label}
                linkIsCenter={false}
                linkIsUppercase={false}
              />
              <CardNoBody
                srcImg={join.brothers.image.data.attributes.url}
                altImg={join.sisters.image.data.attributes.alternativeText}
                widthImg={join.sisters.image.data.attributes.width}
                heightImg={join.sisters.image.data.attributes.height}
                linkHref='/join/little-sis'
                linkAlt={join.sisters.label}
                label={join.sisters.label}
                linkIsCenter={false}
                linkIsUppercase={false}
              />
            </div>
          </Grid>
        </Wrapper>

        <Wrapper className='bg-smoke items-center py-20 md:pt-28 lg:py-32'>
          <Grid className='mx-auto'>
            <SectionHeader heading={community.header.heading} copy={community.header.copy} />
            {community.content.map((content, i) => {
              return (
                <ContentBlockMediaText
                  key={i}
                  className='mt-12 sm:mt-12 md:mt-16 lg:mt-32'
                  isReversed={content.reverse}
                  animateInView={false}
                  imgSrc={content.image.data.attributes.url}
                  imgAlt={content.image.data.attributes.alternativeText}
                  imgWidth={content.image.data.attributes.width}
                  imgHeight={content.image.data.attributes.height}
                  eyebrowLabel=''
                  header={content.header}
                  text={content.body}
                  linkHref={content.href}
                  linkAlt={content.linkAlt}
                  label={content.linkLabel}
                  linkIsCenter={false}
                />
              );
            })}
          </Grid>
        </Wrapper>

        <Wrapper className='items-center py-20 md:py-24 lg:py-32 xl:py-40'>
          <Grid className='mx-auto sm:gap-x-4 md:gap-x-4 lg:gap-x-8'>
            <ContentHeader
              className='col-span-full mx-auto lg:mx-0 mb-4 md:mb-8'
              title={events.header}
              isCenter={false}
            />
            {events.eventcard.map((event, i) => {
              return (
                <ContentEvent
                  key={i}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  eventName={event.eventName}
                  eventDescription={event.eventDescription}
                />
              );
            })}
          </Grid>
        </Wrapper>

        <Wrapper className='pb-12 md:py-20 xl:pt-32 xl:pb-64'>
          <Grid className='mx-auto'>
            <span className='text-center text--subheadline col-span-full justify-self-center '>
              Need help? Check out our{" "}
              <Link
                legacyBehavior={false}
                href='/resources/faq'
                className='hover:cursor-pointer underline hover:underline decoration-midnight'
              >
                FAQ
              </Link>{" "}
              or{" "}
              <Link
                legacyBehavior={false}
                href='/resources/contact-us'
                className='hover:cursor-pointer underline hover:underline decoration-midnight'
              >
                Contact Us
              </Link>
              .
            </span>
          </Grid>
        </Wrapper>
      </Layout>
    </div>
  );
}
