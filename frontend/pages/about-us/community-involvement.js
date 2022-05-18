import Head from "next/head";
import Image from "next/image";
import {
  Layout,
  Wrapper,
  Grid,
  LeaderSimple,
  ContentBlockLeftRightOffset,
  ContentBlockText,
  LinkFeed,
  LinkFeedItem,
  Meta,
} from "@/components";
import { fetchAPI } from "../api/strapi";

export async function getStaticProps({ params }) {
  const communityRes = await fetchAPI("/community-involvement", {
    populate: {
      "*": { populate: "*" },
      "community-involvement": { populate: "*" },
      leader: { populate: "*" },
      commitments: {
        populate: {
          commitment: {
            populate: {
              image: { populate: "*" },
            },
          },
        },
      },
    },
  });

  return {
    props: {
      community: communityRes.data,
      leader: communityRes.data.attributes.leader,
      commitments: communityRes.data.attributes.commitments,
    },
    revalidate: 1,
  };
}

function CommunityInvolvement({ leader, commitments }) {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>Community Involvement | ΨΧΩ</title>
        <Meta
          description='Psi Chi Omega is an Asian-interest fraternity at UC Davis that provides students with cultural space and community to help them understand and connect with their Asian-American identity. '
          keywords='Psi, Chi, Omega, Psi Chi Omega, fraternity, Gamma, Chapter, UC Davis, California, Integrity, Perseverance, Eternal Brotherhood'
          url='/'
          title='Community Involvement | ΨΧΩ'
          imgURL=''
          twitterHandle=''
          
        />
      </Head>

      <Layout>
        <Wrapper className='justify-center'>
          <LeaderSimple heading={leader.title} body={leader.copy} upperCase={false} />
        </Wrapper>

        <Wrapper className='my-12 lg:my-20 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-20'>
          {commitments.data.map((commitment, i) => {
            return (
              <ContentBlockLeftRightOffset
                key={i}
                left={
                  <ContentBlockText
                    header={commitment.attributes.commitment.header}
                    headerIsUppercase={true}
                    headerStyle='mini'
                    text={commitment.attributes.commitment.body}
                  />
                }
                right={
                  <Image
                    src={commitment.attributes.commitment.image.data.attributes.url}
                    alt={commitment.attributes.commitment.image.data.attributes.alternativeText}
                    width={commitment.attributes.commitment.image.data.attributes.width}
                    height={commitment.attributes.commitment.image.data.attributes.height}
                    layout='responsive'
                    priority={true}
                  />
                }
              />
            );
          })}
        </Wrapper>

        <Wrapper className='py-12 md:py-20 lg:py-32'>
          <Grid isCenter={true}>
            <LinkFeed>
              <LinkFeedItem
                className=''
                title='Join Psi Chi Omega'
                caption='Become a brother'
                link='/join/fraternity'
              />
              <LinkFeedItem
                className=''
                title='Brothers'
                caption='Meet the brothers'
                link='/members/brothers'
              />
              <LinkFeedItem
                className=''
                title='Alumni'
                caption='About our alumni network'
                link='/members/alumni'
              />
            </LinkFeed>
          </Grid>
        </Wrapper>
      </Layout>
    </div>
  );
}
export default CommunityInvolvement;
