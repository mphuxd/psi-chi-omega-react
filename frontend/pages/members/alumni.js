import Head from "next/head";
import Image from "next/legacy/image";
import {
  Wrapper,
  Layout,
  Grid,
  LeaderSimpleMedia,
  ContentBlockText,
  LinkFeed,
  LinkFeedItem,
  ContentBlockLeftRightOffset,
  ContentBlockLogoGrid,
  ContentBlockLogoGridItem,
  Meta,
} from "@/components";
import { fetchAPI } from "../api/strapi";
import ReactMarkdown from "react-markdown";

export async function getStaticProps({ params }) {
  const alumniRes = await fetchAPI("/alumni", {
    populate: {
      "*": { populate: "*" },
      alumni: { populate: "*" },
      leader: {
        populate: {
          image: { fields: ["alternativeText", "width", "height", "url"] },
        },
      },
      work: {
        populate: {
          logos: {
            fields: ["alternativeText", "width", "height", "url"],
          },
        },
      },

      help: {
        populate: {
          image: { fields: ["alternativeText", "width", "height", "url"] },
        },
      },
      getInvolved: {
        populate: {
          image: { fields: ["alternativeText", "width", "height", "url"] },
        },
      },
      letter: {
        populate: {
          image: { fields: ["alternativeText", "width", "height", "url"] },
        },
      },
    },
  });

  return {
    props: {
      alumni: alumniRes.data,
      leader: alumniRes.data.attributes.leader,
      work: alumniRes.data.attributes.work,
      help: alumniRes.data.attributes.help,
      getInvolved: alumniRes.data.attributes.getInvolved,
      letter: alumniRes.data.attributes.letter,
    },
    revalidate: 1,
  };
}

function Alumni({ leader, work, help, getInvolved, letter }) {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>Alumni | ΨΧΩ</title>
        <Meta
          description='Psi Chi Omega is an Asian-interest fraternity at UC Davis that provides students with cultural space and community to help them understand and connect with their Asian-American identity. '
          keywords='Psi, Chi, Omega, Psi Chi Omega, fraternity, Gamma, Chapter, UC Davis, California, Integrity, Perseverance, Eternal Brotherhood'
          url='/'
          title='Alumni | ΨΧΩ'
          imgURL=''
          twitterHandle=''
        />
      </Head>

      <Layout>
        <Wrapper>
          <LeaderSimpleMedia
            heading={leader.title}
            body={leader.copy}
            imageSrc={leader.image.data.attributes.url}
            imageAlt={leader.image.data.attributes.alternativeText}
            imageWidth={leader.image.data.attributes.width}
            imageHeight={leader.image.data.attributes.height}
            imageLayout='responsive'
          />
        </Wrapper>

        <Wrapper className='mt-8 md:mt-20 lg:mt-0 pb-20 lg:pb-32 gap-y-16 md:gap-y-24 lg:gap-y-32'>
          <ContentBlockLeftRightOffset
            center={true}
            reverse={true}
            left={<ContentBlockText className='my-auto' header={work.heading} text={work.copy} />}
            right={
              <ContentBlockLogoGrid>
                {work.logos.data.map((logo, i) => {
                  return (
                    <ContentBlockLogoGridItem
                      key={i}
                      src={logo.attributes.url}
                      alt={logo.attributes.alternativeText}
                      width={logo.attributes.width}
                      height={logo.attributes.height}
                    />
                  );
                })}
              </ContentBlockLogoGrid>
            }
          />
          <ContentBlockLeftRightOffset
            center={true}
            reverse={true}
            left={<ContentBlockText className='my-auto' header={help.heading} text={help.copy} />}
            right={
              <Image
                src={help.image.data.attributes.url}
                alt={help.image.data.attributes.alternativeText}
                width={help.image.data.attributes.width}
                height={help.image.data.attributes.height}
                layout='responsive'
              />
            }
          />
          <ContentBlockLeftRightOffset
            center={true}
            reverse={true}
            left={
              <ContentBlockText
                className='my-auto'
                header={getInvolved.heading}
                text={getInvolved.copy}
              />
            }
            right={
              <Image
                src={getInvolved.image.data.attributes.url}
                alt={getInvolved.image.data.attributes.alternativeText}
                width={getInvolved.image.data.attributes.width}
                height={getInvolved.image.data.attributes.height}
                layout='responsive'
              />
            }
          />
        </Wrapper>

        <Wrapper className='bg-smoke'>
          <Grid className='pt-12 md:py-20 lg:py-40' isCenter={true}>
            <div className='col-span-full lg:col-start-3 lg:col-span-8 space-y-8 text--body'>
              <h2 className='text--subheadline'>{letter.heading}</h2>
              <ReactMarkdown parserOptions={{ commonmark: true }}>{letter.copy}</ReactMarkdown>
              <div className='pt-8'>
                <Image
                  src={letter.image.data.attributes.url}
                  alt={letter.image.data.attributes.alternativeText}
                  width={letter.image.data.attributes.width}
                  height={letter.image.data.attributes.height}
                  layout='responsive'
                />
              </div>
            </div>
          </Grid>
        </Wrapper>

        <Wrapper className='py-12 md:py-20 lg:py-[128px]'>
          <Grid isCenter={true}>
            <LinkFeed>
              <LinkFeedItem
                className=''
                title='Our commitments'
                caption='SEE HOW WE’RE GIVING BACK TO OUR COMMUNITY'
                link='/about-us/community-involvement'
              />
              <LinkFeedItem
                className=''
                title='Join Psi Chi Omega'
                caption='Become a brother'
                link='/join/fraternity'
              />
              <LinkFeedItem
                className=''
                title='Why Psi Chi Omega'
                caption='READ WHY OUR MEMBERS LOVE PSI CHI OMEGA'
                link='/join/why'
              />
            </LinkFeed>
          </Grid>
        </Wrapper>
      </Layout>
    </div>
  );
}
export default Alumni;
