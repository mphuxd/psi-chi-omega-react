import Head from "next/head";
import {
  Layout,
  Wrapper,
  LeaderSimpleMedia,
  SectionHeaderSplitOffset,
  Grid,
  GalleryAvatar,
  GalleryAvatarItem,
  GalleryMembers,
  GalleryMember,
  LinkFeed,
  LinkFeedItem,
  Meta,
} from "@/components";

import { fetchAPI } from "../api/strapi";

// export async function getStaticProps({ params }) {
//   const brotherRes = await fetchAPI("/brother", {
//     populate: {
//       "*": { populate: "*" },
//       brother: { populate: "*" },
//       leader: { populate: "*" },
//       executiveBoard: {
//         populate: {
//           executive_boards: { populate: "*" },
//         },
//       },
//       brothers: {
//         populate: {
//           members: { populate: "*" },
//         },
//       },
//     },
//   });

//   console.log(brotherRes.data);
//   return {
//     props: {
//       brother: brotherRes.data,
//       leader: brotherRes.data.attributes.leader,
//       executiveBoard: brotherRes.data.attributes.executiveBoard,
//       brothers: brotherRes.data.attributes.brothers,
//     },
//     revalidate: 1,
//   };
// }

function Brothers() {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>Brothers | ΨΧΩ</title>
        <Meta
          description='Psi Chi Omega is an Asian-interest fraternity at UC Davis that provides students with cultural space and community to help them understand and connect with their Asian-American identity. '
          keywords='Psi, Chi, Omega, Psi Chi Omega, fraternity, Gamma, Chapter, UC Davis, California, Integrity, Perseverance, Eternal Brotherhood'
          url='/'
          title='Brothers | ΨΧΩ'
          imgURL=''
          twitterHandle=''
          faviconHref='/favicon.ico'
        />
      </Head>

      <Layout>
        <Wrapper>
          <LeaderSimpleMedia
            heading='The Brothers'
            body='The brothers are the heart of the fraternity. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo'
            imageSrc='/images/21-9_placeholder.png'
            imageAlt='placeholder1600x900'
            imageWidth={2100}
            imageHeight={900}
            imageLayout='responsive'
          />
        </Wrapper>

        <Wrapper className='pb-20 lg:pb-20 '>
          <Grid isCenter={true}>
            <SectionHeaderSplitOffset
              className='col-span-full'
              title='Executive Board'
              body='Also known as the “Top 7”, the executive board is the elected governing student body that performs the essential duties required for maintaining our fraternity’s mission and values. Together, the top 7 provides leadership and shapes the fraternity’s agenda and direction.'
              divider={true}
            />
          </Grid>

          <GalleryAvatar>
            <GalleryAvatarItem
              avatarName='Matthew Pham'
              avatarTitle='Alumni'
              avatarClass='Alpha Mu Spring 2014'
              imageSrc='/images/icons/avatar.png'
              imageAlt='Test'
            />
            <GalleryAvatarItem
              avatarName='Test'
              avatarTitle='Test2'
              avatarClass='Test3'
              imageSrc='/images/icons/avatar.png'
              imageAlt='Test'
            />
            <GalleryAvatarItem
              avatarName='Test'
              avatarTitle='Test2'
              avatarClass='Test3'
              imageSrc='/images/icons/avatar.png'
              imageAlt='Test'
            />
            <GalleryAvatarItem
              avatarName='Test'
              avatarTitle='Test2'
              avatarClass='Test3'
              imageSrc='/images/icons/avatar.png'
              imageAlt='Test'
            />
            <GalleryAvatarItem
              avatarName='Test'
              avatarTitle='Test2'
              avatarClass='Test3'
              imageSrc='/images/icons/avatar.png'
              imageAlt='Test'
            />
            <GalleryAvatarItem
              avatarName='Test'
              avatarTitle='Test2'
              avatarClass='Test3'
              imageSrc='/images/icons/avatar.png'
              imageAlt='Test'
            />
            <GalleryAvatarItem
              avatarName='Test'
              avatarTitle='Test2'
              avatarClass='Test3'
              imageSrc='/images/icons/avatar.png'
              imageAlt='Test'
            />
          </GalleryAvatar>
        </Wrapper>

        <Wrapper className='pb-20 md:mt-20 lg:pb-32'>
          <Grid isCenter={true}>
            <SectionHeaderSplitOffset
              className='col-span-full'
              title='Active Members'
              body='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, tpraesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa.'
              divider={true}
            />
          </Grid>

          <GalleryMembers>
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
          </GalleryMembers>
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
export default Brothers;
