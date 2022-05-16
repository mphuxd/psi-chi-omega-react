import Head from "next/head";
import {
  Layout,
  Wrapper,
  Grid,
  ContentBlockCenteredText,
  LinkFeed,
  LinkFeedItem,
  LeaderSimpleMedia,
  Meta,
} from "@/components";
import ReactMarkdown from "react-markdown";

import { fetchAPI } from "../api/strapi";

export async function getStaticProps({ params }) {
  const whyRes = await fetchAPI("/why", {
    populate: {
      "*": { populate: "*" },
      image: { populate: "*" },
      reason: { populate: "*" },
    },
  });

  return {
    props: {
      why: whyRes.data.attributes,
      reasons: whyRes.data.attributes.reason,
    },
    revalidate: 1,
  };
}

function Why({ why, reasons }) {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>Why Psi Chi Omega | ΨΧΩ</title>
        <Meta
          description='Psi Chi Omega is an Asian-interest fraternity at UC Davis that provides students with cultural space and community to help them understand and connect with their Asian-American identity. '
          keywords='Psi, Chi, Omega, Psi Chi Omega, fraternity, Gamma, Chapter, UC Davis, California, Integrity, Perseverance, Eternal Brotherhood'
          url='/'
          title='Why Psi Chi Omega | ΨΧΩ'
          imgURL=''
          twitterHandle=''
          faviconHref='/favicon.ico'
        />
      </Head>

      <Layout>
        <Wrapper>
          <LeaderSimpleMedia
            heading={why.heading}
            body={why.body}
            imageSrc={why.image.data.attributes.url}
            imageAlt={why.image.data.attributes.alternativeText}
            imageWidth={why.image.data.attributes.width}
            imageHeight={why.image.data.attributes.height}
            imageLayout='responsive'
          />
        </Wrapper>

        <Wrapper className='pt-8 lg:pt-0 pb-12 sm:pb-8 md:pb-16 lg:pb-20'>
          <Grid className='mx-auto space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-32 '>
            {reasons.map((reason, i) => {
              return (
                <ContentBlockCenteredText
                  key={i}
                  heading={reason.heading}
                  body={
                    <ReactMarkdown parserOptions={{ commonmark: true }}>
                      {reason.body}
                    </ReactMarkdown>
                  }
                />
              );
            })}
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
      </Layout>
    </div>
  );
}

export default Why;
