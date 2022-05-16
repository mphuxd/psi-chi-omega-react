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

export async function getStaticProps({ params }) {
  const brotherRes = await fetchAPI("/brother", {
    populate: {
      "*": { populate: "*" },
      brother: { populate: "*" },
      leader: { populate: "*" },
      executiveBoard: {
        populate: {
          executive_boards: { populate: "*" },
        },
      },
      brothers: {
        populate: {
          members: {
            populate: "*",
          },
        },
      },
    },
  });
  return {
    props: {
      brother: brotherRes.data.attributes,
      leader: brotherRes.data.attributes.leader,
      executiveBoard: brotherRes.data.attributes.executiveBoard,
      brothers: brotherRes.data.attributes.brothers,
    },
    revalidate: 1,
  };
}

function Brothers({ brother, leader, executiveBoard, brothers }) {
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
            heading={leader.heading}
            body={leader.copy}
            imageSrc={leader.image.data.attributes.url}
            imageAlt={leader.image.data.attributes.alternativeText}
            imageWidth={leader.image.data.attributes.width}
            imageHeight={leader.image.data.attributes.height}
            imageLayout='responsive'
          />
        </Wrapper>

        <Wrapper className='pb-20 lg:pb-20 '>
          <Grid isCenter={true}>
            <SectionHeaderSplitOffset
              className='col-span-full'
              title={executiveBoard.heading}
              body={executiveBoard.body}
              divider={true}
            />
          </Grid>

          <GalleryAvatar>
            {executiveBoard.executive_boards.data.map((member, i) => {
              return (
                <GalleryAvatarItem
                  key={i}
                  avatarName={member.attributes.member.memberName}
                  avatarTitle='Alumni'
                  avatarClass={member.attributes.member.memberClass}
                  imageSrc='/images/icons/avatar.png'
                  imageAlt='Test'
                />
              );
            })}
          </GalleryAvatar>
        </Wrapper>

        <Wrapper className='pb-20 md:mt-20 lg:pb-32'>
          <Grid isCenter={true}>
            <SectionHeaderSplitOffset
              className='col-span-full'
              title={brothers.heading}
              body={brothers.body}
              divider={true}
            />
          </Grid>

          <GalleryMembers>
            {brothers.members.data.map((member, i) => {
              return (
                <GalleryMember
                  key={i}
                  memberName={member.attributes.member.memberName}
                  memberClass={member.attributes.member.memberClass}
                />
              );
            })}
            {/* <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' />
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
            <GalleryMember memberName='Matthew Pham' memberClass='Alpha Mu Spring 2014' /> */}
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
