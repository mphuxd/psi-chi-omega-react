import Head from "next/head";
import Image from "next/image";
import {
  Wrapper,
  Layout,
  Grid,
  SectionHeader,
  ContentHeader,
  ContentBlockLeftRight,
  LinkFeed,
  LinkFeedItem,
  Meta,
  LeaderImportant,
} from "@/components";
import ReactMarkdown from "react-markdown";

import { fetchAPI } from "../api/strapi";

export async function getStaticProps({ params }) {
  const joinRes = await fetchAPI("/join-brother", {
    populate: {
      "*": { populate: "*" },
      image: { populate: "*" },
      process: { populate: "*" },
      steps: { populate: "*" },
    },
  });

  return {
    props: {
      join: joinRes.data.attributes,
      process: joinRes.data.attributes.process,
      steps: joinRes.data.attributes.steps,
    },
    revalidate: 1,
  };
}

function Fraternity({ join, process, steps }) {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>Join Psi Chi Omega | ΨΧΩ</title>
        <Meta
          description='Psi Chi Omega is an Asian-interest fraternity at UC Davis that provides students with cultural space and community to help them understand and connect with their Asian-American identity. '
          keywords='Psi, Chi, Omega, Psi Chi Omega, fraternity, Gamma, Chapter, UC Davis, California, Integrity, Perseverance, Eternal Brotherhood'
          url='/'
          title='Join Psi Chi Omega | ΨΧΩ'
          imgURL=''
          twitterHandle=''
        />
      </Head>

      <Layout>
        <Wrapper>
          <LeaderImportant
            heading={join.heading}
            copy={join.copy}
            image={join.image.data.attributes}
          />
        </Wrapper>

        <Wrapper className='my-8 lg:my-16'>
          <Grid className='mx-auto relative'>
            <SectionHeader
              className='section-header__vertical-dividers'
              heading={process.heading}
              copy={process.copy}
            />
          </Grid>
        </Wrapper>

        <Wrapper className='py-12 sm:py-8 md:py-16 lg:py-20'>
          <Grid className='mx-auto space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-32 '>
            {steps.map((step, i) => {
              return (
                <ContentBlockLeftRight
                  key={i}
                  left={<ContentHeader className='lg:w-1/2' title={step.heading} />}
                  right={
                    <div className='content-block-text__join'>
                      <ReactMarkdown parserOptions={{ commonmark: true }}>
                        {step.copy}
                      </ReactMarkdown>
                    </div>
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
                title='About Psi Chi Omega'
                caption='DISCOVER OUR MISSION, PURPOSE, AND BROTHERHOOD'
                link='/about-us/'
              />
              <LinkFeedItem
                className=''
                title='Why Psi Chi Omega'
                caption='READ WHY OUR MEMBERS LOVE PSI CHI OMEGA'
                link='/join/why'
              />
              <LinkFeedItem
                className=''
                title='FAQ'
                caption='QUESTIONS? CHECK OUT OUR FAQ'
                link='/resources/faq'
              />
            </LinkFeed>
          </Grid>
        </Wrapper>
      </Layout>
    </div>
  );
}
export default Fraternity;
