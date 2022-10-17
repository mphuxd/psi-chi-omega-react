import Head from "next/head";
import {
  Layout,
  Wrapper,
  LeaderSimple,
  Grid,
  ContentBlockHistory,
  HistoryBody,
  HistoryMetricList,
  HistoryMetricListItem,
  LinkFeed,
  LinkFeedItem,
  Meta,
} from "@/components";
import { fetchAPI } from "../api/strapi";
import ReactMarkdown from "react-markdown";

export async function getStaticProps({ params }) {
  const historyRes = await fetchAPI("/history", {
    populate: {
      "*": { populate: "*" },
      leader: { populate: "*" },
      milestones: {
        populate: {
          fact: { populate: "*" },
          image: { populate: "*" },
        },
      },
    },
  });
  return {
    props: {
      leader: historyRes.data.attributes.leader,
      milestones: historyRes.data.attributes.milestones,
    },
    revalidate: 1,
  };
}

function History({ leader, milestones }) {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>History | ΨΧΩ</title>
        <Meta
          description='Psi Chi Omega is an Asian-interest fraternity at UC Davis that provides students with cultural space and community to help them understand and connect with their Asian-American identity. '
          keywords='Psi, Chi, Omega, Psi Chi Omega, fraternity, Gamma, Chapter, UC Davis, California, Integrity, Perseverance, Eternal Brotherhood'
          url='/'
          title='History | ΨΧΩ'
          imgURL=''
          twitterHandle=''
        />
      </Head>

      <Layout>
        <Wrapper className='justify-center'>
          <LeaderSimple heading={leader.title} body={leader.copy} upperCase={false} />
        </Wrapper>

        <div className='pb-12 md:pb-20 lg:pb-[128px]'>
          {milestones.map((milestone, i) => {
            return (
              <Wrapper key={i} className='mt-12 md:mt-20 lg:pb-10'>
                <ContentBlockHistory
                  heading={milestone.heading}
                  imageSrc={milestone.image.data.attributes.url}
                  imageAlt={milestone.image.data.attributes.alternativeText}
                  imageWidth={milestone.image.data.attributes.width}
                  imageHeight={milestone.image.data.attributes.height}
                  layout='responsive'
                  priority={true}
                  imageMetricList={
                    <HistoryMetricList>
                      {milestone.fact.data.attributes.fact.map((fact, j) => {
                        return (
                          <HistoryMetricListItem key={j} label={fact.label} metric={fact.metric} />
                        );
                      })}
                    </HistoryMetricList>
                  }
                  bodyObject={
                    <HistoryBody>
                      <ReactMarkdown parserOptions={{ commonmark: true }}>
                        {milestone.body}
                      </ReactMarkdown>
                    </HistoryBody>
                  }
                />
              </Wrapper>
            );
          })}
        </div>

        <Wrapper className='py-12 md:py-20 lg:py-[128px]'>
          <Grid isCenter={true}>
            <LinkFeed>
              <LinkFeedItem
                className=''
                title='Our Commitments'
                caption="See how we're giving back to our community"
                link='/about-us/community-involvement'
              />
              <LinkFeedItem
                className=''
                title='Little Sis Program'
                caption='About Little Sis'
                link='/about-us/little-sis-program'
              />
              <LinkFeedItem
                className=''
                title='Why Psi Chi Omega'
                caption='Read why our members joined Psi Chi Omega'
                link='/join/why'
              />
            </LinkFeed>
          </Grid>
        </Wrapper>
      </Layout>
    </div>
  );
}
export default History;
