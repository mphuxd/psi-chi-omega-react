import Head from "next/head";
import Layout from "../../components/Layout";
import Wrapper from "../../components/Wrapper/Wrapper";
import LeaderSimpleMedia from "../../components/Leader/LeaderSimpleMedia";
import SectionSplitHeaderOffset from "../../components/Heading/SectionSplitHeaderOffset";
import Grid from "../../components/Grid/Grid";
import Image from "next/image";
import GalleryAvatar from "../../components/Gallery/GalleryAvatar";
import GalleryAvatarItem from "../../components/Gallery/GalleryAvatarItem";
import GalleryMembers from "../../components/Gallery/GalleryMembers";
import GalleryMember from "../../components/Gallery/GalleryMember";
import ContentBlockLinkFeed from "../../components/Content/ContentBlockLinkFeed";
import ContentBlockLinkFeedItem from "../../components/Content/ContentBlockLinkFeedItem";

function Brothers() {
  return (
    <div className='antialiased overflow-x-hidden min-w-full'>
      <Head>
        <title>Brothers | ΨΧΩ</title>
        <link rel='icon' href='/favicon.ico' />
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

        <Wrapper className='pb-20 lg:pb-32'>
          <Grid isCenter={true}>
            <SectionSplitHeaderOffset
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

        <Wrapper className='pb-20 lg:pb-32'>
          <Grid isCenter={true}>
            <SectionSplitHeaderOffset
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
            <ContentBlockLinkFeed>
              <ContentBlockLinkFeedItem
                className=''
                title='Join Psi Chi Omega'
                caption='Become a brother'
                link='/'
              />
              <ContentBlockLinkFeedItem
                className=''
                title='Little Sis Program'
                caption='About Little Sis'
                link='/'
              />
              <ContentBlockLinkFeedItem
                className=''
                title='Alumni'
                caption='About our alumni network'
                link='/'
              />
            </ContentBlockLinkFeed>
          </Grid>
        </Wrapper>
      </Layout>
    </div>
  );
}
export default Brothers;
