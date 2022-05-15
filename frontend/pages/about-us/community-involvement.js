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

// export async function getStaticProps({ params }) {
//   const communityRes = await fetchAPI("/community-involvement", {
//     populate: {
//       "*": { populate: "*" },
//       "community-involvement": { populate: "*" },
//       leader: { populate: "*" },
//       commitments: {
//         populate: "*",
//       },
//     },
//   });

//   console.log(communityRes.data);
//   return {
//     props: {
//       community: communityRes.data,
//       leader: communityRes.data.attributes.leader,
//       commitments: communityRes.data.attributes.milestones,
//     },
//     revalidate: 1,
//   };
// }

function CommunityInvolvement() {
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
          faviconHref='/favicon.ico'
        />
      </Head>

      <Layout>
        <Wrapper className='justify-center'>
          <LeaderSimple
            heading='Our Commitments'
            body="Psi Chi Omega is committed to making a difference for our community. Asian Americans face complex socio-economic issues that can be difficult to face and navigate alone. By advocating for change, volunteering for meaningful causes, tackling difficult issues, we're trying to realize a better future for everyone."
            upperCase={false}
          />
        </Wrapper>

        <Wrapper className='my-12 lg:my-20 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-20'>
          <ContentBlockLeftRightOffset
            left={
              <ContentBlockText
                header='Out of the Darkness'
                headerIsUppercase={true}
                headerStyle='mini'
                text='Every year Psi Chi Omega partners with Out of the Darkness, a dusk till dawn walk that raises awareness on suicide and depression. Out of the Darkness raises money for research and education to prevent suicide from taking place, and provides assistance and a safe outlet for survivors of suicide.'
              />
            }
            right={
              <Image
                src='/images/4-3_placeholder.jpg'
                alt='dasd'
                width={1200}
                height={900}
                layout='responsive'
                priority={true}
              />
            }
          />
          <ContentBlockLeftRightOffset
            left={
              <ContentBlockText
                header='STOP AAPI HATE'
                headerIsUppercase={true}
                headerStyle='mini'
                text='Psi Chi Omega continues to fight against racism and discrimination towards Asians, Asian-Americans, and Pacific Islanders. Psi Chi Omega remains a stronghold for the Asian community at UC Davis.'
              />
            }
            right={
              <Image
                src='/images/4-3_placeholder.jpg'
                alt='dasd'
                width={1200}
                height={900}
                layout='responsive'
              />
            }
          />
          <ContentBlockLeftRightOffset
            left={
              <ContentBlockText
                header='NATIONAL BOARD & ALUMNI SPONSORED SCHOLARSHIP'
                headerIsUppercase={true}
                headerStyle='mini'
                text='To support our students, the Psi Chi Omega National Board and Alumni created an annual scholarship to reward members in recognition of their academic success and actions in accordance of our three pillars.'
              />
            }
            right={
              <Image
                src='/images/4-3_placeholder.jpg'
                alt='dasd'
                width={1200}
                height={900}
                layout='responsive'
              />
            }
          />
          <ContentBlockLeftRightOffset
            left={
              <ContentBlockText
                header='ALUMNI MENTORSHIP PROGRAM'
                headerIsUppercase={true}
                headerStyle='mini'
                text='This newly created initative provides alumni an avenue to get involved in the Psi Chi Omega community by connecting students with alumni. This mentorship program intends to provide students with a deeper support network, and the skills they need to succeed.'
              />
            }
            right={
              <Image
                src='/images/4-3_placeholder.jpg'
                alt='dasd'
                width={1200}
                height={900}
                layout='responsive'
              />
            }
          />
          <ContentBlockLeftRightOffset
            left={
              <ContentBlockText
                header='BLACK LIVES MATTER'
                headerIsUppercase={true}
                headerStyle='mini'
                text='Psi Chi Omega stands with Black People. Hate and discrimination has no place at Psi Chi Omega and we are working to build a more diverse and inclusive community for everyone. '
              />
            }
            right={
              <Image
                src='/images/4-3_placeholder.jpg'
                alt='dasd'
                width={1200}
                height={900}
                layout='responsive'
              />
            }
          />
          <ContentBlockLeftRightOffset
            left={
              <ContentBlockText
                header='SEXUAL ASSAULT AND HARASSMENT'
                headerIsUppercase={true}
                headerStyle='mini'
                text='Psi Chi Omega does not tolerate sexual assault and harrassment. We ensure every attendee at Psi Chi Omega events are safe.'
              />
            }
            right={
              <Image
                src='/images/4-3_placeholder.jpg'
                alt='dasd'
                width={1200}
                height={900}
                layout='responsive'
              />
            }
          />
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
export default CommunityInvolvement;
