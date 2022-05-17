import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Layout,
  Wrapper,
  Grid,
  SectionHeaderSplit,
  ContentBlockLeftRight,
  ContentBlockMedia,
  ContentBlockText,
  ContentBlockBody,
  LeaderSimpleMedia,
  LinkButton,
  LinkFeedItem,
  LinkFeed,
  Gallery,
  GalleryItemDefault,
  GalleryItemLarge,
  Meta,
} from "@/components";
import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../api/strapi";

export async function getStaticProps({ params }) {
  const littleSisRes = await fetchAPI("/little-sis", {
    populate: {
      "*": { populate: "*" },
      image: { fields: ["alternativeText", "width", "height", "url"] },
      about: { populate: "*" },
      history: { populate: { image: { fields: ["alternativeText", "width", "height", "url"] } } },
      benefits: { populate: { image: { fields: ["alternativeText", "width", "height", "url"] } } },
      imageTwo: {
        fields: ["alternativeText", "width", "height", "url"],
      },
      link: { populate: "*" },
      gallery: {
        populate: {
          imageLarge: { fields: ["alternativeText", "width", "height", "url"] },
          imageSmall: { fields: ["alternativeText", "width", "height", "url"] },
        },
      },
    },
  });

  return {
    props: {
      littleSis: littleSisRes.data.attributes,
      image: littleSisRes.data.attributes.image.data.attributes,
      about: littleSisRes.data.attributes.about,
      history: littleSisRes.data.attributes.history,
      benefits: littleSisRes.data.attributes.benefits,
      imageTwo: littleSisRes.data.attributes.imageTwo.data.attributes,
      link: littleSisRes.data.attributes.link,
      gallery: littleSisRes.data.attributes.gallery,
    },
    revalidate: 1,
  };
}

function LittleSisProgram({ littleSis, image, about, history, benefits, imageTwo, link, gallery }) {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>About Little Sis | ΨΧΩ</title>
        <Meta
          description='Psi Chi Omega is an Asian-interest fraternity at UC Davis that provides students with cultural space and community to help them understand and connect with their Asian-American identity. '
          keywords='Psi, Chi, Omega, Psi Chi Omega, fraternity, Gamma, Chapter, UC Davis, California, Integrity, Perseverance, Eternal Brotherhood'
          url='/'
          title='About Little Sis | ΨΧΩ'
          imgURL=''
          twitterHandle=''
          faviconHref='/favicon.ico'
        />
      </Head>

      <Layout>
        <LeaderSimpleMedia
          heading={littleSis.heading}
          body={littleSis.copy}
          imageSrc={image.url}
          imageAlt={image.alternativeText}
          imageWidth={image.width}
          imageHeight={image.height}
        />
        <Wrapper className='mt-20 md:mt-20 lg:my-[144px]'>
          <Grid isCenter={true}>
            <SectionHeaderSplit
              leftText={
                <>
                  A place that feels like <span className='text-red-800'>home.</span>
                </>
              }
              rightText={about.right}
            />
            <ContentBlockLeftRight
              className='flex-col my-20 lg:mt-24 lg:gap-x-8'
              left={
                <ContentBlockMedia className='lg:w-1/2'>
                  <Image
                    src={history.image.data.attributes.url}
                    alt={history.image.data.attributes.alternativeText}
                    width={history.image.data.attributes.width}
                    height={history.image.data.attributes.height}
                    layout='responsive'
                  />
                </ContentBlockMedia>
              }
              right={
                <ContentBlockBody className='mt-4 md:mt-8 px-2 md:px-0 lg:w-1/2 lg:my-auto'>
                  <ContentBlockText
                    header={history.header}
                    text={
                      <ReactMarkdown parserOptions={{ commonmark: true }}>
                        {history.body}
                      </ReactMarkdown>
                    }
                  />
                  <LinkButton
                    className='mt-3 md:mt-6 lg:mt-6'
                    href={history.href}
                    alt={history.linkAlt}
                    label={history.linkLabel}
                    isCenter={false}
                  />
                </ContentBlockBody>
              }
            />

            <ContentBlockLeftRight
              className='flex-col-reverse my-20 lg:mt-24 lg:gap-x-8'
              left={
                <div className='w-full max-w-xl lg:w-1/2 mt-4 lg:my-auto'>
                  <div>
                    <h3 className='font-semibold text-lg'>{benefits.benefitOneLabel}</h3>
                    <p className='mt-2'>{benefits.benefitOneCopy}</p>
                  </div>
                  <div className='mt-6'>
                    <h3 className='font-semibold text-lg'>{benefits.benefitTwoLabel}</h3>
                    <p className='mt-2'>{benefits.benefitTwoCopy}</p>
                  </div>
                </div>
              }
              right={
                <ContentBlockMedia className='lg:w-1/2'>
                  <Image
                    src={benefits.image.data.attributes.url}
                    alt={benefits.image.data.attributes.alternativeText}
                    width={benefits.image.data.attributes.width}
                    height={benefits.image.data.attributes.height}
                    layout='responsive'
                  />
                </ContentBlockMedia>
              }
            />
          </Grid>
        </Wrapper>

        <Wrapper className='mt-20 md:mt-20 lg:my-[144px]'>
          <Grid isCenter={true}>
            <div className='col-span-full'>
              <Image
                src={imageTwo.url}
                alt={imageTwo.alternativeText}
                width={imageTwo.width}
                height={imageTwo.height}
              />
              <Link href='/join/little-sis'>
                <a className='theme-grid__inner relative py-4 md:py-6'>
                  <div className='link-feed-item__body'>
                    <span className='link-feed-item__header'>{link[0].heading}</span>
                    <span className='link-feed-item__caption mt-2 md:mt-4 lg:my-auto lg:col-span-5 lg:leading-6'>
                      {link[0].copy}
                    </span>
                  </div>
                  <div className='col-span-1 self-center justify-self-center h-fit'>
                    <Image
                      src='/images/icons/arrow_filled.svg'
                      alt='Link Arrow'
                      width={48}
                      height={48}
                    />
                  </div>
                </a>
              </Link>
            </div>
          </Grid>
        </Wrapper>

        <Wrapper className='py-12 md:py-20 lg:py-[128px]'>
          <Grid isCenter={true}>
            <LinkFeed>
              <LinkFeedItem
                className=''
                title='Join Psi Chi Omega'
                caption='Become a brother'
                link='/'
              />
              <LinkFeedItem
                className=''
                title='Little Sis Program'
                caption='About Little Sis'
                link='/'
              />
              <LinkFeedItem
                className=''
                title='Alumni'
                caption='About our alumni network'
                link='/'
              />
            </LinkFeed>
          </Grid>
        </Wrapper>

        <Wrapper className='py-12 md:py-20 lg:py-[128px] bg-midnight'>
          <Grid isCenter={true}>
            <Gallery>
              <GalleryItemLarge
                src={gallery.imageLarge.data.attributes.url}
                alt={gallery.imageLarge.data.attributes.alternativeText}
                layout='fill'
              />
              {gallery.imageSmall.data.map((image, i) => {
                return (
                  <GalleryItemDefault
                    key={i}
                    src={image.attributes.url}
                    alt={image.attributes.alternativeText}
                    width={image.attributes.width}
                    height={image.attributes.height}
                    layout='responsive'
                  />
                );
              })}
            </Gallery>
          </Grid>
        </Wrapper>
      </Layout>
    </div>
  );
}
export default LittleSisProgram;
